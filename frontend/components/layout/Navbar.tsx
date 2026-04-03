"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/onboarding');
  if (isAuthRoute) return null;

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center h-16 md:h-20 px-6 md:px-12 bg-background border-b border-on-background dark:border-b-2 dark:border-primary dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-colors">
      <div className="flex items-center gap-12">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-on-background uppercase flex items-center gap-1 font-headline">
          {/* Logo variant dependent on theme */}
          <span className="flex items-center dark:hidden">
            SYN
            <span className="inline-flex flex-col justify-center h-4 gap-0.5 mx-0.5">
              <span className="w-4 h-0.5 bg-current"></span>
              <span className="w-4 h-0.5 bg-current"></span>
              <span className="w-4 h-0.5 bg-current"></span>
            </span>
            PS
          </span>
          <span className="hidden dark:block">SYNAPS</span>
        </Link>
        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          <Link href="/browse" className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-bold text-on-background dark:text-primary dark:underline dark:underline-offset-8 transition-colors hover:underline decoration-1 underline-offset-4">
            Browse
          </Link>
          <Link href="/search" className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-medium text-on-background/60 dark:text-secondary hover:text-on-background hover:bg-transparent dark:hover:text-background dark:hover:bg-primary transition-all px-2 py-1">
            Search
          </Link>
          <Link href="/upload" className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-medium text-on-background/60 dark:text-secondary hover:text-on-background hover:bg-transparent dark:hover:text-background dark:hover:bg-primary transition-all px-2 py-1">
            Upload
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 border border-outline hover:bg-primary hover:text-on-primary transition-colors"
          >
           {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        )}
        <Link href="/login" className="hidden md:block font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-medium text-on-background transition-all hover:underline dark:hover:italic px-2">
          Sign in
        </Link>
        <Link href="/login" className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-bold bg-primary text-on-primary px-4 md:px-6 py-2 hard-shadow hard-shadow-hover dark:hover:translate-x-[2px] dark:hover:translate-y-[2px] transition-all">
          Get started
        </Link>
      </div>
    </nav>
  );
}