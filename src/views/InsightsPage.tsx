import React from 'react';
import { getLocalizedInsights } from '../content/insights';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface InsightsPageProps {
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const { language, text } = useLanguage();
  const articles = getLocalizedInsights(language);

  return (
    <>
      <MetaInjector
        title={`${text('Wawasan & Transformasi Digital')} — PT Artavel`}
        description={text('Artikel, insight, dan panduan praktis dari tim Artavel mengenai AI, analytics, transformasi digital, pendidikan, retail, pemerintahan, IoT, cybersecurity, dan pengembangan sistem.')}
        canonicalPath="/wawasan"
      />

      <Section bg="surface" padding="compact">
        <Container>
          <Breadcrumb items={[{ label: text('Wawasan') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
              {text('Wawasan & Transformasi Digital')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
              {text('Artikel, insight, dan panduan praktis dari tim Artavel mengenai AI, analytics, transformasi digital, pendidikan, retail, pemerintahan, IoT, cybersecurity, dan pengembangan sistem.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col justify-between p-6">
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

                  <h2 className="text-lg font-bold text-[#172536] font-heading mb-3 hover:text-[#36699C] transition-colors">
                    <a
                      href={`/wawasan/${article.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/wawasan/${article.slug}`);
                      }}
                    >
                      {article.title}
                    </a>
                  </h2>

                  <p className="text-xs text-[#5C6B79] leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DBE4EB] flex items-center justify-between text-xs text-[#5C6B79]">
                  <span>{article.authorName}</span>
                  <button
                    onClick={() => onNavigate(`/wawasan/${article.slug}`)}
                    className="artavel-inline-action-link font-bold text-[#36699C] cursor-pointer inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mr-1"
                  >
                    <span>{text('Baca')}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
