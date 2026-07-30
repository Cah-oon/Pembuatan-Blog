const campaigns = [
  { name: 'Shopee', commission: '8%', status: 'Aktif' },
  { name: 'Tokopedia', commission: '6%', status: 'Aktif' },
  { name: 'TikTok Shop', commission: '10%', status: 'Review' },
];

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Affiliate</p>
          <h1 className="text-3xl font-semibold text-white">Program afiliasi dan komisi</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {campaigns.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Komisi: {item.commission}</p>
              <p className="mt-1 text-sm text-slate-400">Status: {item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
