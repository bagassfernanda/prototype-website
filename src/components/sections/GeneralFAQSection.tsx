'use client';

import React from 'react';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { GENERAL_FAQS } from '../../content/faqs';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Accordion } from '../ui/Accordion';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';

interface GeneralFAQSectionProps {
  onNavigate: (path: string) => void;
  compact?: boolean;
}

export const GeneralFAQSection: React.FC<GeneralFAQSectionProps> = ({ onNavigate, compact = false }) => {
  const { text, localize } = useLanguage();
  const faqs = localize(GENERAL_FAQS);

  return (
    <Section
      bg="dark-blue"
      padding={compact ? 'normal' : 'large'}
      id="faq"
      className="artavel-faq-section bg-[radial-gradient(circle_at_20%_20%,rgba(54,105,156,0.24),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(125,188,94,0.20),transparent_30%),#0B2234]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Badge variant="green" size="md" className="mb-5">
              {text('FAQ')}
            </Badge>
            <h2 className="font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {text('Pertanyaan yang sering muncul sebelum konsultasi.')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/76 sm:text-lg">
              {text('Kami pisahkan FAQ umum dan FAQ spesifik solusi agar pengunjung lebih cepat menemukan jawaban yang sesuai dengan kebutuhan mereka.')}
            </p>
            <div className="mt-8 rounded-2xl border border-white/14 bg-white/[0.07] p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-[#8FD871]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/78">
                  {text('FAQ di halaman detail solusi akan berubah mengikuti solusi yang sedang dibuka, sedangkan FAQ ini menjawab pertanyaan umum seputar Artavel.')}
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                className="artavel-dark-outline-button mt-5 border-white/30 !text-white hover:!text-[#071927]"
                leftIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                onClick={() => onNavigate('/kontak')}
              >
                {text('Ajukan Pertanyaan Lain')}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              id="general-faq-accordion"
              items={faqs}
              className="artavel-faq-accordion rounded-3xl border border-white/12 bg-black/16 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
