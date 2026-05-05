import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cultivatr | MicroBiz Programs',
  description: 'Regenerative Business Development (RBD) and Tech Tuesday learning modules with integrated assessments.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
