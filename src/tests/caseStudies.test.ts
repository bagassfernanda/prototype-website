import { describe, expect, it } from 'vitest';
import { CASE_STUDIES_DATA, getCaseStudyDisplayName } from '../content/caseStudies';

describe('case study content safeguards', () => {
  it('keeps the current case studies anonymous and consistent', () => {
    expect(CASE_STUDIES_DATA).toHaveLength(3);

    CASE_STUDIES_DATA.forEach((caseStudy) => {
      expect(caseStudy.publicationPermission).toBe(false);
      expect(caseStudy.clientName).toBeUndefined();
      expect(getCaseStudyDisplayName(caseStudy)).toBe(caseStudy.anonymousName);
      expect(caseStudy.results.length).toBeLessThanOrEqual(2);
    });
  });

  it('does not expose unverified result values', () => {
    CASE_STUDIES_DATA.forEach((caseStudy) => {
      caseStudy.results.forEach((result) => {
        if (!result.verified) {
          expect(result.value).toBeUndefined();
        }
      });
    });
  });

  it('does not carry restricted case-study claims into the content model', () => {
    const content = JSON.stringify(CASE_STUDIES_DATA).toLowerCase();
    const restrictedTerms = [
      'lamongan',
      'malang',
      'puluhan ribu',
      'cloud private',
      'private cloud',
      'role-based',
      'whatsapp',
      'sms',
      'tte',
      'anri'
    ];

    restrictedTerms.forEach((term) => {
      expect(content).not.toContain(term);
    });
  });
});
