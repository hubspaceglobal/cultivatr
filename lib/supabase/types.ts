export type SelfAssessmentResponse = {
  session_id: string;
  module_slug: string;
  assessment_type: string;
  payload: Record<string, unknown>;
  score?: number;
};

export type DigitalIdentityAssessment = {
  session_id: string;
  total_score: number;
  section_scores: Record<string, number>;
  answers: Record<string, number>;
};

export type UserProgress = {
  session_id: string;
  track: 'rbd' | 'tech';
  module_slug: string;
  completion_pct: number;
  last_step?: string;
};
