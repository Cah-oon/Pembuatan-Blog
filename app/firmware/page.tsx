const firmwareItems = [
  { name: 'Samsung S24', version: 'V2.1', type: 'Flash', size: '1.8 GB' },
  { name: 'Xiaomi Redmi Note 13', version: 'V3.0', type: 'Stock ROM', size: '2.1 GB' },
  { name: 'Realme C55', version: 'V1.7', type: 'Custom ROM', size: '1.5 GB' },
];

export default function FirmwarePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Firmware</p>
          <h1 className="text-3xl font-semibold text-white">Koleksi firmware dan update resmi</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {firmwareItems.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Versi: {item.version}</p>
              <p className="mt-1 text-sm text-slate-400">Tipe: {item.type}</p>
              <p className="mt-1 text-sm text-slate-400">Ukuran: {item.size}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
