import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Download,
  ExternalLink,
  FileCheck2,
  FolderKanban,
  Globe2,
  GraduationCap,
  MailCheck,
  MonitorCheck,
  ShieldAlert,
  ShoppingCart,
  Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getProductBySlug, PRODUCTS_DATA } from '../content/products';
import type { Product } from '../types';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Accordion } from '../components/ui/Accordion';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { InteractiveWorkflowSim } from '../components/sections/InteractiveWorkflowSim';
import { MetaInjector } from '../components/seo/MetaInjector';
import { JsonLdInjector } from '../components/seo/JsonLdInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

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

const primaryAnchorClass =
  'artavel-button artavel-button-primary inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#36699C] px-7 py-3.5 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#244F78] hover:shadow active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] focus-visible:ring-offset-2';

const outlineAnchorClass =
  'artavel-button artavel-button-outline inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#36699C] bg-transparent px-7 py-3.5 text-lg font-semibold text-[#36699C] transition-all duration-200 hover:bg-[#36699C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] focus-visible:ring-offset-2';

const ownershipLabelMap: Record<Product['ownership'], string> = {
  'artavel-product': 'Artavel Product',
  'artavel-solution': 'Artavel Solution',
  'partner-technology': 'Partner Technology'
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug, onNavigate }) => {
  const { language, text, localize } = useLanguage();
  const product = localize(getProductBySlug(slug) || PRODUCTS_DATA[0]) as Product;
  const IconComponent = getProductIcon(product.iconName);
  const hasDemoUrl = Boolean(product.demoUrl);
  const showcaseTitle =
    product.id === 'otoschool'
      ? 'Lihat otoSchool Secara Langsung'
      : product.id === 'otopos-fnb'
        ? 'Lihat otoPOS F&B Secara Langsung'
        : product.id === 'smartmap-gis-analytics'
          ? 'Lihat SmartMap & GIS Analytics'
          : product.id === 'ai-cctv-computer-vision'
            ? 'Lihat AI CCTV & Computer Vision'
            : product.id === 'footfallcam'
              ? 'Lihat FootfallCam Secara Langsung'
              : product.id === 'opentext-cybersecurity'
                ? 'Lihat OpenText Cybersecurity'
                : 'Lihat Produk Secara Langsung';
  const showcaseDescription =
    product.id === 'otoschool'
      ? 'Bukan sekadar konsep. Lihat bagaimana otoSchool digunakan dalam aktivitas sekolah sehari-hari.'
      : product.id === 'otopos-fnb'
        ? 'Lihat bagaimana modul utama otoPOS F&B menjawab kebutuhan kasir, workforce, inventory, keuangan, aset, dan performa.'
        : product.id === 'smartmap-gis-analytics'
          ? 'Cuplikan dari materi Artavel menunjukkan VirtualMAP, JobMAP, PBB berbasis map, dan detail objek berbasis lokasi.'
          : product.id === 'ai-cctv-computer-vision'
            ? 'Cuplikan dari materi Artavel menunjukkan people counting, zone monitoring, parking monitoring, dan people detection.'
            : product.id === 'footfallcam'
              ? 'Cuplikan brosur menampilkan perangkat counter, analytics software, metrik visitor analytics, dan instalasi.'
              : product.id === 'opentext-cybersecurity'
                ? 'Cuplikan materi Artavel menampilkan OpenText sebagai partner technology untuk endpoint security.'
                : 'Tinjau tampilan dan kapabilitas produk yang relevan untuk kebutuhan organisasi Anda.';

  return (
    <>
      <MetaInjector
        title={product.metadata.title}
        description={product.metadata.description}
        canonicalPath={product.detailPath}
      />

      <JsonLdInjector
        type="Product"
        data={{
          name: product.name,
          brand: {
            '@type': 'Brand',
            name: product.ownership === 'partner-technology' ? product.name : 'PT Artavel'
          },
          category: product.categoryLabel,
          description: product.heroDescription
        }}
        id={product.slug}
      />

      <Section bg="surface-blue" padding="compact">
        <Container>
          <Breadcrumb
            items={[
              { label: text('Produk'), path: '/produk' },
              { label: product.name }
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Badge variant={product.accentColor} size="md">
                  {product.categoryLabel}
                </Badge>
                {product.statusLabel && (
                  <Badge variant="green" size="md">
                    {product.statusLabel}
                  </Badge>
                )}
                <span className="artavel-ownership-badge inline-flex items-center rounded-full border border-[#DBE4EB] bg-white/70 px-3 py-1 text-xs font-bold text-[#244F78]">
                  {text(ownershipLabelMap[product.ownership])}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#36699C] mb-5">
                {product.subtitle}
              </p>
              <p className="text-lg sm:text-xl text-[#5C6B79] leading-relaxed mb-8">
                {product.heroDescription}
              </p>

              {product.technologyTags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {product.technologyTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#B7D7C4] bg-[#EFF8EA] px-3 py-1 text-xs font-extrabold text-[#4B6546]"
                    >
                      {text(tag)}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
                {hasDemoUrl && product.demoUrl ? (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primaryAnchorClass}
                  >
                    <span>{text('Coba Demo')}</span>
                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  </a>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => onNavigate('/kontak')}
                    rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                  >
                    {text('Jadwalkan Demo')}
                  </Button>
                )}

                {hasDemoUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => onNavigate('/kontak')}
                  >
                    {text('Jadwalkan Demo')}
                  </Button>
                )}

                {product.brochureHref && (
                  <a
                    href={product.brochureHref}
                    download
                    className={outlineAnchorClass}
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>
                      {language === 'en'
                        ? `Download ${product.name} Brochure`
                        : `Unduh Brosur ${product.name}`}
                    </span>
                  </a>
                )}
              </div>

              {!hasDemoUrl && product.demoConfigKey && (
                <p className="mt-4 text-sm text-[#5C6B79]">
                  {language === 'en'
                    ? `The direct demo button will be enabled after ${product.demoConfigKey} is configured. Visitors are currently directed to schedule a demo.`
                    : `Tombol demo langsung akan diaktifkan setelah ${product.demoConfigKey} dikonfigurasi. Saat ini pengunjung diarahkan untuk menjadwalkan demo.`}
                </p>
              )}
            </div>

            <Card className="bg-white/90" hoverable={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#EAF2F8] text-[#36699C]">
                  <IconComponent className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#36699C]">
                    {text(product.ownership === 'partner-technology' ? 'Positioning Technology' : 'Positioning Produk')}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-[#172536] font-heading">
                    {product.tagline}
                  </h2>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-[#F7F9FB]">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#172536] font-heading">
                  {language === 'en'
                    ? `Who Needs ${product.name}?`
                    : `Siapa yang Membutuhkan ${product.name}?`}
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {product.targetUsers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#172536]">
                    <CheckCircle2 className="w-4 h-4 text-[#568F3E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-[#EAF2F8]/55 border-[#36699C]/20">
              <div className="flex items-center gap-2 mb-4">
                <MonitorCheck className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#172536] font-heading">
                  {text('Tantangan yang Diselesaikan')}
                </h2>
              </div>
              <ul className="space-y-3">
                {product.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#5C6B79]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#568F3E] flex-shrink-0 mt-2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bg="surface" padding="normal">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12" direction="scale">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
              {text('Hasil Pascaimplementasi')}
            </h2>
            <p className="text-3xl font-extrabold text-[#172536] font-heading">
              {text('Hasil Nyata yang Ditargetkan')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.outcomes.map((outcome, index) => (
              <div key={outcome} className="rounded-2xl border border-[#DBE4EB] bg-white p-6 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#EFF8EA] text-[#568F3E] flex items-center justify-center font-bold text-sm mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-sm font-semibold text-[#172536] leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal" id="modul-produk">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12" direction="scale">
            <Badge variant={product.accentColor} size="md" className="mb-3">
              {text('Modul Produk')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
              {text('Kapabilitas / Modul Utama')}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B79]">
              {text('Kapabilitas berikut membantu tim menjalankan proses operasional utama dari satu ekosistem produk.')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {product.modules.map((module, index) => (
              <Card
                key={module.id}
                padding="sm"
                accentBorder={index % 2 === 0 ? 'blue' : 'green'}
                revealDelay={index * 35}
                className="h-full"
              >
                <h3 className="text-lg font-bold text-[#172536] font-heading mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-[#5C6B79] leading-relaxed">
                  {module.description}
                </p>
                {module.details && module.details.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-[#DBE4EB] pt-4">
                    {module.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-[#5C6B79]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#568F3E]" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="surface-blue" padding="normal">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <ScrollReveal direction="left">
              <Badge variant="blue" size="md" className="mb-3">
                {text('Diferensiasi')}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
                {product.id === 'otopos-fnb'
                  ? text('Kenapa otoPOS F&B Berbeda?')
                  : language === 'en'
                    ? `Why Choose ${product.name}?`
                    : `Kenapa Memilih ${product.name}?`}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.differentiators.map((item, index) => (
                <Card key={item.id} padding="sm" revealDelay={index * 70} className="h-full">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2F8] text-sm font-extrabold text-[#36699C]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-[#172536] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C6B79] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal" id="showcase-produk">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12" direction="scale">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
              {text(showcaseTitle)}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B79]">
              {text(showcaseDescription)}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.showcase.map((item, index) => (
              <Card key={item.id} padding="none" revealDelay={index * 80} className="overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-[#F7F9FB]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#172536] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C6B79] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="surface" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="bg-white">
              <h2 className="text-2xl font-extrabold text-[#172536] font-heading mb-4">
                {text('Integrasi yang Didukung')}
              </h2>
              <ul className="space-y-3">
                {product.integrations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#5C6B79]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#568F3E]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-[#EAF2F8]/55 border-[#36699C]/20">
              <h2 className="text-2xl font-extrabold text-[#172536] font-heading mb-4">
                {text('Keamanan Data & Demo')}
              </h2>
              <ul className="space-y-3">
                {product.securityFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#5C6B79]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#568F3E]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {product.id === 'tnde' && <InteractiveWorkflowSim />}

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <ScrollReveal className="text-center mb-10" direction="scale">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading">
              {text('FAQ')}
            </h2>
          </ScrollReveal>
          <Accordion items={product.faqs} />
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
