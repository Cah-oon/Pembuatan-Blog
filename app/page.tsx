import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const posts = [
  { title: 'Panduan Instalasi Firmware Terbaru', category: 'Firmware', excerpt: 'Langkah aman dan cepat untuk update perangkat Anda.' },
  { title: 'SEO On-Page untuk Blog Teknologi', category: 'SEO', excerpt: 'Optimalkan artikel Anda agar mudah ditemukan di mesin pencari.' },
  { title: 'Tips Memilih Produk Elektronik Berkualitas', category: 'Produk', excerpt: 'Pilih barang dengan fitur, garansi, dan performa terbaik.' },
];

const stats = [
  { label: 'Artikel', value: '250+' },
  { label: 'Firmware', value: '120+' },
  { label: 'Pengunjung', value: '20k' },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),_transparent_35%)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-100">
            🚀 Blog modern & siap deploy
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Bangun blog teknologi, firmware, dan produk dengan design profesional.
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Platform lengkap dengan halaman blog, dashboard admin, SEO, upload media, dan struktur siap ekspansi untuk bisnis Anda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/blog" className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white transition hover:bg-brand-600">
              Lihat Blog
            </Link>
            <Link href="/admin" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-brand-500 hover:text-white">
              Dashboard Admin
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-brand-500/10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-xl font-bold">N</div>
            <div>
              <h2 className="text-xl font-semibold">Nexora Blog</h2>
              <p className="text-sm text-slate-400">Portal Teknologi & Firmware</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Artikel Terbaru</p>
            <h2 className="text-2xl font-semibold text-white">Konten yang siap dipublikasikan</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm text-brand-300">{post.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{post.excerpt}</p>
              <Link href="/blog" className="mt-5 inline-flex text-sm font-medium text-brand-300 hover:text-brand-100">
                Baca Selengkapnya →
              </Link>
            </article>
          ))}
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
