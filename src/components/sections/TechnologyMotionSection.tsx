import React from 'react';
import {
  AppWindow,
  Camera,
  CheckCircle2,
  DatabaseZap,
  Globe2,
  Network,
  ScanLine,
  ServerCog,
  ShieldCheck
} from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

const animatedServices = [
  { icon: Camera, label: 'AI & Computer Vision', color: 'bg-[#2F79B7]', ring: 'ring-[#8BC4FF]/30' },
  { icon: DatabaseZap, label: 'Smart Analytics', color: 'bg-[#568F3E]', ring: 'ring-[#8FD871]/35' },
  { icon: Globe2, label: 'SmartMap & GIS', color: 'bg-[#173955]', ring: 'ring-[#8BC4FF]/25' },
  { icon: Network, label: 'IoT Monitoring', color: 'bg-[#244F78]', ring: 'ring-[#8BC4FF]/25' },
  { icon: ShieldCheck, label: 'Cyber Security', color: 'bg-[#1F5D4B]', ring: 'ring-[#8FD871]/30' },
  { icon: AppWindow, label: 'Smart Applications', color: 'bg-[#2B7658]', ring: 'ring-[#8FD871]/25' }
];

const productHighlights = [
  {
    icon: Camera,
    title: 'AI, Computer Vision & IoT',
    description:
      'CCTV AI, people counting, vehicle counting, parking monitoring, dan perangkat IoT membantu organisasi membaca kondisi lapangan sebagai data.'
  },
  {
    icon: DatabaseZap,
    title: 'Analytics, SmartMap & GIS',
    description:
      'SmartMap, VirtualMAP, JobMAP, WebGIS, school dashboard, otoPOS performance analytics, dan Footfall analytics membantu keputusan berbasis data.'
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security & OpenText',
    description:
      'OpenText diposisikan sebagai partner technology untuk endpoint protection, EDR, security awareness training, phishing simulation, dan reporting.'
  }
];

const solutionBullets = [
  'otoSchool: AI membantu menyusun draf soal; guru tetap mereview dan memutuskan.',
  'otoPOS F&B: sales dan workforce analytics dalam satu sistem operasional.',
  'SmartMap: JobMAP, VirtualMAP, WebGIS, PBB berbasis map, dan peta potensi.',
  'AI CCTV: people counting, vehicle counting, parking monitoring, LPR, dan speed detection.',
  'FootfallCam: visitor count, zone analytics, BI analytics, predictive analytics, dan API integration.',
  'OpenText: endpoint protection, EDR, security awareness training, phishing simulation, dan reporting.'
];

export const TechnologyMotionSection: React.FC = () => {
  const { text } = useLanguage();
  const serviceTrack = animatedServices.concat(animatedServices);

  return (
    <Section
      bg="white"
      padding="normal"
      id="produk-dan-solusi-teknologi"
      className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F7F4_100%)]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-5" direction="left">
            <Badge variant="blue" size="md" className="mb-5">
              {text('Technology Capabilities')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
              {text('AI, Analytics, IoT, dan Security menjadi benang merah solusi Artavel.')}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#5C6B79] leading-relaxed">
              {text('Website Artavel sekarang menempatkan teknologi modern sebagai pintu masuk, lalu menghubungkannya ke produk nyata: otoSchool, otoPOS F&B, SmartMap, AI CCTV, FootfallCam, OpenText, dan solusi government yang sudah ada.')}
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B79] leading-relaxed">
              {text('Tujuannya sederhana: pengunjung memahami masalah yang diselesaikan Artavel, produk atau partner technology yang tersedia, lalu diarahkan ke demo, konsultasi, dan implementasi.')}
            </p>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" direction="right" delay={120}>
            <div className="relative overflow-hidden rounded-2xl border border-[#DBE4EB] bg-white shadow-[0_24px_80px_rgba(23,57,85,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#36699C] via-[#7DBC5E] to-[#36699C]" aria-hidden="true" />

              <div className="border-b border-[#DBE4EB] bg-[#F7F9FB] px-5 py-4 sm:px-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-[#36699C]">
                      {text('Technology Capabilities Across Solutions')}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#172536] font-heading">
                      {text('Kapabilitas teknologi yang saling terhubung')}
                    </h3>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B7D7C4] bg-[#EFF8EA] px-3 py-1 text-xs font-bold text-[#4B6546]">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {text('Data Demo')}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div
                  className="relative mb-6 overflow-hidden rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] py-3"
                  aria-label={text('Animasi layanan teknologi Artavel')}
                >
                  <div className="artavel-tech-marquee flex w-max gap-4 px-4">
                    {serviceTrack.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={`${service.label}-${index}`}
                          className="flex min-w-[166px] items-center gap-3 rounded-xl border border-[#DBE4EB] bg-white px-4 py-3 shadow-sm"
                        >
                          <div className={`flex h-11 w-11 items-center justify-center rounded-full text-white ring-8 ${service.color} ${service.ring}`}>
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <span className="text-sm font-bold text-[#172536]">{text(service.label)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {productHighlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <article
                        key={item.title}
                        className="relative overflow-hidden rounded-xl border border-[#DBE4EB] bg-white p-5 shadow-sm"
                      >
                        <div
                          className={`absolute inset-x-0 top-0 h-1 ${
                            index === 1 ? 'bg-[#7DBC5E]' : index === 2 ? 'bg-[#568F3E]' : 'bg-[#36699C]'
                          }`}
                          aria-hidden="true"
                        />
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2F8] text-[#36699C]">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold text-[#172536] font-heading">{text(item.title)}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#5C6B79]">{text(item.description)}</p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#172536]">
                    <ServerCog className="h-4 w-4 text-[#36699C]" aria-hidden="true" />
                    <span>{text('Flow konsultasi teknologi')}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {['Demo produk', 'Konsultasi solusi', 'Implementasi bertahap'].map((item) => (
                      <div key={item} className="rounded-lg border border-[#DBE4EB] bg-white px-3 py-2 text-xs font-semibold text-[#5C6B79]">
                        {text(item)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12" direction="up" delay={160}>
          <div className="artavel-solution-areas-panel rounded-2xl border border-[#B7D7C4] bg-[#EFF8EA] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-extrabold text-[#172536] font-heading">
                  {text('Contoh penerapan teknologi lintas produk')}
                </h3>
                <p className="mt-3 text-sm text-[#4B6546] leading-relaxed">
                  {text('Draf - memerlukan verifikasi manajemen Artavel')}
                </p>
              </div>
              <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solutionBullets.map((item) => (
                  <li key={item} className="artavel-solution-area-item flex items-start gap-3 rounded-xl border border-[#D7E8D8] bg-white/72 p-3 text-sm font-semibold text-[#172536]">
                    <ScanLine className="mt-0.5 h-4 w-4 shrink-0 text-[#568F3E]" aria-hidden="true" />
                    <span>{text(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
