import Link from 'next/link';

const articles = [
  { title: 'Tren Firmware 2026', slug: 'tren-firmware-2026', category: 'Firmware' },
  { title: 'Cara Menulis Artikel SEO yang Menarik', slug: 'cara-menulis-artikel-seo', category: 'SEO' },
  { title: 'Panduan Affiliate Marketing untuk Blog', slug: 'affiliate-marketing-blog', category: 'Affiliate' },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Blog</p>
          <h1 className="text-3xl font-semibold text-white">Kumpulan artikel SEO dan teknologi</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm text-brand-300">{article.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{article.title}</h2>
              <p className="mt-3 text-sm text-slate-400">Konten siap dikembangkan menjadi artikel lengkap dengan schema, breadcrumb, dan FAQ.</p>
              <Link href={`/blog/${article.slug}`} className="mt-5 inline-flex text-sm font-medium text-brand-300 hover:text-brand-100">
                Baca artikel →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
