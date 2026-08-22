'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import {
  getAssessmentDefinition,
  type AssessmentDefinition,
  type AssessmentDimensionId,
  type AssessmentQuestion,
  type AssessmentRecommendation,
  type LocalizedCopy
} from '../../content/assessments';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';

interface DigitalReadinessAssessmentProps {
  onNavigate: (path: string) => void;
}

type Answers = Record<string, number>;
export type OrganizationTypeId = 'government' | 'education' | 'retail' | 'enterprise' | 'other';
export type AssessmentScoreBand = 'low' | 'medium' | 'high';

interface DimensionResult {
  id: AssessmentDimensionId;
  score: number;
}

interface AssessmentResult {
  score: number;
  level: LocalizedCopy;
  summary: LocalizedCopy;
  dimensions: DimensionResult[];
}

interface RecommendationResult extends AssessmentRecommendation {
  scope: 'core' | 'government';
}

interface OrganizationTypeOption {
  id: OrganizationTypeId;
  label: LocalizedCopy;
  description: LocalizedCopy;
}

const ORGANIZATION_TYPES: OrganizationTypeOption[] = [
  {
    id: 'government',
    label: { id: 'Pemerintah / Instansi Publik', en: 'Government / Public Institution' },
    description: { id: 'Termasuk layanan publik, pemerintahan daerah, dan dokumen resmi.', en: 'Including public services, local government, and official documents.' }
  },
  {
    id: 'education',
    label: { id: 'Pendidikan', en: 'Education' },
    description: { id: 'Sekolah, yayasan, kampus, atau organisasi pendidikan.', en: 'Schools, foundations, campuses, or education organizations.' }
  },
  {
    id: 'retail',
    label: { id: 'Retail & F&B', en: 'Retail & F&B' },
    description: { id: 'Operasional outlet, transaksi, inventory, dan multi-cabang.', en: 'Outlet operations, transactions, inventory, and multi-branch operations.' }
  },
  {
    id: 'enterprise',
    label: { id: 'Perusahaan / Enterprise', en: 'Enterprise / Organization' },
    description: { id: 'Perusahaan, BUMD, organisasi, dan unit kerja lintas fungsi.', en: 'Companies, regional enterprises, organizations, and cross-functional teams.' }
  },
  {
    id: 'other',
    label: { id: 'Lainnya', en: 'Other' },
    description: { id: 'Pilih opsi ini jika kebutuhan organisasi Anda bersifat umum.', en: 'Choose this option if your organization has a general readiness context.' }
  }
];

const copy = (value: LocalizedCopy, language: 'id' | 'en') => value[language];
const clampScore = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const scoreQuestion = (question: AssessmentQuestion, answer: number) => {
  const scores = question.options.map((option) => option.score);
  const minimum = Math.min(...scores);
  const maximum = Math.max(...scores);
  const range = maximum - minimum;
  if (range === 0) return 100;
  return ((answer - minimum) / range) * 100;
};

export const calculateAssessmentResult = (assessment: AssessmentDefinition, answers: Answers): AssessmentResult => {
  // Every answer is normalized to 0–100 before averaging. This keeps the
  // five-level core and preserved four-level government module comparable.
  const questionScores = assessment.questions.map((question) => scoreQuestion(question, answers[question.id]));
  const score = clampScore(questionScores.reduce((total, item) => total + item, 0) / questionScores.length);
  const dimensions = assessment.dimensions.map((dimension) => {
    const questions = assessment.questions.filter((question) => question.dimensionId === dimension.id);
    const dimensionScores = questions.map((question) => scoreQuestion(question, answers[question.id]));
    return {
      id: dimension.id,
      score: clampScore(dimensionScores.reduce((total, item) => total + item, 0) / dimensionScores.length)
    };
  });

  if (score <= 25) {
    return {
      score,
      level: { id: 'Foundational', en: 'Foundational' },
      summary: { id: 'Fondasi digital masih perlu ditata agar proses, data, dan pengguna dapat bergerak dalam arah yang sama.', en: 'The digital foundation needs structure so processes, data, and users can move in the same direction.' },
      dimensions
    };
  }
  if (score <= 50) {
    return {
      score,
      level: { id: 'Developing', en: 'Developing' },
      summary: { id: 'Beberapa fondasi sudah tersedia, tetapi integrasi dan konsistensi masih menjadi ruang perbaikan utama.', en: 'Some foundations are in place, but integration and consistency remain the main opportunities for improvement.' },
      dimensions
    };
  }
  if (score <= 75) {
    return {
      score,
      level: { id: 'Integrated', en: 'Integrated' },
      summary: { id: 'Organisasi sudah memiliki fondasi yang terhubung dan dapat memprioritaskan analytics, otomasi, atau penguatan adopsi.', en: 'The organization has connected foundations and can prioritize analytics, automation, or adoption improvements.' },
      dimensions
    };
  }
  return {
    score,
    level: { id: 'Advanced', en: 'Advanced' },
    summary: { id: 'Kapabilitas digital sudah matang; fokus berikutnya adalah optimasi, ketahanan, dan pengembangan berbasis data.', en: 'Digital capabilities are mature; the next focus is optimization, resilience, and data-informed development.' },
    dimensions
  };
};

export const getAssessmentScoreBand = (score: number): AssessmentScoreBand => {
  if (score <= 35) return 'low';
  if (score <= 75) return 'medium';
  return 'high';
};

const getScoreLabel = (score: number, language: 'id' | 'en') => {
  if (score <= 25) return language === 'en' ? 'Foundational' : 'Fondasi';
  if (score <= 50) return language === 'en' ? 'Developing' : 'Berkembang';
  if (score <= 75) return language === 'en' ? 'Integrated' : 'Terintegrasi';
  return language === 'en' ? 'Advanced' : 'Maju';
};

const getScoreBandLabel = (score: number, language: 'id' | 'en') => {
  const band = getAssessmentScoreBand(score);
  if (band === 'low') return language === 'en' ? '0–35 · Needs strengthening' : '0–35 · Perlu penguatan';
  if (band === 'medium') return language === 'en' ? '36–75 · Developing well' : '36–75 · Cukup baik, masih berkembang';
  return language === 'en' ? '76–100 · Strong foundation' : '76–100 · Fondasi kuat';
};

const getScoreBandClass = (score: number) => `artavel-assessment-score-${getAssessmentScoreBand(score)}`;

export const DigitalReadinessAssessment: React.FC<DigitalReadinessAssessmentProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const assessmentStartRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const coreAssessment = getAssessmentDefinition('general');
  const governmentAssessment = getAssessmentDefinition('government-document');
  const [organizationType, setOrganizationType] = useState<OrganizationTypeId | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [governmentResult, setGovernmentResult] = useState<AssessmentResult | null>(null);

  const isGovernment = organizationType === 'government';
  const totalQuestions = coreAssessment.questions.length + (isGovernment ? governmentAssessment.questions.length : 0);
  const coreAnsweredCount = coreAssessment.questions.filter((question) => answers[question.id] !== undefined).length;
  const governmentAnsweredCount = governmentAssessment.questions.filter((question) => answers[question.id] !== undefined).length;
  const isCoreComplete = coreAnsweredCount === coreAssessment.questions.length;
  const isComplete = isCoreComplete && (!isGovernment || governmentAnsweredCount === governmentAssessment.questions.length);
  const answeredCount = coreAnsweredCount + (isGovernment ? governmentAnsweredCount : 0);

  const recommendations = useMemo<RecommendationResult[]>(() => {
    if (!result) return [];
    const sortedFor = (assessment: AssessmentDefinition, assessmentResult: AssessmentResult, scope: RecommendationResult['scope']) => {
      const scoreByDimension = new Map(assessmentResult.dimensions.map((dimension) => [dimension.id, dimension.score]));
      return assessment.recommendations
        .filter((item) => scoreByDimension.has(item.dimensionId))
        .sort((a, b) => (scoreByDimension.get(a.dimensionId) ?? 0) - (scoreByDimension.get(b.dimensionId) ?? 0))
        .map((item) => ({ ...item, scope }));
    };
    const coreRecommendations = sortedFor(coreAssessment, result, 'core');
    if (!governmentResult) return coreRecommendations.slice(0, 3);
    const governmentRecommendations = sortedFor(governmentAssessment, governmentResult, 'government');
    const lowestGovernmentScore = Math.min(...governmentResult.dimensions.map((dimension) => dimension.score));
    const specialized = lowestGovernmentScore <= 75 ? governmentRecommendations.slice(0, 1) : [];
    return [...coreRecommendations.slice(0, 2), ...specialized];
  }, [coreAssessment, governmentAssessment, governmentResult, result]);

  useEffect(() => {
    if (!result) return undefined;
    const frame = window.requestAnimationFrame(() => {
      const resultElement = resultRef.current;
      resultElement?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
      resultElement?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [result, shouldReduceMotion]);

  const handleOrganizationChange = (nextOrganization: OrganizationTypeId) => {
    setOrganizationType(nextOrganization);
    setHasStarted(false);
    setAnswers({});
    setResult(null);
    setGovernmentResult(null);
  };

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((current) => ({ ...current, [questionId]: score }));
    setResult(null);
    setGovernmentResult(null);
  };

  const handleSubmit = () => {
    if (!isComplete) return;
    setResult(calculateAssessmentResult(coreAssessment, answers));
    setGovernmentResult(isGovernment ? calculateAssessmentResult(governmentAssessment, answers) : null);
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setGovernmentResult(null);
    setHasStarted(Boolean(organizationType));
    window.requestAnimationFrame(() => {
      assessmentStartRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  };

  const organizationLabel = organizationType
    ? copy(ORGANIZATION_TYPES.find((item) => item.id === organizationType)?.label ?? ORGANIZATION_TYPES[4].label, language)
    : '';

  const renderQuestion = (question: AssessmentQuestion, index: number) => (
    <fieldset key={question.id} className="rounded-2xl border border-[#DBE4EB] bg-[#F7F9FB] p-4 sm:p-5">
      <legend className="max-w-full px-1 text-base font-bold leading-relaxed text-[#172536]">
        <span className="mr-2 text-sm text-[#36699C]">{String(index + 1).padStart(2, '0')}</span>
        {copy(question.prompt, language)}
      </legend>
      <div className="mt-4 grid gap-2">
        {question.options.map((option) => {
          const inputId = `${question.id}-${option.id}`;
          return (
            <label key={option.id} htmlFor={inputId} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#DBE4EB] bg-white px-3 py-3 text-sm text-[#172536] transition-colors hover:border-[#36699C]/50 hover:bg-[#EAF2F8] has-[:checked]:border-[#36699C] has-[:checked]:bg-[#EAF2F8]">
              <input id={inputId} type="radio" name={question.id} value={option.score} checked={answers[question.id] === option.score} onChange={() => handleAnswer(question.id, option.score)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#36699C]" />
              <span className="leading-relaxed">{copy(option.label, language)}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );

  const renderBreakdown = (assessment: AssessmentDefinition, assessmentResult: AssessmentResult, title: string) => (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-[#36699C]" aria-hidden="true" />
        <h3 className="text-xl font-bold text-[#172536] font-heading">{title}</h3>
      </div>
      <div className="space-y-4">
        {assessmentResult.dimensions.map((dimensionResult) => {
          const dimension = assessment.dimensions.find((item) => item.id === dimensionResult.id);
          if (!dimension) return null;
          return (
            <div key={dimensionResult.id}>
              <div className="mb-1 flex items-center justify-between gap-3 text-sm font-semibold text-[#172536]"><span>{copy(dimension.label, language)}</span><span className="text-[#36699C]">{dimensionResult.score}</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#DBE4EB]" role="progressbar" aria-label={copy(dimension.label, language)} aria-valuemin={0} aria-valuemax={100} aria-valuenow={dimensionResult.score}>
                <div className="h-full rounded-full bg-[#36699C] transition-[width] duration-500" style={{ width: `${dimensionResult.score}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Section bg="surface-blue" padding="normal" id="assessment-tool">
      <Container size="narrow">
        <div ref={assessmentStartRef} className="artavel-assessment scroll-mt-40 rounded-3xl border border-[#B7D7C4] bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <Badge variant="green" size="md" className="mb-3" icon={<Sparkles className="h-4 w-4" />}>
              {language === 'en' ? 'Interactive pre-sales tool' : 'Alat bantu konsultasi interaktif'}
            </Badge>
            <h2 className="text-3xl font-extrabold leading-tight text-[#172536] font-heading sm:text-4xl">{copy(coreAssessment.title, language)}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5C6B79]">{copy(coreAssessment.description, language)}</p>
          </div>

          <div className="mb-8 grid gap-2 sm:grid-cols-3" aria-label={language === 'en' ? 'Assessment steps' : 'Langkah assessment'}>
            {[
              language === 'en' ? '1. Organization' : '1. Jenis organisasi',
              language === 'en' ? '2. Core assessment' : '2. Assessment inti',
              isGovernment ? language === 'en' ? '3. Government module' : '3. Modul Government' : language === 'en' ? '3. Results' : '3. Hasil'
            ].map((label, index) => {
              const active = index === 0 ? !hasStarted : index === 1 ? hasStarted && !result : Boolean(result) || (index === 2 && isGovernment && isCoreComplete);
              return <div key={label} className={`rounded-xl border px-3 py-2 text-center text-xs font-bold ${active ? 'border-[#36699C] bg-[#EAF2F8] text-[#244F78]' : 'border-[#DBE4EB] bg-[#F7F9FB] text-[#7A8792]'}`}>{label}</div>;
            })}
          </div>

          {!hasStarted && !result && (
            <fieldset className="rounded-2xl border border-[#DBE4EB] bg-[#F7F9FB] p-4 sm:p-5">
              <legend className="px-1 text-lg font-bold text-[#172536] font-heading">{language === 'en' ? 'What type of organization are you assessing?' : 'Jenis organisasi Anda'}</legend>
              <p className="mt-1 text-sm leading-relaxed text-[#5C6B79]">{language === 'en' ? 'This only selects relevant questions. No personal data is required.' : 'Pilihan ini hanya menentukan pertanyaan yang relevan. Tidak ada data pribadi yang diminta.'}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ORGANIZATION_TYPES.map((option) => (
                  <label key={option.id} className={`artavel-assessment-organization-option flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${organizationType === option.id ? 'border-[#36699C] bg-[#EAF2F8]' : 'border-[#DBE4EB] bg-white hover:border-[#36699C]/50 hover:bg-[#EAF2F8]'}`}>
                    <input type="radio" name="organization-type" value={option.id} checked={organizationType === option.id} onChange={() => handleOrganizationChange(option.id)} className="mt-1 h-4 w-4 shrink-0 accent-[#36699C]" />
                    <span><span className="block text-sm font-bold text-[#172536]">{copy(option.label, language)}</span><span className="mt-1 block text-xs leading-relaxed text-[#5C6B79]">{copy(option.description, language)}</span></span>
                  </label>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[#DBE4EB] pt-5 sm:flex-row sm:items-center">
                <span className="text-xs font-semibold text-[#36699C]">{language === 'en' ? 'No personal data required' : 'Tanpa data pribadi'}</span>
                <Button variant="primary" disabled={!organizationType} onClick={() => setHasStarted(true)} rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>{language === 'en' ? 'Start Core Assessment' : 'Mulai Assessment Inti'}</Button>
              </div>
            </fieldset>
          )}

          {hasStarted && !result && (
            <>
              <div className="mb-6 flex flex-col gap-3 text-sm text-[#5C6B79] sm:flex-row sm:items-center sm:justify-between">
                <div><span className="font-bold text-[#172536]">{organizationLabel}</span><button type="button" onClick={() => setHasStarted(false)} className="ml-3 text-xs font-bold text-[#36699C] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]">{language === 'en' ? 'Change' : 'Ubah'}</button></div>
                <div className="flex items-center justify-between gap-4 sm:justify-end"><span>{language === 'en' ? `${answeredCount} of ${totalQuestions} answered` : `${answeredCount} dari ${totalQuestions} terjawab`}</span><span className="font-semibold text-[#36699C]">{language === 'en' ? 'No personal data' : 'Tanpa data pribadi'}</span></div>
              </div>
              <div className="mb-5 h-2 overflow-hidden rounded-full bg-[#DBE4EB]" role="progressbar" aria-label={language === 'en' ? 'Assessment progress' : 'Progress assessment'} aria-valuemin={0} aria-valuemax={totalQuestions} aria-valuenow={answeredCount}><div className="h-full rounded-full bg-gradient-to-r from-[#36699C] to-[#7DBC5E] transition-[width] duration-300" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} /></div>
              <div className="mb-3 flex items-center gap-2"><span className="rounded-full bg-[#EAF2F8] px-2.5 py-1 text-xs font-bold text-[#36699C]">01</span><h3 className="text-lg font-bold text-[#172536] font-heading">{language === 'en' ? 'Core assessment' : 'Assessment inti'}</h3></div>
              <div className="space-y-5">{coreAssessment.questions.map((question, index) => renderQuestion(question, index))}</div>
              {isGovernment && isCoreComplete && (
                <div className="mt-8">
                  <div className="mb-3 flex items-center gap-2"><span className="rounded-full bg-[#EFF8EA] px-2.5 py-1 text-xs font-bold text-[#568F3E]">02</span><div><h3 className="text-lg font-bold text-[#172536] font-heading">{language === 'en' ? 'Government & Document module' : 'Modul Government & Dokumen'}</h3><p className="text-xs text-[#5C6B79]">{copy(governmentAssessment.description, language)}</p></div></div>
                  <div className="space-y-5">{governmentAssessment.questions.map((question, index) => renderQuestion(question, coreAssessment.questions.length + index))}</div>
                </div>
              )}
              <div className="mt-8 flex flex-col items-stretch justify-between gap-3 border-t border-[#DBE4EB] pt-6 sm:flex-row sm:items-center">
                <p className="text-xs leading-relaxed text-[#5C6B79]">{language === 'en' ? 'Your score is calculated from your answers and is intended as a discussion starting point, not a certification.' : 'Skor dihitung dari jawaban Anda sebagai bahan awal diskusi, bukan sertifikasi resmi.'}</p>
                <Button variant="primary" onClick={handleSubmit} disabled={!isComplete} rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>{language === 'en' ? 'See My Result' : 'Lihat Hasil Saya'}</Button>
              </div>
            </>
          )}

          {result && (
            <div ref={resultRef} id="assessment-results" tabIndex={-1} className="artavel-assessment-result scroll-mt-40" aria-live="polite">
              <div className={`artavel-assessment-score-card rounded-2xl border p-5 sm:p-7 ${getScoreBandClass(result.score)}`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="artavel-assessment-score-label text-xs font-bold uppercase tracking-[0.16em]">{language === 'en' ? 'Digital Readiness Score' : 'Skor Kesiapan Digital'}</p><p className="mt-2 text-4xl font-extrabold font-heading">{result.score}<span className="artavel-assessment-score-suffix text-xl"> / 100</span></p><p className="artavel-assessment-score-level mt-1 text-sm font-bold">{getScoreLabel(result.score, language)}</p><p className="artavel-assessment-score-band mt-1 text-xs font-bold">{getScoreBandLabel(result.score, language)}</p></div><div className="artavel-assessment-score-summary max-w-xl text-sm leading-relaxed">{copy(result.summary, language)}</div></div>
              </div>
              {governmentResult && <div className={`artavel-assessment-specialized-score mt-4 rounded-2xl border p-4 sm:p-5 ${getScoreBandClass(governmentResult.score)}`}><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><p className="artavel-assessment-score-label text-xs font-bold uppercase tracking-[0.14em]">{language === 'en' ? 'Government & Document Readiness' : 'Kesiapan Government & Dokumen'}</p><p className="mt-1 text-2xl font-extrabold font-heading">{governmentResult.score}<span className="artavel-assessment-score-suffix text-base"> / 100</span></p></div><p className="artavel-assessment-score-band text-sm font-bold">{getScoreBandLabel(governmentResult.score, language)}</p></div></div>}

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                {renderBreakdown(coreAssessment, result, language === 'en' ? 'Core dimension breakdown' : 'Rincian dimensi inti')}
                <div><div className="mb-4 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[#568F3E]" aria-hidden="true" /><h3 className="text-xl font-bold text-[#172536] font-heading">{language === 'en' ? 'Recommended next steps' : 'Rekomendasi langkah berikutnya'}</h3></div><div className="space-y-3">{recommendations.map((item, index) => <div key={`${item.scope}-${item.dimensionId}`} className="rounded-2xl border border-[#DBE4EB] bg-[#F7F9FB] p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-[#568F3E]">{language === 'en' ? `Priority ${index + 1}` : `Prioritas ${index + 1}`}</p><h4 className="mt-1 text-base font-bold text-[#172536]">{copy(item.title, language)}</h4></div><span className="shrink-0 rounded-full bg-[#EAF2F8] px-2 py-1 text-xs font-bold text-[#36699C]">{copy(item.solutionFamily, language)}</span></div><p className="mt-2 text-sm leading-relaxed text-[#5C6B79]">{copy(item.description, language)}</p><button type="button" onClick={() => onNavigate(item.solutionPath)} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-bold text-[#36699C] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]">{language === 'en' ? 'Explore relevant solution' : 'Lihat solusi yang relevan'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></div>)}</div></div>
              </div>
              {governmentResult && <div className="mt-8 rounded-2xl border border-[#DBE4EB] bg-[#F7F9FB] p-5">{renderBreakdown(governmentAssessment, governmentResult, language === 'en' ? 'Government & Document breakdown' : 'Rincian Government & Dokumen')}</div>}
              <div className="mt-8 flex flex-col justify-center gap-3 border-t border-[#DBE4EB] pt-6 sm:flex-row"><Button variant="success" onClick={() => onNavigate('/kontak')} rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>{language === 'en' ? 'Discuss Your Assessment' : 'Diskusikan Hasil Assessment'}</Button><Button variant="outline" onClick={handleReset} leftIcon={<RotateCcw className="h-4 w-4" aria-hidden="true" />}>{language === 'en' ? 'Retake Assessment' : 'Ulangi Assessment'}</Button></div>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#5C6B79]"><CheckCircle2 className="h-4 w-4 text-[#568F3E]" aria-hidden="true" />{language === 'en' ? 'This result is computed from your answers and can be used to frame a consultation.' : 'Hasil ini dihitung dari jawaban Anda dan dapat menjadi bahan awal konsultasi.'}</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
