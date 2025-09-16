// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "whodumped.com — Who's dumping HNT?",
  description: "Live dashboards of wallets net-selling HNT, powered by Semantic Grid.",
  openGraph: { title: "whodumped.com", description: "Who’s dumping HNT?" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

