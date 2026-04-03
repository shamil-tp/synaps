import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider"; // It's already in root layout but here we are rendering inside it

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-[#141312] text-on-background relative overflow-hidden">
      {/* Dark Theme Background pattern */}
      <div className="absolute inset-0 bg-surface-container-low opacity-50 -z-10 hidden dark:block"></div>

      <header className="p-6 md:p-8 flex justify-between items-center z-10">
        <Link href="/" className="text-xl md:text-2xl font-black text-on-background uppercase tracking-tighter flex items-center gap-1 font-headline">
            <span className="flex items-center dark:hidden">
              SYN
              <span className="inline-flex flex-col justify-center h-3 md:h-4 gap-0.5 mx-0.5">
                <span className="w-3 md:w-4 h-0.5 bg-current"></span>
                <span className="w-3 md:w-4 h-0.5 bg-current"></span>
                <span className="w-3 md:w-4 h-0.5 bg-current"></span>
              </span>
              PS
            </span>
            <span className="hidden dark:block">SYNAPS</span>
        </Link>
        <Link href="/" className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-medium text-on-background hover:underline dark:hover:italic dark:text-on-surface-variant transition-all">
          <span className="dark:hidden">Back to browse</span>
          <span className="hidden dark:block">Cancel Protocol</span>
        </Link>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-6 relative">
          {children}
      </main>

      {/* Decorative Elements */}
      <div className="fixed bottom-8 left-8 text-[0.6875rem] font-label uppercase font-bold opacity-30 dark:opacity-10 dark:text-primary tracking-widest hidden md:block">SYS.AUTH.v.1.0</div>
      <div className="fixed top-8 right-8 text-[0.6875rem] font-label uppercase font-bold opacity-30 dark:opacity-10 dark:text-primary tracking-widest hidden md:block">SECURE CONNECTION</div>
    </div>
  );
}
