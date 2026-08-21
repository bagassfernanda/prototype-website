import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';
import { COMPANY_PROFILE } from '../../content/company';

interface FinalCTASectionProps {
  onNavigate: (path: string) => void;
  compact?: boolean;
}

const officeWhatsAppNumber = COMPANY_PROFILE.contact.whatsapp.replace(/\D/g, '');
const officeWhatsAppMessage = encodeURIComponent(
  'Halo Admin PT Artavel, saya ingin berkonsultasi mengenai solusi Artavel.'
);
const officeWhatsAppHref = `https://wa.me/${officeWhatsAppNumber}?text=${officeWhatsAppMessage}`;

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate, compact = false }) => {
  const { text } = useLanguage();

  return (
    <Section bg="dark-blue" padding={compact ? 'normal' : 'large'} id="jadwalkan-konsultasi">
      <Container size="narrow">
        <div className="text-center flex flex-col items-center gap-6">
          <ScrollReveal direction="scale">
            <a
              href={officeWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Hubungi admin PT Artavel melalui WhatsApp di ${COMPANY_PROFILE.contact.whatsapp}`}
              title={`Hubungi admin PT Artavel melalui WhatsApp di ${COMPANY_PROFILE.contact.whatsapp}`}
              className="artavel-cta-phone-link mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7DBC5E]/30 bg-[#7DBC5E]/20 text-[#7DBC5E] transition-colors hover:border-[#8FD871]/70 hover:bg-[#7DBC5E]/28 hover:text-[#A8E08F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8E08F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071927]"
            >
              <PhoneCall className="w-6 h-6" aria-hidden="true" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={70}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
              {text('Setiap organisasi memiliki proses yang berbeda.')}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={130}>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl font-normal">
              {text('Mari diskusikan solusi yang sesuai dengan kebutuhan, pengguna, regulasi, dan lingkungan teknologi organisasi Anda.')}
            </p>
          </ScrollReveal>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <ScrollReveal className="w-full sm:w-auto" direction="left" delay={190}>
              <Button
                variant="success"
                size="lg"
                onClick={() => onNavigate('/kontak')}
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
                {text('Jadwalkan Konsultasi')}
              </Button>
            </ScrollReveal>
            <ScrollReveal className="w-full sm:w-auto" direction="right" delay={250}>
              <Button
                variant="outline"
                size="lg"
                className="artavel-dark-outline-button border-white/40 !text-white"
                onClick={() => onNavigate('/cara-kami-bekerja')}
              >
                {text('Pelajari Cara Kami Bekerja')}
              </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={310}>
            <div className="pt-6 border-t border-white/10 text-xs text-white/60 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7DBC5E]" aria-hidden="true" />
              <span>{text('Respon konsultasi dalam 1x24 jam kerja • Diskusi arsitektur & demo gratis')}</span>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
};
