import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Artikel</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">{params.slug.replace(/-/g, ' ')}</h1>
        <p className="mt-5 text-slate-300">
          Halaman artikel ini siap dikembangkan dengan SEO, schema, FAQ, breadcrumb, rating, komentar, dan tautan terkait.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/blog" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600">
            Kembali ke Blog
          </Link>
          <Link href="/admin" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-white">
            Buka Admin
          </Link>
        </div>
      </div>
    </main>
  );
}
