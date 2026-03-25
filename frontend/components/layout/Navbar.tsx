"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface bg-cream/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="font-black tracking-tighter text-2xl text-slate-dark">
            SYNAPS
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/browse" className="text-sm font-bold text-slate-mid hover:text-slate-dark transition-colors">Browse</Link>
          <Link href="/search" className="text-sm font-bold text-slate-mid hover:text-slate-dark transition-colors">Search</Link>
          <Link href="/upload" className="text-sm font-bold text-slate-mid hover:text-slate-dark transition-colors">Upload</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-bold text-slate-dark hover:bg-surface rounded border border-surface transition-colors">
            Sign In
          </Link>
          <Link href="/login" className="px-4 py-2 text-sm font-bold bg-slate-dark text-cream hover:opacity-90 rounded transition-opacity">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-slate-dark rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-dark rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-dark rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-cream border-b border-surface overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"}`}
      >
        <nav className="flex flex-col gap-4 px-4">
          <Link href="/browse" className="text-base font-bold text-slate-mid active:text-slate-dark" onClick={() => setIsMenuOpen(false)}>Browse</Link>
          <Link href="/search" className="text-base font-bold text-slate-mid active:text-slate-dark" onClick={() => setIsMenuOpen(false)}>Search</Link>
          <Link href="/upload" className="text-base font-bold text-slate-mid active:text-slate-dark" onClick={() => setIsMenuOpen(false)}>Upload</Link>
          <div className="h-px w-full bg-surface my-2" />
          <Link href="/login" className="w-full text-center px-4 py-3 text-sm font-bold text-slate-dark bg-surface hover:bg-slate-mid/10 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </Link>
          <Link href="/login" className="w-full text-center px-4 py-3 text-sm font-bold bg-slate-dark text-cream rounded transition-opacity" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}