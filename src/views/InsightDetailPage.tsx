import React from 'react';
import { INSIGHTS_DATA } from '../content/insights';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Clock, User } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface InsightDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ slug, onNavigate }) => {
  const { text, localize } = useLanguage();
  const articles = localize(INSIGHTS_DATA);
  const article = articles.find((a) => a.slug === slug) || articles[0];

  return (
    <>
      <MetaInjector
        title={`${article.title} — PT Artavel Wawasan`}
        description={article.excerpt}
        canonicalPath={`/wawasan/${article.slug}`}
        ogType="article"
      />

      <Section bg="surface" padding="compact">
        <Container size="narrow">
          <Breadcrumb
            items={[
	              { label: text('Wawasan'), path: '/wawasan' },
              { label: article.title }
            ]}
            onNavigate={onNavigate}
          />

          <div className="py-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="blue" size="md">
                {article.category}
              </Badge>
              <span className="text-xs text-[#5C6B79] flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
	                {article.readTimeMinutes} {text('Menit Membaca')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-[#5C6B79] pb-6 border-b border-[#DBE4EB]">
              <User className="w-4 h-4 text-[#36699C]" aria-hidden="true" />
              <span>{article.authorName} ({article.authorRole})</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <article className="prose max-w-none text-[#172536] leading-relaxed space-y-6">
            <p className="text-lg font-medium text-[#5C6B79] bg-[#F7F9FB] p-6 rounded-2xl border border-[#DBE4EB]">
              {article.excerpt}
            </p>

            <div className="text-base space-y-4 whitespace-pre-line">
              {article.contentMarkdown}
            </div>
          </article>

          <div className="mt-12 pt-6 border-t border-[#DBE4EB] flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => onNavigate('/wawasan')}
            >
	              {text('← Kembali ke Wawasan')}
            </Button>
            <Button
              variant="primary"
              onClick={() => onNavigate('/kontak')}
            >
	              {text('Konsultasikan Topik Ini')}
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
