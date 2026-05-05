'use client';

import { FormEvent, useMemo, useState } from 'react';
import { TopNav } from '@/components/top-nav';
import { submitSelfAssessment, upsertUserProgress } from '@/lib/supabase/submissions';

const prompts = [
  'Role Assessment: what role do you naturally take in teams?',
  'Passion Compass: what work gives you energy?',
  'Values Sort: choose your top 5 values.',
  'Identity Wheel: map your key identity dimensions.',
  'Origin Story: what experiences shaped your mission?',
  'Who Am I?: write a short identity statement.'
];

export default function SelfDiscoveryPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');
  const sessionId = useMemo(() => globalThis.crypto?.randomUUID?.() ?? `session-${Date.now()}`, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting...');

    const payload = {
      session_id: sessionId,
      module_slug: 'module-01-intention',
      assessment_type: 'self_discovery',
      payload: answers
    };

    const [assessmentResult, progressResult] = await Promise.all([
      submitSelfAssessment(payload),
      upsertUserProgress({
        session_id: sessionId,
        track: 'rbd',
        module_slug: 'module-01-intention',
        completion_pct: 100,
        last_step: 'self_discovery_complete'
      })
    ]);

    if (assessmentResult.error || progressResult.error) {
      setStatus('Could not submit. Check Supabase keys/policies.');
      return;
    }

    setStatus('Saved successfully.');
  }

  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">RBD Assessment</p>
        <h1 className="page-title">Module 1 Self-Discovery</h1>
        <form onSubmit={onSubmit} className="assessment-form">
          {prompts.map((prompt, index) => (
            <label key={prompt} className="field-block">
              <span>{prompt}</span>
              <textarea
                required
                value={answers[`q${index + 1}`] ?? ''}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [`q${index + 1}`]: event.target.value }))}
              />
            </label>
          ))}
          <button className="btn-primary" type="submit">Save responses</button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </section>
    </main>
  );
}
