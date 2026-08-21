import React from 'react';
import {
  ArrowRight,
  Camera,
  FileCheck2,
  FolderKanban,
  Globe2,
  GraduationCap,
  MailCheck,
  ShieldAlert,
  ShoppingCart,
  Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FEATURED_PRODUCT_IDS, PRODUCTS_DATA } from '../content/products';
import type { Product } from '../types';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

const products = FEATURED_PRODUCT_IDS
  .map((id) => PRODUCTS_DATA.find((product) => product.id === id))
  .filter((product): product is Product => Boolean(product));

const ownershipLabelMap: Record<Product['ownership'], string> = {
  'artavel-product': 'Artavel Product',
  'artavel-solution': 'Artavel Solution',
  'partner-technology': 'Partner Technology'
};

const getProductIcon = (iconName: string): LucideIcon => {
  switch (iconName) {
    case 'Camera': return Camera;
    case 'FileCheck2': return FileCheck2;
    case 'FolderKanban': return FolderKanban;
    case 'Globe2': return Globe2;
    case 'GraduationCap': return GraduationCap;
    case 'MailCheck': return MailCheck;
    case 'ShieldAlert': return ShieldAlert;
    case 'ShoppingCart': return ShoppingCart;
    case 'Users': return Users;
    default: return FileCheck2;
  }
};

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const localizedProducts = localize(products);
  const productSections = [
    {
      id: 'artavel-products',
      title: 'Artavel Products & Solutions',
      description:
        'Produk dan solusi yang dimiliki Artavel untuk sekolah, retail, GIS analytics, computer vision, dan digital government.',
      items: localizedProducts.filter((product) => product.ownership !== 'partner-technology')
    },
    {
      id: 'partner-technologies',
      title: 'Partner Technologies',
      description:
        'Teknologi partner yang dapat diposisikan dan diintegrasikan dalam solusi Artavel sesuai kebutuhan organisasi.',
      items: localizedProducts.filter((product) => product.ownership === 'partner-technology')
    }
  ].filter((section) => section.items.length > 0);

  return (
    <>
      <MetaInjector
        title={`${text('Produk Digital Artavel')} — PT Artavel`}
        description={text('Solusi siap implementasi yang dirancang untuk kebutuhan operasional organisasi, institusi pendidikan, pelayanan publik, dan bisnis.')}
        canonicalPath="/produk"
      />

      <Section bg="surface" padding="compact">
        <Container>
          <Breadcrumb items={[{ label: text('Produk') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <Badge variant="blue" size="md" className="mb-4">
              {text('Produk & Technology')}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
              {text('Produk Digital Artavel')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
              {text('Solusi siap implementasi yang dirancang untuk kebutuhan operasional organisasi, institusi pendidikan, pelayanan publik, dan bisnis.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="surface-blue" padding="normal" id="produk-artavel">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14" direction="scale">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
              {text('Produk Siap Digunakan dan Dikembangkan')}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B79]">
              {text('Daftar ini membedakan produk Artavel, solusi Artavel, dan partner technology agar pengunjung memahami mana aplikasi nyata Artavel dan mana teknologi pendukung yang dapat diintegrasikan.')}
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {productSections.map((section, sectionIndex) => (
              <div key={section.id} id={section.id}>
                <div className="mb-7 max-w-3xl">
                  <h3 className="text-2xl font-extrabold text-[#172536] font-heading">
                    {text(section.title)}
                  </h3>
                  <p className="mt-2 text-sm text-[#5C6B79] leading-relaxed">
                    {text(section.description)}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((product, index) => {
                    const IconComponent = getProductIcon(product.iconName);
                    const revealDelay = (sectionIndex * 120) + (index * 70);

                    return (
                      <Card
                        key={product.id}
                        id={`produk-card-${product.id}`}
                        accentBorder={product.accentColor}
                        className="flex flex-col justify-between"
                        revealDelay={revealDelay}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center">
                              <IconComponent className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="inline-flex max-w-[12rem] items-center justify-center rounded-full border border-[#DBE4EB] bg-[#F7F9FB] px-2.5 py-0.5 text-right text-xs leading-snug text-[#5C6B79]">
                                {product.categoryLabel}
                              </span>
                              <span className="artavel-ownership-badge inline-flex max-w-[12rem] items-center justify-center rounded-full border border-[#DBE4EB] bg-white px-2.5 py-0.5 text-right text-[11px] font-bold leading-snug text-[#244F78]">
                                {text(ownershipLabelMap[product.ownership])}
                              </span>
                              {product.statusLabel && (
                                <Badge variant="green" size="sm">
                                  {product.statusLabel}
                                </Badge>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#172536] font-heading mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm font-semibold text-[#36699C] mb-3">
                            {product.subtitle}
                          </p>
                          <p className="text-sm text-[#5C6B79] leading-relaxed">
                            {product.shortDescription}
                          </p>
                          {product.technologyTags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {product.technologyTags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-[#B7D7C4] bg-[#EFF8EA] px-2.5 py-0.5 text-[11px] font-bold text-[#4B6546]"
                                >
                                  {text(tag)}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#DBE4EB]">
                          <button
                            type="button"
                            onClick={() => onNavigate(product.detailPath)}
                            className="artavel-inline-action-link inline-flex items-center gap-2 text-sm font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -ml-1"
                          >
                            <span>{text(product.ownership === 'partner-technology' ? 'Pelajari Technology' : 'Pelajari Produk')}</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
