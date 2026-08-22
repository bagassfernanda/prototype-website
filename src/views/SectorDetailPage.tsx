import React from 'react';
import { ArrowRight, Briefcase, Building2, CheckCircle2, ClipboardCheck, GraduationCap, Store, Users } from 'lucide-react';
import { SECTORS_DATA } from '../content/sectors';
import { SOLUTIONS_DATA } from '../content/solutions';
import { PRODUCTS_DATA } from '../content/products';
import { Product, Sector, Solution } from '../types';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { JsonLdInjector } from '../components/seo/JsonLdInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface SectorDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

const getSectorIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return Briefcase;
    case 'GraduationCap':
      return GraduationCap;
    case 'Store':
      return Store;
    case 'Users':
      return Users;
    case 'Building2':
    default:
      return Building2;
  }
};

const isSolution = (value: Solution | undefined): value is Solution => Boolean(value);
const isProduct = (value: Product | undefined): value is Product => Boolean(value);

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({ slug, onNavigate }) => {
  const { text, localize } = useLanguage();
  const sectors = localize(SECTORS_DATA) as Sector[];
  const solutions = localize(SOLUTIONS_DATA) as Solution[];
  const products = localize(PRODUCTS_DATA) as Product[];
  const sector = sectors.find((item) => item.slug === slug) || sectors[0];
  const Icon = getSectorIcon(sector.iconName);
  const recommendedSolutions = sector.recommendedSolutions
    .map((solutionSlug) => solutions.find((solution) => solution.slug === solutionSlug))
    .filter(isSolution);
  const relatedProducts = (sector.relatedProductIds || [])
    .map((productId) => products.find((product) => product.id === productId))
    .filter(isProduct);

  return (
    <>
      <MetaInjector
        title={`${sector.title} — PT Artavel`}
        description={sector.description}
        canonicalPath={`/sektor/${sector.slug}`}
      />

      <JsonLdInjector
        type="Service"
        data={{
          name: sector.title,
          provider: {
            '@type': 'Organization',
            name: 'PT Artavel'
          },
          description: sector.description
        }}
        id={`sector-${sector.slug}`}
      />

      <Section bg="surface-blue" padding="compact">
        <Container>
          <Breadcrumb
            items={[
              { label: text('Sektor'), path: '/sektor' },
              { label: sector.title }
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Badge variant="blue" size="md" className="mb-5">
                {text('Sektor Layanan')}
              </Badge>
              <h1 className="text-3xl font-extrabold leading-tight text-[#172536] font-heading sm:text-4xl lg:text-5xl">
                {sector.title}
              </h1>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-[#36699C]">
                {sector.subtitle}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5C6B79] sm:text-lg">
                {sector.description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-[#DBE4EB] bg-white p-6 shadow-[0_20px_60px_rgba(23,57,85,0.12)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2F8] text-[#36699C]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-[#5C6B79]">
                  {text('Sektor membantu pengunjung memilih konteks organisasi terlebih dahulu, lalu melihat solusi Artavel yang paling relevan untuk kebutuhan tersebut.')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-6">
              <h2 className="mb-5 text-xl font-extrabold text-[#172536] font-heading">
                {text('Organisasi yang Relevan')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {sector.targetOrganizations.map((item) => (
                  <span key={item} className="rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] px-3 py-2 text-xs font-semibold text-[#172536]">
                    {item}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="mb-5 text-xl font-extrabold text-[#172536] font-heading">
                {text('Tantangan Utama')}
              </h2>
              <div className="space-y-3">
                {sector.keyChallenges.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#5C6B79]">
                    <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#36699C]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="mb-5 text-xl font-extrabold text-[#172536] font-heading">
                {text('Dampak yang Diharapkan')}
              </h2>
              <div className="space-y-3">
                {sector.expectedImpacts.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#5C6B79]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#568F3E]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bg="surface" padding="normal" id="solusi-rekomendasi">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#36699C] font-heading">
              {text('Solusi yang Direkomendasikan')}
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-[#172536] font-heading">
              {text('Paket solusi Artavel untuk sektor ini')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {recommendedSolutions.map((solution) => (
              <Card key={solution.id} className="flex h-full flex-col p-6">
                <Badge variant={solution.accentColor} size="sm" className="mb-4 w-fit">
                  {solution.productFamily}
                </Badge>
                <h3 className="text-xl font-extrabold text-[#172536] font-heading">
                  {solution.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C6B79]">
                  {solution.shortDescription}
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onNavigate(`/solusi/${solution.slug}`)}
                    rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  >
                    {text('Lihat Solusi')}
                  </Button>
                </div>
              </Card>
            ))}

            {relatedProducts.map((product) => (
              <Card key={product.id} className="flex h-full flex-col p-6">
                <Badge variant={product.accentColor} size="sm" className="mb-4 w-fit">
                  {text(product.ownership === 'partner-technology' ? 'Partner Technology' : 'Produk Terkait')}
                </Badge>
                <h3 className="text-xl font-extrabold text-[#172536] font-heading">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C6B79]">
                  {product.subtitle}
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => onNavigate(product.detailPath)}
                    rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  >
                    {text('Pelajari Produk')}
                  </Button>
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
