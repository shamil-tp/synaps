import React from "react"
import { MOCK_DOCUMENTS } from "@/lib/mock-data"
import { DocumentCard } from "@/components/document/document-card"
import { DocumentGrid } from "@/components/document/document-grid"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const q = (await searchParams).q || ""

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-border pb-12 text-center">
        <h1 className="text-3xl font-mono font-bold uppercase tracking-tight text-theme-text mb-6">
          Query Network
        </h1>
        <form className="max-w-2xl mx-auto flex gap-4">
          <Input 
            type="search" 
            name="q"
            defaultValue={q}
            placeholder="Search keywords, titles, or subjects..."
            className="h-14 py-4 text-base"
          />
          <Button type="submit" size="lg" className="h-14 px-8 shrink-0">
            <Search className="w-5 h-5 mr-2" />
            Find
          </Button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
        <div>
          {q ? (
            <h2 className="text-2xl font-bold text-theme-text">
              Results for &quot;<span className="underline decoration-theme-text">{q}</span>&quot;
            </h2>
          ) : (
             <h2 className="text-2xl font-bold text-theme-text">Recent Documents</h2>
          )}
          <p className="text-theme-muted font-mono text-sm mt-1">{MOCK_DOCUMENTS.length} exact matches found</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
           <Badge variant="outline">Advanced Filters</Badge>
           <Badge variant="outline">Sort: Relevance ↓</Badge>
        </div>
      </div>

      <DocumentGrid>
        {MOCK_DOCUMENTS.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </DocumentGrid>

      {MOCK_DOCUMENTS.length === 0 && (
         <div className="py-24 text-center border border-border border-dashed mt-8">
            <p className="text-theme-muted font-mono font-bold tracking-widest uppercase">
               No matches found across the distributed library
            </p>
         </div>
      )}
    </div>
  )
}
