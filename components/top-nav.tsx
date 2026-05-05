import Link from 'next/link';

export function TopNav() {
  return (
    <header className="top-nav">
      <Link href="/" className="brand">Micro<span>Biz</span></Link>
      <nav>
        <Link href="/rbd">RBD</Link>
        <Link href="/tech">Tech Tuesday</Link>
        <Link href="/rbd/program-guide">Program Guide</Link>
      </nav>
    </header>
  );
}
