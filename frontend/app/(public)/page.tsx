import Link from "next/link"
import {
  MOCK_SUBJECTS,
  MOCK_FEATURED_DOCUMENTS,
  MOCK_RECENT_DOCUMENTS,
  MOCK_LANDING_STATS,
} from "@/lib/mock-data"
import type { DocumentSummary } from "@/lib/types"

const TYPE_LABELS: Record<DocumentSummary["type"], string> = {
  research_paper: "Research",
  textbook: "Textbook",
  notes: "Notes",
  pyq: "PYQ",
  journal: "Journal",
  thesis: "Thesis",
  other: "Other",
}

function DocCard({ doc }: { doc: DocumentSummary }) {
  return (
    <Link href={`/doc/${doc.id}`} className="group flex flex-col bg-surface/20 hover:bg-surface/60 border border-surface rounded-xl overflow-hidden transition-all duration-200">
      {/* Thumbnail */}
      <div className="w-full aspect-[4/3] bg-surface relative flex items-center justify-center p-6 grayscale group-hover:grayscale-0 transition-all">
         {/* Placeholder blocks (brutalist rectangles from wireframe) */}
         <div className="w-full h-full flex flex-col justify-center gap-3 opacity-30">
            <div className="h-2 w-3/4 bg-slate-mid rounded" />
            <div className="h-2 w-full bg-slate-mid rounded" />
            <div className="h-2 w-5/6 bg-slate-mid rounded" />
         </div>
         {/* Badge */}
         <span className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-slate-dark text-cream">
           {TYPE_LABELS[doc.type]}
         </span>
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-dark line-clamp-2 leading-snug mb-2 group-hover:text-black">{doc.title}</h3>
        <p className="text-xs font-semibold text-slate-mid mb-5">{doc.subject}</p>
        
        <div className="mt-auto flex items-center justify-between text-xs text-slate-mid font-bold pt-4 border-t border-slate-mid/10">
          <span>{doc.pageCount ? `${doc.pageCount} pp` : `${(doc.fileSizeBytes / 1_000_000).toFixed(1)} MB`}</span>
          <div className="flex items-center gap-3">
             {doc.rating && <span>★ {doc.rating.toFixed(1)}</span>}
             <span>↓ {doc.downloadCount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function Home() {
  // Simulate network delay to demonstrate skeletons
  await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center rounded-full border border-slate-mid/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-mid mb-8 bg-surface/50">
          Open • Free • Community-Driven
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-dark tracking-tight leading-[1.05] mb-6">
          Knowledge that <br className="hidden sm:block" />
          <span className="relative inline-block italic z-10">
            flows freely.
            <svg className="absolute w-[110%] h-4 -bottom-1 -left-[5%] text-surface -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-mid max-w-2xl mb-12 font-medium leading-relaxed">
          Upload and discover research papers, textbooks, handwritten notes, and previous year question papers — all in one place.
        </p>

        {/* Search Input */}
        <form action="/search" className="w-full max-w-2xl flex flex-row gap-2">
          <input 
            type="text" 
            name="q"
            placeholder="Search textbooks, notes..." 
            className="flex-1 h-12 sm:h-14 px-4 sm:px-6 rounded-lg border-2 border-surface bg-transparent text-slate-dark placeholder:text-slate-mid/70 focus:outline-none focus:border-slate-mid transition-colors font-medium text-sm sm:text-base w-full min-w-0"
          />
          <button type="submit" className="h-12 sm:h-14 px-5 sm:px-8 rounded-lg bg-slate-dark text-cream font-bold text-sm sm:text-base hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-mid">
          {["CLRS", "KTU PYQ", "H.C. Verma", "Deep Learning"].map((hint) => (
             <Link key={hint} href={`/search?q=${encodeURIComponent(hint)}`} className="hover:text-slate-dark underline decoration-slate-mid/40 underline-offset-4 transition-colors">
               {hint}
             </Link>
          ))}
        </div>
      </section>

      {/* ── SUBJECTS STRIP ── */}
      <section className="border-y border-surface bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-mid">Browse by Subject</h2>
           </div>
           <div className="flex flex-wrap gap-3">
             {MOCK_SUBJECTS.map(subject => (
                <Link key={subject.id} href={`/browse?subject=${subject.slug}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-mid/20 bg-cream hover:border-slate-mid hover:text-slate-dark transition-all font-bold text-sm text-slate-dark group shadow-sm">
                   <span>{subject.name}</span>
                   <span className="text-[11px] bg-surface px-1.5 py-0.5 rounded text-slate-mid group-hover:text-slate-dark transition-colors">{subject.documentCount}</span>
                </Link>
             ))}
             <Link href="/browse" className="inline-flex items-center px-5 py-2.5 rounded-md border border-slate-dark bg-slate-dark text-cream hover:bg-slate-dark/90 font-bold text-sm transition-all shadow-sm">
                View All →
             </Link>
           </div>
        </div>
      </section>

      {/* ── FEATURED DOCUMENTS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28">
         <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-slate-dark tracking-tight">Featured</h2>
            <Link href="/browse" className="text-xs font-bold text-slate-mid hover:text-slate-dark uppercase tracking-widest transition-colors inline-flex items-center gap-1 bg-surface/50 px-4 py-2 rounded-md">
               View All <span>→</span>
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {MOCK_FEATURED_DOCUMENTS.map(doc => (
               <DocCard key={doc.id} doc={doc} />
            ))}
         </div>
      </section>

      {/* ── RECENT UPLOADS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28 border-t border-surface">
         <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-slate-dark tracking-tight">Recent Uploads</h2>
            <Link href="/browse?sort=newest" className="text-xs font-bold text-slate-mid hover:text-slate-dark uppercase tracking-widest transition-colors inline-flex items-center gap-1 bg-surface/50 px-4 py-2 rounded-md">
               View All <span>→</span>
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {MOCK_RECENT_DOCUMENTS.map(doc => (
               <DocCard key={doc.id} doc={doc} />
            ))}
         </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-surface bg-surface/40">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
               {MOCK_LANDING_STATS.map((stat, i) => (
                  <div key={stat.label} className={`flex flex-col items-center justify-center ${i < 3 ? 'md:border-r md:border-slate-mid/20' : ''}`}>
                     <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-dark tracking-tighter mb-3">{stat.value}</span>
                     <span className="text-[11px] font-bold uppercase tracking-widest text-slate-mid">{stat.label}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-dark tracking-tight leading-[1.1] mb-6">
            Share what you know.<br/>Learn what you don't.
         </h2>
         <p className="text-base sm:text-lg md:text-xl text-slate-mid mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the community. Upload your notes, papers, and PYQs — help someone pass their exam or find a breakthrough.
         </p>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-slate-dark text-cream font-bold rounded-lg hover:bg-slate-dark/90 transition-colors whitespace-nowrap shadow-sm text-base">
               Get Started — It's Free
            </Link>
            <Link href="/browse" className="w-full sm:w-auto px-8 py-4 bg-surface text-slate-dark font-bold rounded-lg hover:bg-surface/80 transition-colors whitespace-nowrap shadow-sm border border-slate-mid/10 text-base">
               Browse Library
            </Link>
         </div>
      </section>
    </div>
  )
}