import React from 'react';
import { FileCheck2, FolderKanban, MailCheck, Users, ScanLine, ShieldAlert, ArrowRight, Check, Camera, Globe2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { Solution } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

interface SolutionGridSectionProps {
  onNavigate: (path: string) => void;
}

export const SolutionGridSection: React.FC<SolutionGridSectionProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const solutions = localize(SOLUTIONS_DATA);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return FileCheck2;
      case 'FolderKanban': return FolderKanban;
      case 'MailCheck': return MailCheck;
      case 'Users': return Users;
      case 'ScanLine': return ScanLine;
      case 'ShieldAlert': return ShieldAlert;
      case 'Camera': return Camera;
      case 'Globe2': return Globe2;
      default: return FileCheck2;
    }
  };

  const getAccentBorder = (index: number) => (index % 3 === 1 ? 'green' : 'blue');

  return (
    <Section bg="surface-blue" padding="normal" id="solusi-artavel">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16" direction="scale">
          <Badge variant="blue" size="md" className="mb-3">
	            {text('Ekosistem Solusi Artavel')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading leading-tight">
	            {text('Solusi Digital Terintegrasi Berorientasi Hasil')}
          </h2>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-4">
	            {text('Setiap modul dirancang untuk saling terhubung, mudah dikonfigurasi sesuai regulasi instansi, dan ramah pengguna.')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	          {solutions.map((solution: Solution, index) => {
            const IconComponent = getIcon(solution.iconName);

            return (
              <Card
                key={solution.id}
                id={`solusi-card-${solution.id}`}
                accentBorder={getAccentBorder(index)}
                className="flex flex-col justify-between"
                revealDelay={index * 70}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F7F9FB] text-[#5C6B79] border border-[#DBE4EB]">
                      {solution.productFamily}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172536] font-heading mb-2">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-[#5C6B79] leading-relaxed mb-6">
                    {solution.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#DBE4EB]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#172536] block mb-2 font-heading">
	                      {text('Kapabilitas Utama:')}
                    </span>
                    {solution.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap.id} className="flex items-start gap-2 text-xs text-[#5C6B79]">
                        <Check className="w-4 h-4 text-[#568F3E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate(`/solusi/${solution.slug}`)}
                    className="artavel-inline-action-link inline-flex items-center gap-2 text-sm font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -ml-1"
                  >
	                    <span>{text('Pelajari Selengkapnya')}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
