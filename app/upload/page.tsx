export default function UploadPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Upload</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Upload media dan file pendukung</h1>
        <p className="mt-4 text-slate-300">
          Fitur upload siap dikembangkan untuk gambar, video, firmware, PDF, ZIP, dan dokumen teknis.
        </p>
        <div className="mt-8 rounded-2xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
          Drag & drop file Anda di sini atau pilih file dari perangkat.
        </div>
      </div>
    </main>
  );
}
