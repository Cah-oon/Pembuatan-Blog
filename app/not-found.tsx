export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-slate-400">Halaman yang Anda cari belum tersedia, tetapi struktur aplikasi sudah siap dikembangkan.</p>
      </div>
    </main>
  );
}
