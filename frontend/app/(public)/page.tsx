import Link from "next/link"
import {
  MOCK_SUBJECTS,
  MOCK_FEATURED_DOCUMENTS,
  MOCK_RECENT_DOCUMENTS,
  MOCK_LANDING_STATS,
} from "@/lib/mock-data"
import { DocumentCard } from "@/components/document/document-card"
import { DocumentGrid } from "@/components/document/document-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default async function Home() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32 text-center flex flex-col items-center">
        <Badge variant="outline" className="mb-8 font-mono tracking-widest bg-theme-surface/50">
          V2.0.4 DISTRIBUTED LIBRARY
        </Badge>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-theme-text tracking-tight uppercase leading-[0.9] mb-6 font-mono">
          STRUCTURAL<br/>KNOWLEDGE
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-theme-muted max-w-2xl mb-12 font-medium leading-relaxed">
          SYNAPS is a high-performance distributed library for technical documentation, research papers, and structural datasets. Open, accessible, and brutalist.
        </p>

        {/* Search Input */}
        <form action="/search" className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-12">
          <Input 
            type="text" 
            name="q"
            placeholder="Search 42,000+ technical documents, whitepapers, and datasets..." 
            className="h-14 py-4"
          />
          <Button type="submit" size="lg" className="shrink-0 w-full sm:w-auto h-14">
            Search →
          </Button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-theme-muted">
          <span>QUICK ACCESS:</span>
          <Button variant="outline" size="sm" asChild className="h-8">
            <Link href="/browse">Catalog 📚</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="h-8">
            <Link href="/upload">Upload +</Link>
          </Button>
        </div>
      </section>

      {/* ── FEATURED DOCUMENTS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28 bg-theme-surface/20">
         <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-theme-text font-mono uppercase tracking-widest">Recently Shared</h2>
            <Link href="/browse" className="text-sm font-bold text-theme-text hover:underline transition-colors">
               Browse All Documents ↗
            </Link>
         </div>
         <DocumentGrid>
            {MOCK_FEATURED_DOCUMENTS.map(doc => (
               <DocumentCard key={doc.id} doc={doc} />
            ))}
         </DocumentGrid>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-theme-surface">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-2 divide-theme-text/0 md:divide-theme-text">
               {MOCK_LANDING_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center space-y-2">
                     <span className="text-4xl md:text-5xl font-bold text-theme-text tracking-tighter">
                       {stat.value}
                     </span>
                     <span className="text-sm font-bold uppercase tracking-widest text-theme-muted font-mono">
                       {stat.label}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center bg-theme-text text-theme-bg my-16 border border-border shadow-sm">
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-8 font-mono uppercase">
            CONTRIBUTE TO THE<br/>COLLECTIVE INTELLIGENCE<br/>OF THE NETWORK.
         </h2>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-theme-bg text-theme-text hover:bg-theme-bg/90 border-transparent shadow-sm">
              <Link href="/upload">Upload Research</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-theme-bg text-theme-bg hover:bg-theme-bg hover:text-theme-text">
               <Link href="/browse">Explore Catalog</Link>
            </Button>
         </div>
      </section>
    </div>
  )
}