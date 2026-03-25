import React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-theme-bg flex items-center justify-center p-4">
       <div className="absolute top-8 left-8">
          <Link href="/" className="font-mono text-2xl font-bold tracking-tighter">
             SYNAPS
          </Link>
       </div>

       <div className="w-full max-w-sm bg-theme-surface border border-border shadow-sm p-8">
          <div className="mb-8">
             <h1 className="text-3xl font-bold text-theme-text font-mono uppercase mb-2">Access Node</h1>
             <p className="text-sm font-medium text-theme-muted">Enter credentials to synchronize.</p>
          </div>

          <form className="space-y-6">
             <div className="space-y-2">
                <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-text">Email Terminal</label>
                <Input type="email" placeholder="user@institute.edu" className="bg-theme-bg" />
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-text flex justify-between">
                   Passkey
                   <Link href="#" className="font-sans text-[10px] text-theme-muted hover:text-theme-text underline underline-offset-2">Forgot?</Link>
                </label>
                <Input type="password" placeholder="••••••••" className="bg-theme-bg" />
             </div>
             
             <Button type="button" className="w-full h-12 text-sm font-bold tracking-wide uppercase">
                <Link href="/dashboard" className="w-full h-full flex items-center justify-center">Authenticate</Link>
             </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-border/20 text-center">
             <p className="text-xs font-medium text-theme-muted">
                Unregistered node? <Link href="/onboarding" className="text-theme-text font-bold hover:underline">Request allocation</Link>
             </p>
          </div>
       </div>
    </div>
  )
}
