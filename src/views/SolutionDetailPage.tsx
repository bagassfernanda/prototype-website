import React, { useMemo, useState } from 'react';
import { SOLUTIONS_DATA } from '../content/solutions';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { Card } from '../components/ui/Card';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { JsonLdInjector } from '../components/seo/JsonLdInjector';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Server,
  AlertCircle,
  BellRing,
  Camera,
  ClipboardList,
  Code2,
  Database,
  DatabaseBackup,
  FileSearch,
  FileSignature,
  FolderKanban,
  FolderTree,
  Globe2,
  Headphones,
  LayoutDashboard,
  MapPinned,
  Monitor,
  MonitorCheck,
  Palette,
  PenLine,
  QrCode,
  Route,
  ScanLine,
  ScanSearch,
  SearchCheck,
  Shield,
  TimerReset,
  Upload,
  Workflow
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';
import type { Capability } from '../types';

interface SolutionDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ slug, onNavigate }) => {
  const { text, localize } = useLanguage();
  const solutions = localize(SOLUTIONS_DATA);
  const solution = solutions.find((s) => s.slug === slug) || solutions[0];
  const [activeCapabilityId, setActiveCapabilityId] = useState(solution.capabilities[0]?.id ?? '');
  const activeCapability = useMemo(
    () => solution.capabilities.find((cap) => cap.id === activeCapabilityId) || solution.capabilities[0],
    [activeCapabilityId, solution.capabilities]
  );

  const getCapabilityIcon = (capability: Capability): LucideIcon => {
    const descriptor = `${capability.id} ${capability.title}`.toLowerCase();

    if (descriptor.includes('klasifikasi')) return FolderTree;
    if (descriptor.includes('ocr') || descriptor.includes('pencarian')) return ScanSearch;
    if (descriptor.includes('lokasi') || descriptor.includes('rak')) return MapPinned;
    if (descriptor.includes('retensi') || descriptor.includes('pemusnahan')) return TimerReset;
    if (descriptor.includes('workflow')) return Workflow;
    if (descriptor.includes('perizinan') || descriptor.includes('modul')) return ClipboardList;
    if (descriptor.includes('tte') || descriptor.includes('tanda tangan')) return FileSignature;
    if (descriptor.includes('retribusi') || descriptor.includes('gateway') || descriptor.includes('sms') || descriptor.includes('email')) return BellRing;
    if (descriptor.includes('surat') || descriptor.includes('templat')) return PenLine;
    if (descriptor.includes('disposisi')) return Route;
    if (descriptor.includes('tracking') || descriptor.includes('monitoring')) return MonitorCheck;
    if (descriptor.includes('kiosk') || descriptor.includes('anjungan')) return QrCode;
    if (descriptor.includes('display') || descriptor.includes('panggilan')) return Monitor;
    if (descriptor.includes('caller') || descriptor.includes('loket')) return Headphones;
    if (descriptor.includes('pemilahan') || descriptor.includes('pemberkasan')) return FolderKanban;
    if (descriptor.includes('pemindaian') || descriptor.includes('scanning')) return ScanLine;
    if (descriptor.includes('metadata') || descriptor.includes('indexing')) return Database;
    if (descriptor.includes('quality') || descriptor.includes('control')) return CheckCircle2;
    if (descriptor.includes('api')) return Workflow;
    if (descriptor.includes('audit') || descriptor.includes('log')) return FileSearch;
    if (descriptor.includes('enkripsi') || descriptor.includes('hardening')) return Shield;
    if (descriptor.includes('disaster') || descriptor.includes('cadangan')) return DatabaseBackup;
    if (descriptor.includes('survey') || descriptor.includes('topologi')) return MapPinned;
    if (descriptor.includes('instalasi') || descriptor.includes('cctv') || descriptor.includes('iot')) return Camera;
    if (descriptor.includes('dashboard') || descriptor.includes('portal')) return LayoutDashboard;
    if (descriptor.includes('information architecture') || descriptor.includes('ux flow')) return Workflow;
    if (descriptor.includes('ui design')) return Palette;
    if (descriptor.includes('website') || descriptor.includes('landing')) return Globe2;
    if (descriptor.includes('development') || descriptor.includes('integrasi')) return Code2;
    if (descriptor.includes('unggah')) return Upload;
    if (descriptor.includes('desain')) return ShieldCheck;

    return CheckCircle2;
  };

  return (
    <>
      <MetaInjector
        title={`${solution.title} — PT Artavel`}
        description={solution.heroDescription}
        canonicalPath={`/solusi/${solution.slug}`}
      />

      <JsonLdInjector
        type="Service"
        data={{
          name: solution.title,
          provider: {
            '@type': 'Organization',
            name: 'PT Artavel'
          },
          description: solution.heroDescription
        }}
        id={solution.slug}
      />

      {/* 1. Hero */}
      <Section bg="surface-blue" padding="compact">
        <Container>
          <Breadcrumb
            items={[
	              { label: text('Solusi'), path: '/solusi' },
              { label: solution.title }
            ]}
            onNavigate={onNavigate}
          />

          <div className="py-12 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={solution.accentColor} size="md">
                {solution.productFamily}
              </Badge>
              {solution.productName && (
                <span className="text-xs font-semibold text-[#5C6B79]">
                  {solution.productName}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading leading-tight mb-6">
              {solution.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#5C6B79] leading-relaxed mb-8">
              {solution.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="artavel-solution-hero-primary-button"
                onClick={() => onNavigate('/kontak')}
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
	                {text('Konsultasikan Kebutuhan')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="artavel-solution-hero-outline-button"
                onClick={() => {
                  const el = document.getElementById('capability-section');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
	                {text('Lihat Kapabilitas Utama')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Siapa yang membutuhkan & Masalah yang diselesaikan */}
      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Siapa yang Membutuhkan */}
            <Card className="bg-[#F7F9FB]">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#172536] font-heading">
	                  {text('Siapa yang Membutuhkan Solusi Ini?')}
                </h2>
              </div>
              <ul className="space-y-3">
                {solution.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#172536]">
                    <CheckCircle2 className="w-4 h-4 text-[#568F3E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Masalah yang Diselesaikan */}
            <Card className="bg-[#EAF2F8]/55 border-[#36699C]/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#172536] font-heading">
	                  {text('Tantangan yang Diselesaikan')}
                </h2>
              </div>
              <ul className="space-y-3">
                {solution.problemsSolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#5C6B79]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#568F3E] flex-shrink-0 mt-2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Outcome Utama */}
      <Section bg="surface" padding="normal">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
	              {text('Dampak Terukur')}
            </h2>
            <p className="text-3xl font-extrabold text-[#172536] font-heading">
	              {text('Hasil Nyata Pascaimplementasi')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.keyOutcomes.map((outcome, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#DBE4EB] shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#EFF8EA] text-[#568F3E] flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <p className="text-sm font-semibold text-[#172536] leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Kapabilitas & Fitur */}
      <Section bg="white" padding="normal" id="capability-section" className="artavel-solution-capabilities">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
	              {text('Fitur & Modul')}
            </h2>
            <p className="text-3xl font-extrabold text-[#172536] font-heading">
	              {text('Kapabilitas Utama')} {solution.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.capabilities.map((cap) => {
              const isActive = cap.id === activeCapability?.id;
              const CapabilityIcon = getCapabilityIcon(cap);

              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveCapabilityId(cap.id)}
                  aria-pressed={isActive}
                  className={`artavel-capability-card group rounded-2xl border p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBC5E] ${
                    isActive ? 'artavel-capability-card-active' : ''
                  }`}
                >
                  <div className="artavel-capability-card-icon mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2F8] text-[#36699C]">
                    <CapabilityIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172536] font-heading mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#5C6B79] leading-relaxed">
                    {cap.description}
                  </p>
                </button>
              );
            })}
          </div>

          {activeCapability && (
            <div className="artavel-capability-detail mt-8 rounded-3xl border border-[#36699C]/25 bg-[#F2F7FB] p-6 sm:p-8 shadow-[0_20px_60px_rgba(23,57,85,0.10)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#36699C]">
                    {text('Detail Kapabilitas')}
                  </p>
                  <h3 className="text-2xl font-extrabold text-[#172536] font-heading">
                    {activeCapability.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#5C6B79]">
                    {activeCapability.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="md"
                  className="artavel-capability-detail-action"
                  onClick={() => onNavigate('/kontak')}
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {text('Diskusikan Modul Ini')}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* 5. Deployment Options & Integrasi */}
      <Section bg="surface-blue" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deployment */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-6 h-6 text-[#36699C]" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-[#172536] font-heading">
	                  {text('Pilihan Deployment Fleksibel')}
                </h2>
              </div>

              <div className="space-y-4">
                {solution.deploymentOptions.map((opt) => (
                  <div key={opt.id} className="p-6 rounded-2xl bg-white border border-[#DBE4EB]">
                    <h3 className="text-lg font-bold text-[#172536] font-heading">{opt.title}</h3>
                    <p className="text-xs text-[#36699C] font-semibold mb-2">{opt.subtitle}</p>
                    <p className="text-sm text-[#5C6B79] leading-relaxed mb-4">{opt.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {opt.benefits.map((b, idx) => (
                        <span key={idx} className="text-xs bg-[#EAF2F8] text-[#244F78] px-2.5 py-1 rounded-md font-medium">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrasi & Keamanan */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#568F3E]" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-[#172536] font-heading">
	                  {text('Integrasi & Keamanan Data')}
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#DBE4EB] space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172536] mb-3">
	                    {text('Sistem yang Didukung Integrasi:')}
                  </h3>
                  <ul className="space-y-2">
                    {solution.integrations.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#5C6B79]">
                        <span className="w-2 h-2 rounded-full bg-[#7DBC5E]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#DBE4EB]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172536] mb-3">
	                    {text('Pengamanan Sistem:')}
                  </h3>
                  <ul className="space-y-2">
                    {solution.securityFeatures.map((sec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#5C6B79]">
                        <span className="w-2 h-2 rounded-full bg-[#36699C]" aria-hidden="true" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. FAQ Section */}
      <Section bg="white" padding="normal" id="faq-solusi" className="artavel-solution-faq-section">
        <Container size="narrow">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172536] font-heading">
	              {text('Pertanyaan Sering Diajukan (FAQ)')}
            </h2>
          </div>
          <Accordion
            items={solution.faqs}
            className="artavel-faq-accordion artavel-solution-faq-accordion"
            id={`faq-${solution.slug}`}
          />
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
