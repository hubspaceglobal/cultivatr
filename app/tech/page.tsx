import Link from 'next/link';
import { TopNav } from '@/components/top-nav';
import { getTechModules } from '@/lib/content';

export default function TechPage() {
  const modules = getTechModules();

  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">Tech Tuesday</p>
        <h1 className="page-title">Tech Modules</h1>
        <p className="page-copy">Technical modules linked to the RBD curriculum.</p>

        <div className="grid-cards">
          {modules.map((module) => (
            <article key={module.slug} className="module-card">
              <h2>{module.title}</h2>
              <p>{module.summary}</p>
              <Link href={`/tech/${module.slug}`}>Open module →</Link>
            </article>
          ))}
        </div>

        <div className="inline-links">
          <Link href="/tech/assessments/digital-identity">Open Digital Identity Assessment</Link>
        </div>
      </section>
    </main>
  );
}
