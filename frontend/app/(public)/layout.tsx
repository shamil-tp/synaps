import { Navbar } from "@/components/layout/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="border-t border-border bg-theme-bg py-12 text-sm text-theme-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-theme-text text-lg">SYNAPS</h3>
            <p>A distributed digital library for open research and structural knowledge sharing.</p>
          </div>
          <div>
            <h4 className="font-bold text-theme-text mb-4 uppercase">Library</h4>
            <ul className="space-y-2">
              <li><a href="/browse" className="hover:underline">Catalog</a></li>
              <li><a href="/search" className="hover:underline">Search</a></li>
              <li><a href="/upload" className="hover:underline">Contribute</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-theme-text mb-4 uppercase">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-theme-text mb-4 uppercase">Admin</h4>
            <ul className="space-y-2">
              <li><a href="/admin/overview" className="hover:underline">Dashboard</a></li>
              <li><a href="/admin/document-moderation" className="hover:underline">Moderation</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
