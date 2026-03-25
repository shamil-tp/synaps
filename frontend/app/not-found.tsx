"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme-bg flex flex-col items-center justify-center p-8 text-center border-8 border-border">
      <div className="space-y-6 max-w-lg">
        <h1 className="text-8xl font-bold font-mono tracking-tighter text-theme-text">404</h1>
        <h2 className="text-2xl font-bold uppercase tracking-widest text-theme-muted font-mono">Resource Unallocated</h2>
        <p className="text-theme-muted">The structural node you are attempting to access does not exist on this network.</p>
        <div className="pt-8">
          <Button asChild size="lg" className="uppercase font-bold tracking-widest text-xs">
             <Link href="/">Return to Root</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}