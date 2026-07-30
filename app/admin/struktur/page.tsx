export default function AdminStrukturPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Admin</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Struktur modul admin</h1>
        <ul className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
          <li>• Dashboard</li>
          <li>• Blog & SEO</li>
          <li>• Firmware & download</li>
          <li>• Produk & stok</li>
          <li>• Affiliate & voucher</li>
          <li>• User & hak akses</li>
        </ul>
      </div>
    </main>
  );
}
