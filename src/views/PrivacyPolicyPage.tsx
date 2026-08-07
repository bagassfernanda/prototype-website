import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
        title={`${text('Kebijakan Privasi')} — PT Artavel`}
        description={text('Kebijakan privasi perlindungan data pengguna dan instansi pada website resmi PT Artavel.')}
        canonicalPath="/kebijakan-privasi"
      />

      <Section bg="surface" padding="compact">
        <Container size="narrow">
          <Breadcrumb items={[{ label: text('Kebijakan Privasi') }]} onNavigate={onNavigate} />

          <div className="py-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading mb-4">
              {text('Kebijakan Privasi PT Artavel')}
            </h1>
            <PlaceholderNotice label={text('Draf — Memerlukan Peninjauan Manajemen & Penasihat Hukum')} size="md" />
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <div className="prose max-w-none text-[#172536] space-y-6 text-sm leading-relaxed">
            <p className="text-base font-medium text-[#5C6B79]">
              {text('PT Artavel berkomitmen penuh untuk melindungi privasi dan keamanan data pribadi serta informasi instansi yang disampaikan kepada kami melalui website ini.')}
            </p>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('1. Informasi yang Kami Kumpulkan')}
            </h2>
            <p>
              {text('Kami mengumpulkan informasi yang Anda berikan secara sukarela saat mengisi formulir konsultasi, antara lain:')}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#5C6B79]">
              <li>{text('Nama lengkap dan jabatan')}</li>
              <li>{text('Nama instansi, dinas, atau perusahaan')}</li>
              <li>{text('Alamat email resmi dan nomor telepon/WhatsApp')}</li>
              <li>{text('Ringkasan kebutuhan atau uraian proyek')}</li>
            </ul>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('2. Tujuan Penggunaan Data')}
            </h2>
            <p>
              {text('Informasi yang dikumpulkan hanya digunakan untuk:')}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#5C6B79]">
              <li>{text('Merespon permohonan konsultasi, demo aplikasi, atau penawaran solusi')}</li>
              <li>{text('Menghubungi Anda terkait jadwal diskusi teknis')}</li>
              <li>{text('Meningkatkan kualitas layanan dan kesesuaian solusi digital yang ditawarkan')}</li>
            </ul>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('3. Kerahasiaan & Non-Pengungkapan Data')}
            </h2>
            <p>
              {text('PT Artavel **tidak pernah** memperjualbelikan, menyewakan, atau membagikan informasi pribadi/instansi Anda kepada pihak ketiga tanpa izin tertulis, kecuali diwajibkan oleh ketentuan hukum dan peraturan perundang-undangan yang berlaku di Republik Indonesia.')}
            </p>

            <h2 className="text-xl font-bold font-heading text-[#172536] pt-4 border-t border-[#DBE4EB]">
              {text('4. Kontak Pengelola Privasi Data')}
            </h2>
            <p>
              {text('Jika Anda memiliki pertanyaan terkait Kebijakan Privasi ini, Anda dapat menghubungi kami melalui email: ')}<strong className="text-[#36699C]">privacy@artavel.co.id</strong>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};
