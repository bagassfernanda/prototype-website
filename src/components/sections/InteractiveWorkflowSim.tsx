import React, { useEffect, useRef, useState } from 'react';
import { Play, CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

export const InteractiveWorkflowSim: React.FC = () => {
  const { text } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const steps = [
    {
      title: '1. Pembuatan Konsep Surat / Permohonan',
      actor: 'Konseptor / Pemohon',
      desc: 'Formulir diisi secara digital dengan templat baku & lampiran PDF.',
      status: 'Konsep Tersusun'
    },
    {
      title: '2. Verifikasi Paraf Hirarki',
      actor: 'Kepala Bidang / Verifikator',
      desc: 'Pemeriksaan draft dengan fitur penanda revisi & persetujuan paraf.',
      status: 'Paraf Disetujui'
    },
    {
      title: '3. Pengesahan TTE BSrE',
      actor: 'Kepala Dinas / Pimpinan',
      desc: 'Penandatanganan elektronik resmi menggunakan sertifikat digital BSSN.',
      status: 'TTE Sah Terbit'
    },
    {
      title: '4. Penomoran & Disposisi Otomatis',
      actor: 'Sistem Smarchlink®',
      desc: 'Penomoran otomatis tanpa duplikasi & pengiriman disposisi real-time.',
      status: 'Selesai & Terdistribusi'
    }
  ];

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const runSimulation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsSimulating(true);
    setCurrentStep(0);

    let step = 0;
    intervalRef.current = setInterval(() => {
      step += 1;
      if (step >= steps.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setCurrentStep(steps.length);
        setIsSimulating(false);
      } else {
        setCurrentStep(step);
      }
    }, 1500);
  };

  return (
    <Section bg="white" padding="normal" id="simulasi-alur">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12" direction="scale">
          <Badge variant="green" size="md" className="mb-3">
	            {text('Simulasi Alur Kerja Digital')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading">
	            {text('Otomasi Persetujuan & Disposisi Tanpa Hambatan')}
          </h2>
          <p className="text-base sm:text-lg text-[#5C6B79] mt-3">
	            {text('Lihat bagaimana naskah dinas atau perizinan mengalir secara instan antar-pejabat dengan TTE terintegrasi.')}
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto" direction="up" delay={120}>
          <div className="bg-[#F7F9FB] rounded-3xl border border-[#DBE4EB] p-6 sm:p-10 shadow-sm">
          <div className="flex items-center justify-between pb-6 border-b border-[#DBE4EB] mb-8">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#36699C]" aria-hidden="true" />
              <div>
	                <span className="text-xs text-[#5C6B79] font-semibold block">{text('Dokumen Demo:')}</span>
	                <span className="text-sm font-bold text-[#172536]">{text('Surat Dinas / Perizinan #PRZ-2026-DEMO')}</span>
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="artavel-workflow-sim-button inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#36699C] text-white font-semibold text-sm hover:bg-[#244F78] transition-all disabled:opacity-50 cursor-pointer"
            >
              <Play className="artavel-workflow-sim-icon w-4 h-4" aria-hidden="true" />
	              <span>{isSimulating ? text('Simulasi Berjalan...') : text('Jalankan Simulasi Alur')}</span>
            </button>
          </div>

          {/* Workflow Steps Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, idx) => {
              const isActive = isSimulating && currentStep === idx;
              const isDone = currentStep > idx;

              return (
                <ScrollReveal
                  key={idx}
                  className="artavel-reveal-card h-full"
                  delay={idx * 80}
                  direction="scale"
                >
                  <div
                    className={`flex h-full flex-col rounded-2xl border p-4 transition-all ${
                      isActive
                        ? 'bg-white border-[#36699C] shadow-md ring-2 ring-[#36699C]/20 scale-102'
                        : isDone
                        ? 'bg-[#EFF8EA] border-[#7DBC5E]/40'
                        : 'bg-white border-[#DBE4EB]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
	                      <span className="text-xs font-bold text-[#5C6B79]">{text(s.actor)}</span>
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-[#568F3E]" aria-hidden="true" />
                      ) : isActive ? (
                        <Clock className="w-5 h-5 text-[#36699C] animate-spin" aria-hidden="true" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-[#DBE4EB]" />
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-[#172536] font-heading mb-1">
	                      {text(s.title)}
                    </h3>

                    <p className="flex-1 text-xs leading-relaxed text-[#5C6B79]">
	                      {text(s.desc)}
                    </p>

                    <span
                      className={`artavel-workflow-status mt-4 inline-block self-start rounded px-2 py-0.5 text-[11px] font-bold ${
                        isDone
                          ? 'artavel-workflow-status-done bg-[#568F3E] text-white'
                          : isActive
                          ? 'artavel-workflow-status-active bg-[#36699C] text-white'
                          : 'artavel-workflow-status-idle bg-[#DBE4EB] text-[#5C6B79]'
                      }`}
                    >
	                      {isDone ? '✓ ' + text(s.status) : text(s.status)}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-[#DBE4EB] text-center text-xs text-[#5C6B79] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#568F3E]" aria-hidden="true" />
	            <span>{text('Data demo ini adalah ilustrasi alur. Pada implementasi nyata, status terhubung dengan data, hak akses, log audit, dan pengamanan dokumen instansi.')}</span>
          </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
