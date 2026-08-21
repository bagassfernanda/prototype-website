import React from 'react';
import {
  ArrowRight,
  Camera,
  ClipboardList,
  FileCheck2,
  FolderKanban,
  Globe2,
  GraduationCap,
  MailCheck,
  ScanLine,
  ShieldAlert,
  ShoppingCart,
  Users
} from 'lucide-react';
import { SOLUTION_CATEGORIES, getRelatedProducts } from '../../content/products';
import type { SolutionCategory } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

interface SolutionGridSectionProps {
  onNavigate: (path: string) => void;
  compact?: boolean;
}

export const SolutionGridSection: React.FC<SolutionGridSectionProps> = ({ onNavigate, compact = false }) => {
  const { text, localize } = useLanguage();
  const categories = localize(SOLUTION_CATEGORIES);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return FileCheck2;
      case 'FolderKanban': return FolderKanban;
      case 'MailCheck': return MailCheck;
      case 'Users': return Users;
      case 'ScanLine': return ScanLine;
      case 'ShieldAlert': return ShieldAlert;
      case 'Camera': return Camera;
      case 'Globe2': return Globe2;
      case 'GraduationCap': return GraduationCap;
      case 'ClipboardList': return ClipboardList;
      case 'ShoppingCart': return ShoppingCart;
      default: return FileCheck2;
    }
  };

  return (
    <Section bg="surface-blue" padding={compact ? 'compact' : 'normal'} id="solusi-artavel">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-10" direction="scale">
          <Badge variant="blue" size="md" className="mb-3">
	            {text('Ekosistem Solusi Artavel')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
	            {text('Lima Keluarga Solusi Teknologi Artavel')}
          </h2>
          <p className="text-base text-[#5C6B79] mt-3">
	            {text('Temukan area kebutuhan utama dan produk yang relevan dalam satu peta solusi.')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-5">
	          {categories.map((category: SolutionCategory, index) => {
            const IconComponent = getIcon(category.iconName);
            const relatedProducts = getRelatedProducts(category);
            const displayedProducts = compact ? relatedProducts.slice(0, 2) : relatedProducts;

            return (
              <Card
                key={category.id}
                id={category.slug}
                accentBorder={category.accentColor}
                className="flex h-full flex-col justify-between p-4 sm:p-5"
                revealDelay={index * 70}
              >
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2F8] text-[#36699C]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F7F9FB] text-[#5C6B79] border border-[#DBE4EB]">
                      {text('Solusi')}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug text-[#172536] font-heading mb-2">
                    {category.title}
                  </h3>

                  <p className="line-clamp-3 text-xs leading-relaxed text-[#5C6B79] mb-3">
                    {category.description}
                  </p>

                  {relatedProducts.length > 0 && (
                    <div className="mb-3 space-y-1 border-t border-[#DBE4EB] pt-3">
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#172536] font-heading">
	                      {text('Produk Terkait:')}
                    </span>
                    {displayedProducts.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => onNavigate(product.detailPath)}
                        className="flex min-h-9 w-full items-center justify-between gap-2 rounded-lg border border-[#DBE4EB] bg-[#F7F9FB] px-2.5 py-1.5 text-left text-xs text-[#5C6B79] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#36699C]/35 hover:bg-white hover:text-[#172536] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
                      >
                        <span className="min-w-0 truncate font-bold text-[#172536]">
                          {product.name}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#36699C]" aria-hidden="true" />
                        </button>
                    ))}
                    {compact && relatedProducts.length > displayedProducts.length && (
                      <span className="block pt-1 text-[11px] font-semibold text-[#5C6B79]">
                        + {relatedProducts.length - displayedProducts.length} {text('produk lainnya')}
                      </span>
                    )}
                    </div>
                  )}

                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(category.path)}
                    className="artavel-inline-action-link inline-flex items-center gap-2 whitespace-nowrap text-xs font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -ml-1"
                  >
	                    <span>{text('Lihat Area Solusi')}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {compact && (
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-[#B7D7C4] bg-[#EFF8EA] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#172536] font-heading">
                {text('Cek Kesiapan Digital Organisasi')}
              </p>
              <p className="mt-1 max-w-3xl text-xs leading-relaxed text-[#1F5D4B]">
                {text('Cek kesiapan proses, data, keamanan, analytics, dan infrastruktur organisasi Anda.')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/assessment')}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#36699C] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#244F78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] focus-visible:ring-offset-2"
            >
              {text('Mulai Assessment')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
};
