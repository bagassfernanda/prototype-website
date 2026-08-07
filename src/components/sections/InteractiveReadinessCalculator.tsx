import React, { useRef, useState } from 'react';
import { Calculator, CheckCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { useLanguage } from '../i18n/LanguageProvider';

export const InteractiveReadinessCalculator: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const { text } = useLanguage();
  const calculatorCardRef = useRef<HTMLDivElement | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      q: text('Bagaimana cara organisasi Anda menyimpan arsip & surat dinas saat ini?'),
      options: [
        { label: text('Mayoritas kertas di ordner/lemari fisik'), points: 1 },
        { label: text('File PDF tersebar di folder komputer/GDrive'), points: 2 },
        { label: text('Sudah ada aplikasi tapi belum terintegrasi TTE'), points: 3 },
        { label: text('Sistem terpusat terintegrasi TTE BSrE'), points: 4 }
      ]
    },
    {
      id: 2,
      q: text('Berapa rata-rata waktu yang dibutuhkan untuk menemukan satu berkas dokumen lama?'),
      options: [
        { label: text('Lebih dari 1 hari / sering tidak ditemukan'), points: 1 },
        { label: text('Beberapa jam (harus bongkar ordner)'), points: 2 },
        { label: text('15-30 menit (cari di folder komputer)'), points: 3 },
        { label: text('Kurang dari 1 menit (pencarian metadata E-Archive)'), points: 4 }
      ]
    },
    {
      id: 3,
      q: text('Bagaimana alur persetujuan / disposisi surat & perizinan dilakukan?'),
      options: [
        { label: text('Tanda tangan basah di kertas cetak'), points: 1 },
        { label: text('Kirim PDF via WhatsApp lalu diprint'), points: 2 },
        { label: text('Aplikasi internal tanpa sertifikat digital'), points: 3 },
        { label: text('Aplikasi TNDE / SIPPADU terhubung TTE BSrE'), points: 4 }
      ]
    }
  ];

  const handleSelect = (qId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: points }));
  };

  const calculateScore = (): number => {
    const values = Object.values(answers) as number[];
    return values.reduce((a, b) => a + b, 0);
  };

  const scrollCalculatorIntoView = () => {
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      calculatorCardRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    });
  };

  const handleShowResult = () => {
    setShowResult(true);
    scrollCalculatorIntoView();
  };

  const getRecommendation = (score: number) => {
    if (score <= 5) {
      return {
        level: text('Tahap Awal (Prioritas Digitalisasi)'),
        tone: 'critical',
        color: 'text-[#D26353]',
        bgColor: 'bg-[#FBEEEA]',
        desc: text('Organisasi Anda sangat direkomendasikan memulai dari alih media arsip vital dan penerapan Smarchlink Archive serta TNDE untuk menghentikan penumpukan kertas.')
      };
    } else if (score <= 9) {
      return {
        level: text('Tahap Transisi (Perlu Integrasi)'),
        tone: 'warning',
        color: 'text-[#AA7838]',
        bgColor: 'bg-[#FFF7E8]',
        desc: text('Organisasi Anda sudah memiliki berkas digital, namun membutuhkan penataan klasifikasi arsip baku, TTE BSrE, dan otomasi alur kerja.')
      };
    } else {
      return {
        level: text('Tahap Matang (Siap Optimasi)'),
        tone: 'success',
        color: 'text-[#568F3E]',
        bgColor: 'bg-[#EFF8EA]',
        desc: text('Tata kelola Anda sudah baik. Langkah berikutnya adalah peningkatan keamanan API Gateway, audit trail, dan skenario Disaster Recovery.')
      };
    }
  };

  const isComplete = Object.keys(answers).length === questions.length;
  const score = calculateScore();
  const rec = getRecommendation(score);

  return (
    <Section bg="surface" padding="normal" id="kalkulator-kesiapan">
      <Container size="narrow">
        <div ref={calculatorCardRef} className="bg-white rounded-3xl border border-[#DBE4EB] p-8 sm:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center">
              <Calculator className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#36699C] font-heading">
                {text('Simulasi Evaluasi')}
              </span>
              <h2 className="text-2xl font-extrabold text-[#172536] font-heading">
                {text('Cek Kesiapan Digitalisasi Organisasi Anda')}
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#5C6B79] mb-8">
            {text('Jawab 3 pertanyaan singkat di bawah ini untuk mendapatkan gambaran awal tingkat kesiapan tata kelola dokumen & rekomendasi modul Artavel.')}
          </p>

          {!showResult ? (
            <div className="space-y-6">
              {questions.map((item) => (
                <div key={item.id} className="artavel-readiness-question-card p-5 rounded-2xl bg-[#F7F9FB] border border-[#DBE4EB]">
                  <h3 className="text-base font-bold text-[#172536] font-heading mb-3">
                    {item.id}. {item.q}
                  </h3>
                  <div className="space-y-2">
                    {item.options.map((opt, idx) => {
                      const isSelected = answers[item.id] === opt.points;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelect(item.id, opt.points)}
                          className={`artavel-readiness-option w-full text-left px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DBC5E] ${
                            isSelected
                              ? 'artavel-readiness-option-selected font-semibold'
                              : ''
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-4 flex justify-end">
                <Button
                  variant="primary"
                  disabled={!isComplete}
                  onClick={handleShowResult}
                  rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  {text('Lihat Hasil & Rekomendasi')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[#F7F9FB] border border-[#DBE4EB] text-center space-y-6 animate-in fade-in duration-300">
              <div className={`p-4 rounded-xl ${rec.bgColor} inline-block`}>
                <span
                  className="artavel-readiness-result-label text-xs uppercase tracking-wider font-bold text-[#5C6B79] block"
                  data-readiness-tone={rec.tone}
                >
                  {text('Tingkat Kesiapan Digital:')}
                </span>
                <span className={`text-xl font-extrabold font-heading ${rec.color}`}>
                  {rec.level} ({text('Skor')}: {score}/12)
                </span>
              </div>

              <p className="text-sm text-[#172536] leading-relaxed max-w-lg mx-auto">
                {rec.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Button variant="primary" onClick={onConsult}>
                  {text('Diskusi Hasil dengan Konsultasi Artavel')}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setAnswers({});
                    setShowResult(false);
                  }}
                  leftIcon={<RefreshCw className="w-4 h-4" aria-hidden="true" />}
                >
                  {text('Ulangi Evaluasi')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
