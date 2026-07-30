import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Nexora Blog logo" width={48} height={48} className="rounded-2xl" />
          <div>
            <p className="text-lg font-semibold text-white">Nexora Blog</p>
            <p className="text-sm text-slate-400">Firmware • Teknologi • SEO</p>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">Beranda</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/admin" className="hover:text-white">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
