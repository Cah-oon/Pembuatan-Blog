import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexora Blog | Firmware & Teknologi',
  description: 'Blog modern untuk artikel SEO, firmware, produk, dan dashboard admin.',
  keywords: ['blog', 'firmware', 'teknologi', 'seo', 'dashboard'],
  openGraph: {
    title: 'Nexora Blog',
    description: 'Blog lengkap untuk teknologi, firmware, produk, dan affiliate.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
