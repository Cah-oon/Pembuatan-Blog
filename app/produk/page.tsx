const products = [
  { name: 'Power Bank 20000mAh', price: 'Rp 299.000', stock: '12 unit' },
  { name: 'Headset Bluetooth', price: 'Rp 399.000', stock: '8 unit' },
  { name: 'Kabel USB-C', price: 'Rp 89.000', stock: '25 unit' },
];

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Produk</p>
          <h1 className="text-3xl font-semibold text-white">Daftar produk siap jual</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Harga: {item.price}</p>
              <p className="mt-1 text-sm text-slate-400">Stok: {item.stock}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
