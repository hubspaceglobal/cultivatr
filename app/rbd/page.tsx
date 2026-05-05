import Link from 'next/link';
import { TopNav } from '@/components/top-nav';
import { getRbdModules } from '@/lib/content';

export default function RbdPage() {
  const modules = getRbdModules();

  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">Regenerative Business Development</p>
        <h1 className="page-title">RBD Modules</h1>
        <p className="page-copy">Self-paced business development lessons mapped to Tech Tuesday modules.</p>

        <div className="grid-cards">
          {modules.map((module) => (
            <article key={module.slug} className="module-card">
              <h2>{module.title}</h2>
              <p>{module.summary}</p>
              <Link href={`/rbd/${module.slug}`}>Open module →</Link>
            </article>
          ))}
        </div>

        <div className="inline-links">
          <Link href="/rbd/program-guide">View Program Guide</Link>
          <Link href="/rbd/assessments/self-discovery">Open Self-Discovery Assessment</Link>
        </div>
      </section>
    </main>
  );
}
