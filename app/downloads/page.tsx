const downloads = [
  { name: 'Driver USB', size: '12.4 MB', type: 'Installer' },
  { name: 'Toolkit Flash', size: '48.2 MB', type: 'ZIP' },
  { name: 'Manual Firmware', size: '3.1 MB', type: 'PDF' },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Downloads</p>
          <h1 className="text-3xl font-semibold text-white">Unduh file pendukung dan alat</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {downloads.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Ukuran: {item.size}</p>
              <p className="mt-1 text-sm text-slate-400">Format: {item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
