'use client';

import { getSupabaseClient } from './client';
import type { DigitalIdentityAssessment, SelfAssessmentResponse, UserProgress } from './types';

export async function submitSelfAssessment(payload: SelfAssessmentResponse) {
  const supabase = getSupabaseClient();
  return supabase.from('self_assessment_responses').insert(payload);
}

export async function submitDigitalIdentity(payload: DigitalIdentityAssessment) {
  const supabase = getSupabaseClient();
  return supabase.from('digital_identity_assessments').insert(payload);
}

export async function upsertUserProgress(payload: UserProgress) {
  const supabase = getSupabaseClient();
  return supabase.from('user_progress_tracking').upsert(payload, { onConflict: 'session_id,track,module_slug' });
}
