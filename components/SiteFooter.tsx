export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Nexora Blog. Semua hak dilindungi.</p>
        <div className="flex gap-4">
          <span>SEO Ready</span>
          <span>Responsive</span>
          <span>PWA Friendly</span>
        </div>
      </div>
    </footer>
  );
}
