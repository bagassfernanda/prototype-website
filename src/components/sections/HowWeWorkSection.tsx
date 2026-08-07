import React from 'react';
import { Search, Compass, Cpu, GraduationCap, Headphones } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

export const HowWeWorkSection: React.FC = () => {
  const { text } = useLanguage();
  const steps = [
    {
      number: '01',
      title: 'Discovery & Pemetaan SOP',
      description: 'Memahami proses kerja, regulasi daerah, bentuk formulir, dan struktur persetujuan instansi sebelum melangkah ke solusi.',
      icon: Search
    },
    {
      number: '02',
      title: 'Perancangan Arsitektur (Solution Design)',
      description: 'Menyusun blueprint modul, skema deployment (Cloud/On-prem), hak akses pengguna, dan integrasi TTE BSrE.',
      icon: Compass
    },
    {
      number: '03',
      title: 'Konfigurasi & Pengujian Sistem',
      description: 'Melakukan tailoring aplikasi, penyiapan templat naskah, setup database, dan pengujian keandalan jaringan.',
      icon: Cpu
    },
    {
      number: '04',
      title: 'Implementasi & Pelatihan Pengguna',
      description: 'Mendampingi petugas loket, pejabat penandatangan, dan admin IT melalui workshop praktis hingga siap mandiri.',
      icon: GraduationCap
    },
    {
      number: '05',
      title: 'Dukungan SLA & Pengembangan Berkelanjutan',
      description: 'Memberikan pemeliharaan berkala, penanganan kendala teknis cepat, dan pembaruan fitur sesuai perkembangan regulasi.',
      icon: Headphones
    }
  ];

  return (
    <Section bg="white" padding="normal" id="cara-kami-bekerja">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" direction="scale">
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-3">
	            {text('Pendampingan Berkelanjutan')}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
	            {text('Bagaimana Kami Berkolaborasi dengan Instansi Anda')}
          </p>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-4">
	            {text('Artavel tidak sekadar menyerahkan software. Kami hadir sebagai mitra yang mendampingi seluruh siklus transformasi digital.')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal
                key={idx}
                className="artavel-reveal-card h-full"
                delay={idx * 70}
                direction="scale"
              >
                <div className="artavel-work-step-card group flex h-full flex-col bg-[#F7F9FB] border border-[#DBE4EB] p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[#7DBC5E] font-heading">
                      {s.number}
                    </span>
                    <div className="artavel-work-step-card-icon w-10 h-10 rounded-lg bg-[#EAF2F8] text-[#36699C] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#172536] font-heading mb-2">
	                    {text(s.title)}
                  </h3>

                  <p className="text-xs text-[#5C6B79] leading-relaxed">
	                    {text(s.description)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
