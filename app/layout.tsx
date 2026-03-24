import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "SYNAPS",
  description: "E Library Management System",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-dvh flex flex-col bg-cream text-slate-dark font-sans selection:bg-slate-dark selection:text-cream">
        
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-surface py-8 md:py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <span className="font-black tracking-tighter text-xl text-slate-dark">SYNAPS</span>
              <p className="text-xs font-medium text-slate-mid leading-relaxed">Open knowledge for everyone.<br className="hidden md:block"/>© {new Date().getFullYear()} Synaps.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-4 text-xs sm:text-sm font-bold text-slate-mid">
              <Link href="/browse" className="hover:text-slate-dark transition-colors">Browse</Link>
              <Link href="/upload" className="hover:text-slate-dark transition-colors">Upload</Link>
              <Link href="/about" className="hover:text-slate-dark transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-slate-dark transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-dark transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}