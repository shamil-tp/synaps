import { Sidebar } from "@/components/layout/sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-surface w-full overflow-x-hidden">
      {children}
    </div>
  );
}
