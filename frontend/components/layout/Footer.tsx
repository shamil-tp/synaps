"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/onboarding');
  
  if (isAuthRoute) return null;
  return (
    <footer className="w-full border-t border-on-background bg-background flex flex-col gap-8 px-6 md:px-12 py-12 md:py-16 dark:border-t-2 dark:border-primary">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs flex flex-col gap-4 md:gap-6">
          <div className="text-xl md:text-3xl font-black text-on-background uppercase tracking-tighter flex items-center gap-1 font-headline">
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
          </div>
          <p className="font-label text-xs md:text-sm leading-relaxed opacity-60 dark:opacity-100 dark:text-secondary uppercase font-medium tracking-wider dark:tracking-widest">
             A digital vault for technical knowledge. High-fidelity archival of human ingenuity.
          </p>
          <p className="hidden dark:block font-label text-xs md:text-sm uppercase tracking-widest text-secondary mt-4">
              © 2024 SYNAPS ARCHIVAL SYSTEM
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-x-24 gap-y-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="font-headline uppercase tracking-widest text-xs md:text-xl font-bold dark:text-primary">Directory</span>
            <Link href="/browse" className="font-label uppercase tracking-widest text-xs font-medium text-on-background/80 dark:text-secondary hover:underline dark:hover:text-primary dark:hover:italic transition-all">Browse</Link>
            <Link href="/upload" className="font-label uppercase tracking-widest text-xs font-medium text-on-background/80 dark:text-secondary hover:underline dark:hover:text-primary dark:hover:italic transition-all">Upload</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-headline uppercase tracking-widest text-xs md:text-xl font-bold dark:text-primary">Company</span>
            <Link href="/about" className="font-label uppercase tracking-widest text-xs font-medium text-on-background/80 dark:text-secondary hover:underline dark:hover:text-primary dark:hover:italic transition-all">About</Link>
            <Link href="/privacy" className="font-label uppercase tracking-widest text-xs font-medium text-on-background/80 dark:text-secondary hover:underline dark:hover:text-primary dark:hover:italic transition-all">Privacy</Link>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="font-headline uppercase tracking-widest text-xs md:text-xl font-bold dark:text-primary">Legal</span>
            <Link href="/terms" className="font-label uppercase tracking-widest text-xs font-medium text-on-background/80 dark:text-secondary hover:underline dark:hover:text-primary dark:hover:italic transition-all">Terms</Link>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-on-background/10 flex flex-col md:flex-row justify-between items-center gap-4 dark:hidden">
        <span className="font-label uppercase tracking-[0.05em] text-[0.6875rem] font-medium text-on-background text-center md:text-left">© 2024 SYNAPS. ARCHIVAL SYSTEM v1.0. LOCATION: GMT-0</span>
        <div className="flex items-center gap-4 justify-center md:justify-start">
            <Globe size={18} />
            <span className="font-label uppercase tracking-[0.05em] text-[0.6875rem] font-medium">System Status: Operational</span>
        </div>
      </div>
    </footer>
  );
}