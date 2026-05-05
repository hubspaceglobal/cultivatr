import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="hero-card">
        <p className="eyebrow">Cultivatr · MicroBiz</p>
        <h1>Program Hub</h1>
        <p>Choose a learning track below.</p>
        <div className="home-actions">
          <Link href="/rbd" className="btn-primary">Open RBD Program</Link>
          <Link href="/tech" className="btn-secondary">Open Tech Tuesday</Link>
          <Link href="/admin" className="btn-ghost">Content Admin (Decap)</Link>
        </div>
      </div>
    </main>
  );
}
