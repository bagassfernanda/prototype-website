import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { MetaInjector } from '../components/seo/MetaInjector';
import { CheckCircle2, Accessibility, Keyboard, Eye, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface AccessibilityPageProps {
  onNavigate: (path: string) => void;
}

export const AccessibilityPage: React.FC<AccessibilityPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
        title={`${text('Pernyataan Aksesibilitas')} — PT Artavel`}
        description={text('Komitmen PT Artavel terhadap aksesibilitas web sesuai standar WCAG 2.2 Tingkat AA.')}
        canonicalPath="/aksesibilitas"
      />

      <Section bg="surface" padding="compact">
        <Container size="narrow">
          <Breadcrumb items={[{ label: text('Aksesibilitas') }]} onNavigate={onNavigate} />

          <div className="py-8">
            <div className="flex items-center gap-3 mb-3">
              <Accessibility className="w-8 h-8 text-[#36699C]" aria-hidden="true" />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading">
                {text('Pernyataan Komitmen Aksesibilitas Web')}
              </h1>
            </div>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
              {text('PT Artavel berkomitmen untuk memastikan bahwa website resmi ini dapat diakses secara inklusif oleh semua orang, termasuk penyandang disabilitas.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <div className="space-y-10 text-[#172536]">
            {/* Standar Target */}
            <div className="p-6 rounded-2xl bg-[#EFF8EA] border border-[#7DBC5E]/40 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#568F3E] flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-bold font-heading text-[#172536]">
                  {text('Target Standar: WCAG 2.2 Level AA')}
                </h2>
                <p className="text-sm text-[#5C6B79] mt-1 leading-relaxed">
                  {text('Kami merancang dan menguji website ini berpatokan pada *Web Content Accessibility Guidelines* (WCAG) 2.2 Tingkat AA yang diterbitkan oleh W3C.')}
                </p>
              </div>
            </div>

            {/* Fitur Aksesibilitas yang Diterapkan */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading text-[#172536]">
                {text('Fitur Aksesibilitas yang Diterapkan')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#F7F9FB] border border-[#DBE4EB]">
                  <div className="flex items-center gap-2 font-bold text-[#172536] mb-2">
                    <Keyboard className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                    <span>{text('Navigasi Keyboard Penuh')}</span>
                  </div>
                  <p className="text-xs text-[#5C6B79] leading-relaxed">
                    {text('Seluruh tombol, tautan, menu, dan formulir dapat diakses sepenuhnya menggunakan tombol Tab, Enter, dan Arrow tanpa jebakan fokus (*focus trap*).')}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F9FB] border border-[#DBE4EB]">
                  <div className="flex items-center gap-2 font-bold text-[#172536] mb-2">
                    <Eye className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                    <span>{text('Kontras Warna Tinggi (High Contrast)')}</span>
                  </div>
                  <p className="text-xs text-[#5C6B79] leading-relaxed">
                    {text('Warna teks dan latar belakang memiliki rasio kontras minimal 4.5:1 untuk keterbacaan yang nyaman bagi pengguna dengan gangguan penglihatan.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Bantuan & Umpan Balik */}
            <div className="p-6 rounded-2xl bg-[#F2F7FB] border border-[#DBE4EB] space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg text-[#172536] font-heading">
                <MessageSquare className="w-5 h-5 text-[#36699C]" aria-hidden="true" />
                <span>{text('Masukan & Bantuan Aksesibilitas')}</span>
              </div>
              <p className="text-sm text-[#5C6B79] leading-relaxed">
                {text('Jika Anda mengalami hambatan dalam mengakses informasi atau membutuhkan format alternatif pada website PT Artavel, silakan hubungi tim dukungan kami:')}
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  onClick={() => onNavigate('/kontak')}
                >
                  {text('Kirim Masukan Aksesibilitas')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
