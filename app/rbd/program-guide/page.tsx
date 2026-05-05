import { TopNav } from '@/components/top-nav';

export default function ProgramGuidePage() {
  return (
    <main>
      <TopNav />
      <section className="page-wrap">
        <p className="eyebrow">MicroBiz Program Guide</p>
        <h1 className="page-title">Static Program Guide</h1>
        <p className="page-copy">Integrated directly from the provided production HTML file.</p>
        <iframe title="MicroBiz Program Guide" src="/program_guide.html" className="guide-frame" />
      </section>
    </main>
  );
}
