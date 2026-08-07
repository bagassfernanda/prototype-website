import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { MetaInjector } from '../components/seo/MetaInjector';
import { FileQuestion, Home } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
        title={`404 ${text('Halaman Tidak Ditemukan')} — PT Artavel`}
        description={text('Halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.')}
        canonicalPath="/404"
      />

      <Section bg="surface" padding="large">
        <Container size="narrow">
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#FBEEEA] text-[#A9473B] flex items-center justify-center mx-auto">
              <FileQuestion className="w-8 h-8" aria-hidden="true" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172536] font-heading">
              {text('Halaman Tidak Ditemukan')} (404)
            </h1>

            <p className="text-base sm:text-lg text-[#5C6B79] max-w-md mx-auto leading-relaxed">
              {text('Tautan yang Anda tuju mungkin telah mengalami perubahan alamat atau tidak lagi tersedia dalam struktur navigasi saat ini.')}
            </p>

            <div className="pt-4 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('/')}
                leftIcon={<Home className="w-5 h-5" aria-hidden="true" />}
              >
                {text('Kembali ke Halaman Utama')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
