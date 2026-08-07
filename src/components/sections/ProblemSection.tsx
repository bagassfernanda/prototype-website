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
      title: 'Dokumen Fisik & Digital Sulit Ditemukan',
      description: 'Mencari berkas perizinan atau surat keputusan masa lalu memakan waktu lama karena bergantung pada ingatan staf tertentu.'
    },
    {
      icon: FileQuestion,
      title: 'Status Disposisi & Izin Tidak Mudah Dipantau',
      description: 'Pemohon dan pimpinan tidak memiliki visibilitas *real-time* tentang posisi berkas yang sedang diverifikasi.'
    },
    {
      icon: Layers,
      title: 'Informasi Tersebar di Banyak Aplikasi & Perangkat',
      description: 'Data disimpan secara acak di komputer lokal, flashdisk, atau obrolan pesan instan tanpa penataan terpusat.'
    },
    {
      icon: Lock,
      title: 'Persetujuan & Paraf Masih Bergantung Lokasi Fisik',
      description: 'Proses surat-menyurat dan perizinan tertahan ketika pejabat penandatangan sedang bertugas di luar kantor.'
    },
    {
      icon: Users,
      title: 'Masyarakat Harus Berulang Kali Menanyakan Status',
      description: 'Kurangnya portal tracking mandiri menyebabkan penumpukan pertanyaan warga di loket atau telepon dinas.'
    },
    {
      icon: History,
      title: 'Ketiadaan Jejak Audit (Audit Trail) yang Jelas',
      description: 'Kesulitan melacak siapa yang mengubah status dokumen, memberikan catatan revisi, atau menyetujui draft.'
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
            {text('Proses manual yang tidak tertata menghambat kecepatan pelayanan & keputusan')}
          </p>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-4">
            {text('Sebelum beralih ke solusi digital, banyak instansi mengalami kebuntuan alur kerja yang memicu ketidakpuasan masyarakat dan risiko kearsipan.')}
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
