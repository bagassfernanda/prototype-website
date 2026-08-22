import React from 'react';
import { getLocalizedInsights } from '../content/insights';
import { PRODUCTS_DATA } from '../content/products';
import type { InsightArticle } from '../types';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { MarkdownRenderer } from '../components/ui/MarkdownRenderer';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { ArrowRight, Clock, User } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface InsightDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ slug, onNavigate }) => {
  const { language, text, localize } = useLanguage();
  const articles = getLocalizedInsights(language);
  const products = localize(PRODUCTS_DATA);
  const article = articles.find((a) => a.slug === slug) || articles[0];
  const relatedProductIds = article.relatedProductIds || [];
  const relatedProducts = relatedProductIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product): product is typeof products[number] => Boolean(product));
  const relationSet = new Set(relatedProductIds);
  const getRelatedArticleScore = (candidate: InsightArticle) => {
    const productOverlap = (candidate.relatedProductIds || []).filter((productId) =>
      relationSet.has(productId)
    ).length;

    return (candidate.category === article.category ? 4 : 0) + productOverlap * 3;
  };
  const relatedArticles = articles
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => ({
      article: candidate,
      score: getRelatedArticleScore(candidate)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((candidate) => candidate.article);
  const primaryCtaPath = article.ctaPath || relatedProducts[0]?.detailPath || '/kontak';
  const primaryCtaLabel = article.ctaLabel || text('Konsultasikan Topik Ini');

  return (
    <>
      <MetaInjector
        title={article.metadata?.title || `${article.title} — PT Artavel Wawasan`}
        description={article.metadata?.description || article.excerpt}
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
          <article className="max-w-none text-[#172536]">
            <p className="text-lg sm:text-xl font-medium text-[#5C6B79] bg-[#F7F9FB] p-6 rounded-2xl border border-[#DBE4EB] leading-8">
              {article.excerpt}
            </p>

            <MarkdownRenderer content={article.contentMarkdown} className="mt-8" />
          </article>

          {(article.relatedSolution || relatedProducts.length > 0) && (
            <section className="mt-12 border-t border-[#DBE4EB] pt-8" aria-labelledby="related-solutions-heading">
              <h2 id="related-solutions-heading" className="text-2xl font-extrabold text-[#172536] font-heading mb-5">
                {text('Produk dan Solusi Terkait')}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {article.relatedSolution && (
                  <Card padding="sm" accentBorder="blue" className="flex flex-col justify-between">
                    <div>
                      <Badge variant="blue" size="sm" className="mb-3">
                        {text('Solusi Terkait')}
                      </Badge>
                      <h3 className="text-lg font-extrabold text-[#172536] font-heading">
                        {article.relatedSolution.label}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate(article.relatedSolution?.path || '/solusi')}
                      className="artavel-inline-action-link mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#36699C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mx-1"
                    >
                      <span>{text('Lihat Solusi')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </Card>
                )}

                {relatedProducts.map((product) => (
                  <Card key={product.id} padding="sm" accentBorder={product.accentColor} className="flex flex-col justify-between">
                    <div>
                      <Badge variant="green" size="sm" className="mb-3">
                        {text(product.ownership === 'partner-technology' ? 'Partner Technology' : 'Produk Terkait')}
                      </Badge>
                      <h3 className="text-lg font-extrabold text-[#172536] font-heading">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#5C6B79] leading-relaxed">
                        {product.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate(product.detailPath)}
                      className="artavel-inline-action-link mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#36699C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mx-1"
                    >
                      <span>{text('Pelajari Produk')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {relatedArticles.length > 0 && (
            <section className="mt-12 border-t border-[#DBE4EB] pt-8" aria-labelledby="related-articles-heading">
              <h2 id="related-articles-heading" className="text-2xl font-extrabold text-[#172536] font-heading mb-5">
                {text('Wawasan Terkait')}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} padding="sm" className="flex flex-col justify-between">
                    <div>
                      <Badge variant="blue" size="sm" className="mb-3">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="text-base font-extrabold text-[#172536] font-heading leading-snug">
                        {relatedArticle.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate(`/wawasan/${relatedArticle.slug}`)}
                      className="artavel-inline-action-link mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#36699C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mx-1"
                    >
                      <span>{text('Baca Artikel')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-6 border-t border-[#DBE4EB] flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <Button
              variant="outline"
              onClick={() => onNavigate('/wawasan')}
            >
              {text('← Kembali ke Wawasan')}
            </Button>
            <Button
              variant="primary"
              onClick={() => onNavigate(primaryCtaPath)}
            >
              {primaryCtaLabel}
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
