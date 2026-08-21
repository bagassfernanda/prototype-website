import { describe, expect, it } from 'vitest';
import { getAssessmentDefinition } from '../../content/assessments';
import { calculateAssessmentResult, getAssessmentScoreBand } from './DigitalReadinessAssessment';

const answersFor = (profileId: 'general' | 'government-document', optionIndex: number) => {
  const assessment = getAssessmentDefinition(profileId);
  return Object.fromEntries(
    assessment.questions.map((question) => [question.id, question.options[optionIndex].score])
  );
};

describe('digital readiness scoring', () => {
  it('maps the lowest general answers to 0 and Foundational', () => {
    const assessment = getAssessmentDefinition('general');
    const result = calculateAssessmentResult(assessment, answersFor('general', 0));

    expect(result.score).toBe(0);
    expect(result.level.id).toBe('Foundational');
    expect(result.dimensions.every((dimension) => dimension.score === 0)).toBe(true);
  });

  it('maps the highest general answers to 100 and Advanced', () => {
    const assessment = getAssessmentDefinition('general');
    const result = calculateAssessmentResult(assessment, answersFor('general', 4));

    expect(result.score).toBe(100);
    expect(result.level.id).toBe('Advanced');
    expect(result.dimensions.every((dimension) => dimension.score === 100)).toBe(true);
  });

  it('normalizes the preserved government/document profile from 1–4 to 0–100', () => {
    const assessment = getAssessmentDefinition('government-document');
    const result = calculateAssessmentResult(assessment, answersFor('government-document', 2));

    expect(result.score).toBe(67);
    expect(result.level.id).toBe('Integrated');
    expect(result.dimensions.every((dimension) => dimension.score === 67)).toBe(true);
  });

  it('maps readiness scores to the three visual bands', () => {
    expect(getAssessmentScoreBand(0)).toBe('low');
    expect(getAssessmentScoreBand(35)).toBe('low');
    expect(getAssessmentScoreBand(36)).toBe('medium');
    expect(getAssessmentScoreBand(75)).toBe('medium');
    expect(getAssessmentScoreBand(76)).toBe('high');
    expect(getAssessmentScoreBand(100)).toBe('high');
  });
});
