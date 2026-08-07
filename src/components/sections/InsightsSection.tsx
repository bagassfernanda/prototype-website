import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { INSIGHTS_DATA } from '../../content/insights';
import { InsightArticle } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

interface InsightsSectionProps {
  onNavigate: (path: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const articles = localize(INSIGHTS_DATA);

  return (
    <Section bg="surface" padding="normal" id="wawasan-terbaru">
      <Container>
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" direction="scale">
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
              {text('Artikel & Edukasi')}
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading">
              {text('Wawasan Praktis Tata Kelola Digital')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/wawasan')}
            className="artavel-inline-action-link inline-flex items-center gap-2 text-sm font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-2 py-1"
          >
            <span>{text('Lihat Seluruh Artikel')}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article: InsightArticle, index) => (
            <Card key={article.id} className="flex flex-col justify-between" revealDelay={index * 80}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="blue" size="sm">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-[#5C6B79] flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {article.readTimeMinutes} {text('Mnt Baca')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#172536] font-heading mb-3 line-clamp-2 hover:text-[#36699C] transition-colors">
                  <a
                    href={`/wawasan/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/wawasan/${article.slug}`);
                    }}
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs text-[#5C6B79] leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DBE4EB] flex items-center justify-between text-xs text-[#5C6B79]">
                <span>{article.authorName}</span>
                <button
                  onClick={() => onNavigate(`/wawasan/${article.slug}`)}
                  className="artavel-inline-action-link inline-flex items-center gap-1 font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mr-1"
                >
                  <span>{text('Baca Artikel')}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
