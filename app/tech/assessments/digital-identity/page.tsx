'use client';

import { useMemo, useState } from 'react';
import { TopNav } from '@/components/top-nav';
import { submitDigitalIdentity, upsertUserProgress } from '@/lib/supabase/submissions';

const sections = {
  awareness: [
    'I know what information about me is publicly available online.',
    'I understand what an IP address is and how it identifies my device.',
    'I know how my SIM card links my phone to my identity.',
    'I understand how URLs and websites track my activity.'
  ],
  security: [
    'I use unique, strong passwords for my important accounts.',
    'I know which accounts use my real name and personal data.',
    'I am aware of how companies monetize my data.',
    'I have taken steps to reduce my digital exposure.'
  ],
  presence: [
    'My online profiles represent who I am.',
    'I have a personal bio I can confidently share.',
    'My resume or CV is up to date.',
    'I am intentional about what I share online.'
  ],
  ownership: [
    'I understand digital wallets.',
    'I understand digital identity ownership.',
    'I have a strategy for my professional online presence.',
    'My digital presence reflects my values and goals.'
  ]
};

export default function DigitalIdentityAssessmentPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [status, setStatus] = useState('');
  const sessionId = useMemo(() => globalThis.crypto?.randomUUID?.() ?? `session-${Date.now()}`, []);

  const questionIds = Object.entries(sections).flatMap(([section, prompts]) =>
    prompts.map((_, idx) => `${section}-${idx}`)
  );

  const totalScore = questionIds.reduce((sum, id) => sum + (answers[id] ?? 0), 0);
  const normalizedScore = Math.round((totalScore / (questionIds.length * 3)) * 100);

  async function saveAssessment() {
    const sectionScores = Object.fromEntries(
      Object.entries(sections).map(([section, prompts]) => {
        const subtotal = prompts.reduce((sum, _, idx) => sum + (answers[`${section}-${idx}`] ?? 0), 0);
        return [section, Math.round((subtotal / (prompts.length * 3)) * 100)];
      })
    );

    setStatus('Submitting...');

    const [assessmentResult, progressResult] = await Promise.all([
      submitDigitalIdentity({
        session_id: sessionId,
        total_score: normalizedScore,
        section_scores: sectionScores,
        answers
      }),
      upsertUserProgress({
        session_id: sessionId,
        track: 'tech',
        module_slug: 'digital-identity-deep-dive',
        completion_pct: 100,
        last_step: 'digital_identity_assessment_complete'
      })
    ]);

    if (assessmentResult.error || progressResult.error) {
      setStatus('Could not submit. Check Supabase keys/policies.');
      return;
    }

    setStatus(`Saved. Total score: ${normalizedScore}%`);
  }

  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">Tech Tuesday Assessment</p>
        <h1 className="page-title">Digital Identity Self-Assessment</h1>
        <p className="page-copy">Rate each statement from 0 (not true) to 3 (very true).</p>

        <div className="assessment-form">
          {Object.entries(sections).map(([section, prompts]) => (
            <fieldset key={section} className="assessment-fieldset">
              <legend>{section.toUpperCase()}</legend>
              {prompts.map((prompt, idx) => {
                const id = `${section}-${idx}`;
                return (
                  <label key={id} className="field-inline">
                    <span>{prompt}</span>
                    <select
                      required
                      value={answers[id] ?? ''}
                      onChange={(event) => setAnswers((prev) => ({ ...prev, [id]: Number(event.target.value) }))}
                    >
                      <option value="" disabled>Select score</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </label>
                );
              })}
            </fieldset>
          ))}

          <button className="btn-primary" type="button" onClick={saveAssessment}>Save assessment</button>
          {status ? <p className="form-status">{status}</p> : null}
        </div>
      </section>
    </main>
  );
}
