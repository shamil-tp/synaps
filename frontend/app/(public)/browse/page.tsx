import React from "react"
import { MOCK_SUBJECTS, MOCK_DOCUMENTS } from "@/lib/mock-data"
import { DocumentCard } from "@/components/document/document-card"
import { DocumentGrid } from "@/components/document/document-grid"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BrowsePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter uppercase mb-2">
            Catalog
          </h1>
          <p className="text-theme-muted font-medium">Browse our entire distributed library by subject or format.</p>
        </div>
        <div className="w-full md:w-72">
          <Input type="search" placeholder="Filter catalog..." />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">
              Subjects
            </h3>
            <div className="space-y-2">
              {MOCK_SUBJECTS.map((sub) => (
                <label key={sub.id} className="flex items-center gap-3 group cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded-none border border-border bg-transparent text-theme-text focus:ring-theme-text" />
                  <span className="text-sm font-medium group-hover:text-theme-muted transition-colors flex-1">{sub.name}</span>
                  <span className="text-xs font-mono text-theme-muted">{sub.documentCount}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">
              Format
            </h3>
            <div className="space-y-2">
              {['PDF', 'DOCX', 'EXCEL'].map((fmt) => (
                <label key={fmt} className="flex items-center gap-3 group cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded-none border border-border bg-transparent text-theme-text focus:ring-theme-text" />
                  <span className="text-sm font-medium group-hover:text-theme-muted transition-colors">{fmt}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="font-mono text-sm font-bold text-theme-muted">
              {MOCK_DOCUMENTS.length} RESULTS
            </span>
            <select className="h-10 border border-border bg-transparent px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-theme-text">
              <option>Most Popular</option>
              <option>Newest Uploads</option>
              <option>Highest Rated</option>
            </select>
          </div>
          <DocumentGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {MOCK_DOCUMENTS.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </DocumentGrid>
          
          <div className="mt-12 flex justify-center">
             <Button variant="outline" size="lg">Load More Results</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
