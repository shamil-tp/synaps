"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-sm">
      <div className="synaps-container flex h-14 items-center justify-between">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="text-[var(--color-text-primary)] font-black tracking-[-0.06em] text-xl select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SYN
            {/* The 'A' as two horizontal bars — the synapse gap */}
            <span className="inline-flex flex-col justify-center gap-[3px] mx-[1px] translate-y-[1px]">
              <span className="block w-[10px] h-[2px] bg-[var(--color-text-primary)] rounded-none" />
              <span className="block w-[10px] h-[2px] bg-[var(--color-text-primary)] rounded-none" />
            </span>
            PS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/browse"
            className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)]"
          >
            Browse
          </Link>
          <Link
            href="/search"
            className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)]"
          >
            Search
          </Link>
          <Link
            href="/upload"
            className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)]"
          >
            Upload
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="synaps-btn synaps-btn-ghost text-xs py-2 px-4">
            Sign in
          </Link>
          <Link href="/login" className="synaps-btn synaps-btn-primary text-xs py-2 px-4">
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-[var(--duration-base)] origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-[var(--duration-base)] ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[var(--color-text-primary)] transition-all duration-[var(--duration-base)] origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden transition-all duration-[var(--duration-base)] ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="synaps-container flex flex-col py-3 gap-1">
          <Link
            href="/browse"
            onClick={() => setMenuOpen(false)}
            className="py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)]"
          >
            Browse
          </Link>
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            className="py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)]"
          >
            Search
          </Link>
          <Link
            href="/upload"
            onClick={() => setMenuOpen(false)}
            className="py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)]"
          >
            Upload
          </Link>
          <div className="flex gap-2 pt-3">
            <Link href="/login" className="synaps-btn synaps-btn-ghost text-xs flex-1 justify-center py-2">
              Sign in
            </Link>
            <Link href="/login" className="synaps-btn synaps-btn-primary text-xs flex-1 justify-center py-2">
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}