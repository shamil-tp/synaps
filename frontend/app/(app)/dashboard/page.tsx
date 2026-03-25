import React from "react"
import { MOCK_RECENT_DOCUMENTS } from "@/lib/mock-data"
import { DocumentCard } from "@/components/document/document-card"
import { DocumentGrid } from "@/components/document/document-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
         <div>
            <Badge variant="outline" className="mb-4">NODE: ACTIVE</Badge>
            <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Welcome Back.</h1>
            <p className="text-theme-muted font-medium">Your structural profile is synced and ready.</p>
         </div>
         <Button>View Profile Details</Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="border border-border bg-theme-bg p-6 shadow-sm">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-theme-muted mb-4 border-b border-border pb-2">Reputation</h3>
            <p className="text-4xl font-bold text-theme-text">4,281</p>
         </div>
         <div className="border border-border bg-theme-bg p-6 shadow-sm">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-theme-muted mb-4 border-b border-border pb-2">Contributions</h3>
            <p className="text-4xl font-bold text-theme-text">12</p>
         </div>
         <div className="border border-border bg-theme-bg p-6 shadow-sm bg-theme-text text-theme-bg">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-theme-bg/60 mb-4 border-b border-theme-bg pb-2">Network Status</h3>
            <p className="text-4xl font-bold text-theme-bg flex items-center gap-3">
               <span className="w-4 h-4 rounded-full bg-green-500 inline-block animate-pulse"></span>
               Optimal
            </p>
         </div>
      </section>

      <section>
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase">Continue Reading</h2>
         </div>
         <DocumentGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_RECENT_DOCUMENTS.map((doc) => (
               <DocumentCard key={doc.id} doc={doc} />
            ))}
         </DocumentGrid>
      </section>

      <section>
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-mono tracking-tighter uppercase">Recommended for your discipline</h2>
         </div>
         <DocumentGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...MOCK_RECENT_DOCUMENTS].reverse().map((doc) => (
               <DocumentCard key={doc.id} doc={doc} />
            ))}
         </DocumentGrid>
      </section>
    </div>
  )
}
