import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
        title={`${text('Syarat & Ketentuan')} — PT Artavel`}
        description={text('Ketentuan penggunaan layanan dan materi informasi pada website PT Artavel.')}
        canonicalPath="/syarat-ketentuan"
      />

      <Section bg="surface" padding="compact">
        <Container size="narrow">
          <Breadcrumb items={[{ label: text('Syarat & Ketentuan') }]} onNavigate={onNavigate} />

          <div className="py-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading mb-4">
              {text('Syarat & Ketentuan Penggunaan')}
            </h1>
            <PlaceholderNotice label={text('Draf — Memerlukan Peninjauan Manajemen & Legal')} size="md" />
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <div className="prose max-w-none text-[#172536] space-y-6 text-sm leading-relaxed">
            <p className="text-base font-medium text-[#5C6B79]">
              {text('Selamat datang di website resmi PT Artavel. Dengan mengakses website ini, Anda menyetujui syarat dan ketentuan penggunaan di bawah ini.')}
            </p>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('1. Hak Cipta & Kekayaan Intelektual')}
            </h2>
            <p>
              {text('Seluruh konten, logo, merek terdaftar (seperti Smarchlink®), grafik, dan materi tertulis dalam website ini merupakan hak milik intelektual PT Artavel atau pemberi lisensi resminya. Penggandaan tanpa izin tertulis dilarang keras.')}
            </p>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('2. Batasan Tanggung Jawab Informasi')}
            </h2>
            <p>
              {text('Informasi yang disajikan pada website ini ditujukan untuk tujuan edukasi dan perkenalan solusi. Spesifikasi rinci, modul, dan skema perjanjian tingkat layanan (SLA) secara resmi dituangkan dalam Kontrak Kerja / Perjanjian Kerjasama (PKS) terpisah.')}
            </p>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('3. Perubahan Ketentuan')}
            </h2>
            <p>
              {text('PT Artavel berhak memperbarui syarat dan ketentuan ini sewaktu-waktu untuk menyesuaikan dengan regulasi dan kebijakan operasional perusahaan.')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};
