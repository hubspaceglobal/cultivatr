import { notFound } from 'next/navigation';
import { TopNav } from '@/components/top-nav';
import { getTechModules } from '@/lib/content';

export function generateStaticParams() {
  return getTechModules().map((module) => ({ slug: module.slug }));
}

export default async function TechModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = getTechModules().find((entry) => entry.slug === slug);
  if (!module) return notFound();

  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">Tech Module</p>
        <h1 className="page-title">{module.title}</h1>
        <p className="page-copy">{module.objective}</p>
        <ul className="lesson-list">
          {module.lesson_points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {module.cta_href && module.cta_label ? (
          <a className="btn-primary" href={module.cta_href}>{module.cta_label}</a>
        ) : null}
      </section>
    </main>
  );
}
