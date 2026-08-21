import React from 'react';
import { SearchX, FileQuestion, Lock, Layers, Users, History } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

export const ProblemSection: React.FC = () => {
  const { text } = useLanguage();
  const problems = [
    {
      icon: SearchX,
      title: 'Data Operasional Tersebar',
      description: 'Informasi penting masih tersebar di spreadsheet, aplikasi terpisah, perangkat lokal, dan laporan manual sehingga sulit dibaca sebagai satu gambaran.'
    },
    {
      icon: FileQuestion,
      title: 'Monitoring Lapangan Masih Reaktif',
      description: 'CCTV, perangkat, dan aktivitas lapangan sering hanya menjadi rekaman pasif, belum menghasilkan data people counting, vehicle counting, atau insight area.'
    },
    {
      icon: Layers,
      title: 'Peta dan Potensi Wilayah Sulit Dibaca',
      description: 'Data lokasi, objek, pajak, aset, atau aktivitas wilayah sulit diprioritaskan ketika belum divisualisasikan melalui GIS, WebGIS, atau SmartMap.'
    },
    {
      icon: Lock,
      title: 'Risiko Siber Dimulai dari Pengguna',
      description: 'Phishing, kebiasaan kerja yang kurang aman, dan endpoint yang tidak terpantau dapat membuka celah risiko bagi organisasi.'
    },
    {
      icon: Users,
      title: 'Sekolah dan Retail Butuh Sistem Terpadu',
      description: 'Sekolah, kasir, inventory, absensi, keuangan, dan dashboard performa membutuhkan alur yang saling terhubung agar tidak terus direkap berulang.'
    },
    {
      icon: History,
      title: 'Workflow Enterprise Tetap Butuh Audit Trail',
      description: 'Pelayanan publik, antrean, dokumen, dan tata naskah tetap membutuhkan status, log aktivitas, integrasi, dan pelaporan yang dapat dipertanggungjawabkan.'
    }
  ];

  return (
    <Section bg="white" padding="normal" id="tantangan-organisasi">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" direction="scale">
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-3">
            {text('Tantangan Operasional Organisasi')}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
            {text('Organisasi membutuhkan data, monitoring, aplikasi, dan keamanan yang saling terhubung')}
          </p>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-4">
            {text('Artavel merangkum kebutuhan tersebut menjadi beberapa keluarga solusi agar teknologi modern tetap mudah dipahami dan dapat diarahkan ke produk nyata.')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal
                key={idx}
                className="artavel-reveal-card h-full"
                delay={idx * 70}
                direction="scale"
              >
                <div className="artavel-problem-card group h-full p-6 rounded-2xl bg-[#F7F9FB] border border-[#DBE4EB]">
                  <div className="artavel-problem-card-icon w-12 h-12 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172536] font-heading mb-2">
                    {text(p.title)}
                  </h3>
                  <p className="text-sm text-[#5C6B79] leading-relaxed">
                    {text(p.description)}
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
