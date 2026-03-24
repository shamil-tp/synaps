import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] mt-auto">
      <div className="synaps-container py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          {/* Wordmark + tagline */}
          <div>
            <span
              className="text-[var(--color-text-primary)] font-black tracking-[-0.06em] text-lg select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SYNAPS
            </span>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-1 max-w-[200px]">
              Open knowledge for everyone.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Browse", href: "/browse" },
              { label: "Upload", href: "/upload" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            © {new Date().getFullYear()} Synaps. Built in public.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            Kozhikode, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}