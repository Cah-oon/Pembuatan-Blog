const menu = [
  'Dashboard',
  'Blog',
  'Firmware',
  'Produk',
  'Affiliate',
  'Teknisi',
  'Toko',
  'Stok',
  'Statistik',
  'Video',
  'WhatsApp',
  'Telegram',
  'User',
  'Pengaturan',
  'Hak Akses',
  'Backup',
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Admin</p>
            <h1 className="text-3xl font-semibold text-white">Dashboard modern</h1>
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Mode: Super Admin • RBAC siap aktif
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="mb-4 rounded-2xl bg-brand-500/10 p-4">
              <p className="text-sm text-brand-300">Nexora CMS</p>
              <h2 className="mt-1 text-lg font-semibold text-white">Panel Administrasi</h2>
            </div>
            <nav className="space-y-2">
              {menu.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 px-4 py-3 text-sm text-slate-300 transition hover:border-brand-500 hover:text-white">
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          <section className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['Artikel', '250+'],
                ['Firmware', '120+'],
                ['Komisi', 'Rp 8,5 jt'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">Fitur inti</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                <li>• Blog SEO, kategori, tag, komentar, rating</li>
                <li>• Firmware: merk, model, IC, panel, ukuran, checksum</li>
                <li>• Produk: stok, supplier, galeri, review, voucher</li>
                <li>• Affiliate: diskon, COD, Shopee, TikTok Shop, Tokopedia</li>
                <li>• AI: artikel, SEO, FAQ, produk, banner, chat</li>
                <li>• Keamanan: JWT, RBAC, audit, rate limit, backup</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
