import { Sidebar } from "@/components/layout/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-theme-surface">
      <Sidebar isAdmin />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
