import React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-theme-text text-theme-bg flex items-center justify-center p-4">
       <div className="absolute top-8 left-8">
          <Link href="/" className="font-mono text-xl font-bold tracking-widest text-theme-bg opacity-50 hover:opacity-100 transition-opacity">
             ← ABORT SEQUENCE
          </Link>
       </div>

       <div className="w-full max-w-xl">
          <div className="mb-12">
             <h1 className="text-4xl md:text-5xl font-bold font-mono uppercase mb-4 tracking-tighter">Initial Allocation</h1>
             <p className="text-theme-surface/80 text-lg font-medium">Configure your structural profile before accessing the network.</p>
          </div>

          <form className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-bg/70">Designation (Full Name)</label>
                   <Input type="text" placeholder="John Doe" className="bg-theme-text border-theme-bg text-theme-bg focus-visible:ring-theme-bg placeholder:text-theme-bg/30" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-bg/70">Handle (Username)</label>
                   <div className="relative">
                      <span className="absolute left-3 top-2.5 font-mono text-theme-bg/50">@</span>
                      <Input type="text" placeholder="johndoe" className="pl-8 bg-theme-text border-theme-bg text-theme-bg focus-visible:ring-theme-bg placeholder:text-theme-bg/30" />
                   </div>
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-bg/70">Primary Discipline</label>
                <select className="flex h-10 w-full rounded-none border border-theme-bg bg-theme-text px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-bg focus:ring-offset-2 focus:ring-offset-theme-text text-theme-bg">
                   <option value="" disabled selected>Select Discipline...</option>
                   <option value="cs">Computer Science</option>
                   <option value="math">Mathematics</option>
                   <option value="physics">Physics</option>
                </select>
             </div>

             <div className="space-y-4 pt-4 border-t border-theme-bg/20">
                <label className="flex items-start gap-3 cursor-pointer group">
                   <input type="checkbox" className="mt-1 w-4 h-4 rounded-none border border-theme-bg bg-transparent accent-theme-bg focus:ring-theme-bg" />
                   <span className="text-sm font-medium text-theme-surface/80 group-hover:text-theme-bg transition-colors">
                      I agree to the <Link href="#" className="underline decoration-theme-bg/50 underline-offset-2">Structural Knowledge Terms of Resource Access</Link> and pledge to only upload valid metadata.
                   </span>
                </label>
             </div>

             <Button type="button" variant="outline" className="w-full h-14 text-sm font-bold tracking-widest uppercase border-theme-bg text-theme-bg hover:bg-theme-bg hover:text-theme-text shadow-sm">
                <Link href="/dashboard" className="w-full h-full flex items-center justify-center">Initialize Handshake</Link>
             </Button>
          </form>
       </div>
    </div>
  )
}
