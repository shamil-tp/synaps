import React from "react"
import { MOCK_DOCUMENTS } from "@/lib/mock-data"
import { LibraryCard } from "@/components/document/library-card"
import { DocumentGrid } from "@/components/document/document-grid"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function MyLibraryPage() {
  return (
    <div className="flex flex-col h-full h-[calc(100vh)]">
      <header className="p-8 pb-0 max-w-7xl w-full mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-6">
            <div>
               <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">My Library</h1>
               <p className="text-theme-muted font-medium">Personal collection and contribution archives.</p>
            </div>
            <div className="w-full md:w-72">
               <Input type="search" placeholder="Filter my library..." className="bg-theme-bg" />
            </div>
         </div>
         
         <div className="flex gap-1 mt-6">
            <button className="px-6 py-3 font-mono font-bold text-sm uppercase tracking-widest bg-theme-text text-theme-bg">
               Saved (24)
            </button>
            <button className="px-6 py-3 font-mono font-bold text-sm uppercase tracking-widest text-theme-muted hover:bg-theme-text/10 transition-colors">
               Uploaded (12)
            </button>
            <button className="px-6 py-3 font-mono font-bold text-sm uppercase tracking-widest text-theme-muted hover:bg-theme-text/10 transition-colors">
               History
            </button>
         </div>
      </header>

      <main className="flex-1 overflow-auto p-8 pt-6 bg-theme-surface/50 border-t border-border">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
               <span className="font-mono text-sm font-bold text-theme-muted flex gap-2 items-center">
                  <Badge variant="outline">SORT: NEWEST</Badge>
                  {MOCK_DOCUMENTS.length} ITEMS
               </span>
            </div>
            
            <DocumentGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
               {MOCK_DOCUMENTS.map((doc) => (
                  <LibraryCard key={doc.id} doc={doc} />
               ))}
            </DocumentGrid>
         </div>
      </main>
    </div>
  )
}
