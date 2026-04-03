import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md w-full relative z-10">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4 dark:hidden">Access Terminal</h1>
        <p className="font-label uppercase tracking-widest text-[0.6875rem] font-medium opacity-60 dark:hidden">Authenticate to continue</p>
        
        <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 hidden dark:block">Initialize Session</h1>
        <p className="hidden dark:block font-body text-secondary uppercase tracking-widest text-xs mt-2">Identify through secure provider</p>
      </div>

      <div className="border border-on-background dark:border-2 dark:border-primary bg-background dark:bg-surface-container p-8 md:p-12 hard-shadow dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
        
        {/* Light Mode Button */}
        <Link href="/dashboard" className="dark:hidden w-full border border-on-background bg-background py-4 flex items-center justify-center gap-3 hard-shadow-hover transition-all group mb-8 shadow-[4px_4px_0px_0px_var(--color-on-background)]">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
          <span className="font-label uppercase tracking-widest text-[0.6875rem] font-bold">Continue with Google</span>
        </Link>

        {/* Dark Mode Button */}
        <Link href="/dashboard" className="hidden dark:flex w-full bg-primary text-on-primary font-label font-bold uppercase px-8 py-5 items-center justify-center gap-4 hover:bg-surface-container-highest hover:text-primary transition-none group border-2 border-transparent hover:border-primary mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Initialize OAuth
        </Link>

        <div className="text-center">
          <span className="font-label uppercase tracking-widest text-[0.6875rem] md:text-xs font-medium opacity-40 dark:opacity-60 block mb-6 px-4 py-2 border-b border-on-background/20 dark:border-primary/40 inline-block">Secure Institutional Access</span>
          <p className="text-xs opacity-60 leading-relaxed font-label uppercase tracking-widest font-medium dark:text-secondary">
            By authenticating, you agree to the <Link href="/terms" className="underline dark:hover:text-primary transition-colors">Terms of Service</Link> and <Link href="/privacy" className="underline dark:hover:text-primary transition-colors">Privacy Protocol</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
