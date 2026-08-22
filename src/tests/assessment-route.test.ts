import { describe, expect, it } from 'vitest';
import { getAssessmentDefinition } from '../content/assessments';
import { toLocalizedPath } from '../utils/i18nRouting';

describe('assessment route and content contract', () => {
  it('keeps the assessment reachable in both localized URL forms', () => {
    expect(toLocalizedPath('/assessment', 'id')).toBe('/id/assessment');
    expect(toLocalizedPath('/assessment', 'en')).toBe('/en/assessment');
  });

  it('keeps the legacy government/document questions intact', () => {
    const assessment = getAssessmentDefinition('government-document');

    expect(assessment.questions.map((question) => question.prompt.id)).toEqual([
      'Bagaimana cara organisasi Anda menyimpan arsip & surat dinas saat ini?',
      'Berapa rata-rata waktu yang dibutuhkan untuk menemukan satu berkas dokumen lama?',
      'Bagaimana alur persetujuan / disposisi surat & perizinan dilakukan?'
    ]);
  });

  it('provides the general ten-question readiness profile across eight dimensions', () => {
    const assessment = getAssessmentDefinition('general');

    expect(assessment.questions).toHaveLength(10);
    expect(assessment.dimensions).toHaveLength(8);
  });
});
