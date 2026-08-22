import React from 'react';
import { ArrowRight, ShieldCheck, Server, Lock, Eye, Database, RefreshCw } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';

interface SecurityGovernanceSectionProps {
  compact?: boolean;
  onNavigate?: (path: string) => void;
}

export const SecurityGovernanceSection: React.FC<SecurityGovernanceSectionProps> = ({
  compact = false,
  onNavigate
}) => {
  const { text } = useLanguage();
  const securityPoints = [
    {
      icon: Server,
      title: 'Fleksibilitas Deployment',
      description: 'Dapat dideploy penuh pada server On-Premise jaringan intranet instansi atau Private Cloud terenkripsi.'
    },
    {
      icon: Lock,
      title: 'Role-Based Access Control (RBAC)',
      description: 'Pembatasan hak akses yang ketat sesuai hirarki jabatan, sifat surat, atau kategori perizinan.'
    },
    {
      icon: Eye,
      title: 'Audit Trail & Logging Lengkap',
      description: 'Mencatat kronologi setiap aksi (view, download, paraf, TTE) untuk akuntabilitas dan kebutuhan audit.'
    },
    {
      icon: Database,
      title: 'Kedaulatan & Enkripsi Data',
      description: 'Perlindungan dokumen sensitif dengan enkripsi data terstandar saat disimpan maupun ditransmisikan.'
    },
    {
      icon: RefreshCw,
      title: 'Skenario Cadangan (Disaster Recovery)',
      description: 'Penataan jadwal backup berkala dan prosedur pemulihan sistem untuk menjaga kelangsungan operasional.'
    },
    {
      icon: ShieldCheck,
      title: 'Kepatuhan Standar Nasional',
      description: 'Mengikuti pedoman teknis SPBE, integrasi BSrE/BSSN, dan klasifikasi kearsipan ANRI.'
    }
  ];

  if (compact) {
    return (
      <Section bg="surface" padding="compact" id="keamanan-dan-tata-kelola">
        <Container>
          <ScrollReveal direction="up">
            <div className="artavel-security-strip flex flex-col gap-5 rounded-2xl border border-[#B7D7C4] bg-[#EFF8EA] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#568F3E]">
                  {text('Secure by Design')}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#172536]">
                  {text('Fondasi keamanan dan deployment yang dapat disesuaikan dengan kebutuhan organisasi.')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#244F78] sm:justify-end">
                {securityPoints.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.title} className="artavel-security-strip-chip inline-flex items-center gap-1.5 rounded-full border border-[#B7D7C4] bg-white/70 px-3 py-2">
                      <Icon className="h-3.5 w-3.5 text-[#36699C]" aria-hidden="true" />
                      {text(item.title)}
                    </span>
                  );
                })}
              </div>

              {onNavigate && (
                <Button
                  variant="primary"
                  size="sm"
                  className="artavel-security-strip-button shrink-0 !px-3"
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  onClick={() => onNavigate('/solusi/keamanan-data-dan-integrasi')}
                >
                  {text('Pelajari Keamanan & Infrastruktur')}
                </Button>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg="white" padding="normal" id="keamanan-dan-tata-kelola">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" direction="scale">
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-3">
            {text('Infrastruktur & Tata Kelola')}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
            {text('Keamanan Berlapis untuk Melindungi Aset Informasi Organisasi')}
          </p>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-4">
            {text('Kami memahami bahwa dokumen pemerintahan dan perusahaan merupakan aset vital yang membutuhkan perlindungan, kerahasiaan, dan akuntabilitas penuh.')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                className="artavel-reveal-card h-full"
                delay={idx * 70}
                direction="scale"
              >
                <div className="artavel-security-card group h-full p-6 rounded-2xl bg-[#F2F7FB] border border-[#DBE4EB] flex flex-col gap-3">
                  <div className="artavel-security-card-icon w-10 h-10 rounded-xl bg-[#36699C] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172536] font-heading">
                    {text(item.title)}
                  </h3>
                  <p className="text-sm text-[#5C6B79] leading-relaxed">
                    {text(item.description)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Security Language Disclaimer */}
        <ScrollReveal className="mt-12" direction="up" delay={120}>
          <div className="p-4 rounded-xl bg-[#EFF8EA] border border-[#7DBC5E]/40 text-xs text-[#1F5D4B] text-center max-w-3xl mx-auto leading-relaxed">
            <strong>{text('Prinsip Keamanan Siber Artavel:')}</strong> {text('Kami menerapkan pertahanan berlapis (*defense-in-depth*) dan best practices OWASP. Kami tidak pernah menggunakan klaim palsu seperti "100% aman tanpa risiko", melainkan menyediakan komitmen pengawasan ketat, transparansi audit, dan mitigasi pemulihan cepat.')}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
