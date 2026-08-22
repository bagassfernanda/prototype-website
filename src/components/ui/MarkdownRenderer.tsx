import React from 'react';

type ListType = 'ul' | 'ol';

interface ListBlock {
  type: ListType;
  items: ListItem[];
}

interface ListItem {
  content: string;
  children: ListBlock[];
}

type MarkdownBlock =
  | { type: 'heading'; level: 2 | 3 | 4; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'blockquote'; content: string }
  | { type: 'hr' }
  | ListBlock;

interface ListMatch {
  type: ListType;
  indent: number;
  content: string;
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const getIndent = (line: string) => line.length - line.trimStart().length;

const getHeading = (line: string) => {
  const trimmed = line.trim();
  let markerCount = 0;

  while (trimmed[markerCount] === '#') {
    markerCount += 1;
  }

  if (markerCount === 0 || trimmed[markerCount] !== ' ') {
    return null;
  }

  const level = markerCount <= 2 ? 2 : markerCount === 3 ? 3 : 4;

  return {
    level: level as 2 | 3 | 4,
    content: trimmed.slice(markerCount + 1).trim()
  };
};

const isHorizontalRule = (line: string) => {
  const trimmed = line.trim();

  if (trimmed.length < 3) {
    return false;
  }

  return [...trimmed].every((char) => char === '-') ||
    [...trimmed].every((char) => char === '*') ||
    [...trimmed].every((char) => char === '_');
};

const getListMatch = (line: string): ListMatch | null => {
  const indent = getIndent(line);
  const trimmed = line.trimStart();

  if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
    return {
      type: 'ul',
      indent,
      content: trimmed.slice(2).trim()
    };
  }

  let digitCount = 0;

  while (digitCount < trimmed.length && trimmed[digitCount] >= '0' && trimmed[digitCount] <= '9') {
    digitCount += 1;
  }

  if (digitCount > 0 && trimmed[digitCount] === '.' && trimmed[digitCount + 1] === ' ') {
    return {
      type: 'ol',
      indent,
      content: trimmed.slice(digitCount + 2).trim()
    };
  }

  return null;
};

const isBlockStart = (line: string) => {
  const trimmed = line.trim();

  return Boolean(
    getHeading(line) ||
      isHorizontalRule(line) ||
      getListMatch(line) ||
      trimmed.startsWith('> ')
  );
};

const parseList = (
  lines: string[],
  startIndex: number,
  baseIndent: number,
  listType: ListType
): { block: ListBlock; nextIndex: number } => {
  const items: ListItem[] = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      break;
    }

    const match = getListMatch(line);

    if (!match) {
      if (items.length > 0 && getIndent(line) > baseIndent) {
        items[items.length - 1].content = `${items[items.length - 1].content} ${line.trim()}`;
        index += 1;
        continue;
      }

      break;
    }

    if (match.indent < baseIndent) {
      break;
    }

    if (match.indent > baseIndent) {
      if (items.length === 0) {
        break;
      }

      const nestedList = parseList(lines, index, match.indent, match.type);
      items[items.length - 1].children.push(nestedList.block);
      index = nestedList.nextIndex;
      continue;
    }

    if (match.type !== listType) {
      break;
    }

    items.push({
      content: match.content,
      children: []
    });
    index += 1;
  }

  return {
    block: {
      type: listType,
      items
    },
    nextIndex: index
  };
};

const parseMarkdownBlocks = (content: string): MarkdownBlock[] => {
  const lines = content.trim().split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const heading = getHeading(line);

    if (heading) {
      blocks.push({
        type: 'heading',
        level: heading.level,
        content: heading.content
      });
      index += 1;
      continue;
    }

    if (isHorizontalRule(line)) {
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith('> ')) {
        quoteLines.push(lines[index].trim().slice(2).trim());
        index += 1;
      }

      blocks.push({
        type: 'blockquote',
        content: quoteLines.join(' ')
      });
      continue;
    }

    const listMatch = getListMatch(line);

    if (listMatch) {
      const list = parseList(lines, index, listMatch.indent, listMatch.type);
      blocks.push(list.block);
      index = list.nextIndex;
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({
      type: 'paragraph',
      content: paragraphLines.join(' ')
    });
  }

  return blocks;
};

const sanitizeHref = (href: string) => {
  const trimmed = href.trim();

  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    const allowedProtocols = ['https:', 'http:', 'mailto:', 'tel:'];

    return allowedProtocols.includes(url.protocol) ? trimmed : null;
  } catch {
    return null;
  }
};

const parseInline = (content: string, keyPrefix: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  let index = 0;

  const pushText = (endIndex: number) => {
    if (endIndex > index) {
      nodes.push(content.slice(index, endIndex));
      index = endIndex;
    }
  };

  while (index < content.length) {
    if (content.startsWith('`', index)) {
      const endIndex = content.indexOf('`', index + 1);

      if (endIndex > index) {
        nodes.push(
          <code key={`${keyPrefix}-code-${index}`} className="rounded bg-[#EAF2F8] px-1.5 py-0.5 text-[0.92em] font-semibold text-[#244F78]">
            {content.slice(index + 1, endIndex)}
          </code>
        );
        index = endIndex + 1;
        continue;
      }
    }

    if (content.startsWith('**', index) || content.startsWith('__', index)) {
      const marker = content.slice(index, index + 2);
      const endIndex = content.indexOf(marker, index + 2);

      if (endIndex > index) {
        nodes.push(
          <strong key={`${keyPrefix}-strong-${index}`} className="font-extrabold text-[#172536]">
            {parseInline(content.slice(index + 2, endIndex), `${keyPrefix}-strong-${index}`)}
          </strong>
        );
        index = endIndex + 2;
        continue;
      }
    }

    if (content.startsWith('*', index) || content.startsWith('_', index)) {
      const marker = content[index];
      const endIndex = content.indexOf(marker, index + 1);

      if (endIndex > index) {
        nodes.push(
          <em key={`${keyPrefix}-em-${index}`} className="italic">
            {parseInline(content.slice(index + 1, endIndex), `${keyPrefix}-em-${index}`)}
          </em>
        );
        index = endIndex + 1;
        continue;
      }
    }

    if (content.startsWith('[', index)) {
      const textEndIndex = content.indexOf(']', index + 1);
      const hrefStartIndex = textEndIndex + 1;

      if (textEndIndex > index && content[hrefStartIndex] === '(') {
        const hrefEndIndex = content.indexOf(')', hrefStartIndex + 1);

        if (hrefEndIndex > hrefStartIndex) {
          const href = sanitizeHref(content.slice(hrefStartIndex + 1, hrefEndIndex));
          const label = content.slice(index + 1, textEndIndex);

          if (href) {
            nodes.push(
              <a
                key={`${keyPrefix}-link-${index}`}
                href={href}
                className="font-semibold text-[#36699C] underline decoration-[#7DBC5E]/50 underline-offset-4 transition-colors hover:text-[#244F78]"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {parseInline(label, `${keyPrefix}-link-${index}`)}
              </a>
            );
          } else {
            nodes.push(label);
          }

          index = hrefEndIndex + 1;
          continue;
        }
      }
    }

    const nextSpecialIndexes = ['`', '*', '_', '[']
      .map((marker) => content.indexOf(marker, index + 1))
      .filter((markerIndex) => markerIndex >= 0);
    const nextIndex = nextSpecialIndexes.length > 0 ? Math.min(...nextSpecialIndexes) : content.length;

    pushText(nextIndex);
  }

  return nodes;
};

const renderList = (block: ListBlock, keyPrefix: string): React.ReactElement => {
  const ListTag = block.type;

  return (
    <ListTag
      key={keyPrefix}
      className={`my-5 space-y-3 pl-5 text-[#5C6B79] ${block.type === 'ol' ? 'list-decimal' : 'list-disc'}`}
    >
      {block.items.map((item, index) => (
        <li key={`${keyPrefix}-item-${index}`} className="pl-1 leading-relaxed">
          <span>{parseInline(item.content, `${keyPrefix}-item-${index}`)}</span>
          {item.children.map((nestedList, nestedIndex) =>
            renderList(nestedList, `${keyPrefix}-nested-${index}-${nestedIndex}`)
          )}
        </li>
      ))}
    </ListTag>
  );
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className={`artavel-markdown-content ${className}`}>
      {blocks.map((block, index) => {
        const key = `markdown-block-${index}`;

        if (block.type === 'heading') {
          if (block.level === 2) {
            return (
              <h2 key={key} className="mt-10 text-2xl sm:text-3xl font-extrabold text-[#172536] font-heading leading-tight">
                {parseInline(block.content, key)}
              </h2>
            );
          }

          if (block.level === 3) {
            return (
              <h3 key={key} className="mt-8 text-xl sm:text-2xl font-extrabold text-[#172536] font-heading leading-tight">
                {parseInline(block.content, key)}
              </h3>
            );
          }

          return (
            <h4 key={key} className="mt-7 text-lg font-extrabold text-[#172536] font-heading leading-snug">
              {parseInline(block.content, key)}
            </h4>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={key} className="my-5 text-base sm:text-lg leading-8 text-[#5C6B79]">
              {parseInline(block.content, key)}
            </p>
          );
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote key={key} className="my-6 border-l-4 border-[#7DBC5E] bg-[#F7F9FB] px-5 py-4 text-base sm:text-lg font-medium leading-8 text-[#244F78]">
              {parseInline(block.content, key)}
            </blockquote>
          );
        }

        if (block.type === 'hr') {
          return <hr key={key} className="my-8 border-[#DBE4EB]" />;
        }

        return renderList(block, key);
      })}
    </div>
  );
};
