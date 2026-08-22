import React from 'react';
import { COMPANY_PROFILE, COMPANY_MILESTONES } from '../content/company';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Card } from '../components/ui/Card';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { ProfileVideoSection } from '../components/sections/ProfileVideoSection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Target } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const profile = localize(COMPANY_PROFILE);
  const milestones = localize(COMPANY_MILESTONES);

  return (
    <>
      <MetaInjector
	        title={`${text('Tentang PT Artavel')} — ${text('Profil, Visi, Misi & Nilai Perusahaan')}`}
	        description={text('PT Artavel adalah mitra solusi digital untuk pelayanan publik, pengelolaan dokumen, kearsipan, dan otomasi proses organisasi.')}
        canonicalPath="/tentang"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Tentang Artavel') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Tentang PT Artavel')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {profile.positioning}
            </p>
          </div>
        </Container>
      </Section>

      <ProfileVideoSection />

      {/* Profil & Brand Essence */}
      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#172536] font-heading">
	                {text('Mitra Teknologi yang Mengutamakan Keteraturan & Kepercayaan')}
              </h2>
              <p className="text-base text-[#5C6B79] leading-relaxed">
	                {profile.profileSummary}
              </p>
              <div className="p-4 rounded-xl bg-[#EAF2F8] border border-[#36699C]/20 text-sm font-semibold text-[#244F78]">
	                "{profile.brandEssence}"
              </div>
            </div>

            <div className="space-y-4">
              <Card className="bg-[#F7F9FB] p-6 border-[#36699C]/20">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
	                  <h3 className="text-lg font-bold text-[#172536] font-heading">{text('Visi Perusahaan')}</h3>
                </div>
                <p className="text-sm text-[#5C6B79] leading-relaxed mb-3">
	                  {profile.vision.text}
                </p>
	                <PlaceholderNotice label={profile.vision.status} size="sm" />
              </Card>

              <Card className="bg-[#EFF8EA]/50 p-6 border-[#7DBC5E]/30">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-[#568F3E]" aria-hidden="true" />
	                  <h3 className="text-lg font-bold text-[#172536] font-heading">{text('Komitmen Kualitas')}</h3>
                </div>
                <p className="text-sm text-[#5C6B79] leading-relaxed">
	                  {text('Seluruh solusi dikembangkan dengan standar keamanan berlapis, kepatuhan kearsipan nasional (ANRI), serta kesiapan integrasi TTE BSrE / BSSN.')}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="surface-blue" padding="normal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
	                {text('Fokus Layanan')}
              </h2>
              <p className="text-3xl font-extrabold text-[#172536] font-heading leading-tight">
	                {text('Solusi bisnis teknologi informasi yang siap dikembangkan.')}
              </p>
              <p className="mt-4 text-sm text-[#5C6B79] leading-relaxed">
	                {text('Fokus layanan ini disusun dari profil Artavel dan disesuaikan kembali agar lebih formal untuk website resmi.')}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
	              {profile.businessFocus.map((item) => (
                <div key={item} className="rounded-xl border border-[#DBE4EB] bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#568F3E]" aria-hidden="true" />
                    <p className="text-sm font-semibold leading-relaxed text-[#172536]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Misi & Nilai */}
      <Section bg="surface" padding="normal">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
	              {text('Prinsip Kerja')}
            </h2>
            <p className="text-3xl font-extrabold text-[#172536] font-heading">
	              {text('Misi & Nilai Utama Kami')}
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
	            {profile.mission.map((item, index) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF2F8] text-sm font-extrabold text-[#36699C]">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-[#5C6B79]">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
	            {profile.values.map((val, idx) => (
              <Card key={idx} className="p-6">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center font-bold text-base mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#172536] font-heading mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-[#5C6B79] leading-relaxed">
                  {val.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section bg="white" padding="normal">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#172536] font-heading">
	              {text('Perjalanan & Perkembangan Artavel')}
            </h2>
          </div>

          <div className="space-y-6 relative border-l-2 border-[#36699C]/30 pl-6 ml-4">
	            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#36699C] border-4 border-white" />
                <span className="text-xs font-bold text-[#36699C] bg-[#EAF2F8] px-2.5 py-0.5 rounded">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold text-[#172536] font-heading mt-2">
                  {m.title}
                </h3>
                <p className="text-sm text-[#5C6B79] leading-relaxed mt-1">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
