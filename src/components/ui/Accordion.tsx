import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

export interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
  id?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
  id = 'artavel-accordion'
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(itemId) ? prev.filter((i) => i !== itemId) : [...prev, itemId]
      );
    } else {
      setOpenIds((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  return (
    <div id={id} className={`divide-y divide-[#DBE4EB] border-y border-[#DBE4EB] ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-4">
            <h3>
              <button
                type="button"
                id={`accordion-header-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 font-semibold text-lg text-[#172536] hover:text-[#36699C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded-lg p-1 cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#36699C] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
                className="mt-3 text-[#5C6B79] leading-relaxed text-base pl-1 pr-6"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
