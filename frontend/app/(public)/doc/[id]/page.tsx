import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MOCK_DOCUMENTS } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Share2, MessageSquare, Flag, ExternalLink, Maximize } from "lucide-react"

export default async function DocumentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const doc = MOCK_DOCUMENTS.find((d) => d.id === id)

  if (!doc) notFound()

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      
      {/* ── PDF VIEWER (Left/Main Side) ── */}
      <section className="flex-1 bg-theme-text flex flex-col relative order-2 lg:order-1 h-full">
         <div className="flex items-center justify-between px-4 py-3 bg-theme-bg border-b border-border hidden lg:flex">
            <div className="font-mono text-xs font-bold text-theme-text flex items-center gap-4">
              <span className="bg-theme-text text-theme-bg px-2 py-0.5">{doc.format.toUpperCase()}</span>
              <span>{doc.fileSizeBytes / 1_000_000} MB</span>
              <span>PAGE 1 OF {doc.pageCount}</span>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="outline" size="sm" className="h-8 shadow-none gap-2">
                 <Maximize className="w-3.5 h-3.5" /> Fullscreen
               </Button>
            </div>
         </div>
         <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto w-full relative">
            {/* Mocking the actual PDF render */}
            <div className="bg-theme-bg w-full max-w-4xl aspect-[1/1.4] shadow-sm border border-theme-bg p-12 flex flex-col my-8">
               <h1 className="text-4xl font-bold mb-8 underline">{doc.title}</h1>
               <div className="flex-1 border-t border-theme-surface pt-4 space-y-4 font-mono text-sm text-theme-muted opacity-50">
                  <div className="h-4 bg-theme-surface w-full rounded-sm"></div>
                  <div className="h-4 bg-theme-surface w-[90%] rounded-sm"></div>
                  <div className="h-4 bg-theme-surface w-[95%] rounded-sm"></div>
                  <div className="h-4 bg-theme-surface w-[80%] rounded-sm"></div>
                  <br/>
                  <div className="h-4 bg-theme-surface w-full rounded-sm"></div>
                  <div className="h-4 bg-theme-surface w-[85%] rounded-sm"></div>
                  <div className="h-4 bg-theme-surface w-full rounded-sm"></div>
               </div>
            </div>
         </div>
      </section>

      {/* ── SIDEBAR DETAILS (Right side) ── */}
      <aside className="w-full lg:w-[400px] border-l border-border bg-theme-bg flex flex-col order-1 lg:order-2 overflow-y-auto h-full border-b lg:border-b-0">
        <div className="p-6 border-b border-border sticky top-0 bg-theme-bg z-10 flex gap-2">
           <Button className="flex-1 gap-2 shadow-sm">
              <Download className="w-4 h-4" /> Download
           </Button>
           <Button variant="outline" size="icon" className="shrink-0">
             <Share2 className="w-4 h-4" />
           </Button>
        </div>

        <div className="p-6 space-y-8 flex-1">
           <div>
              <div className="flex gap-2 mb-3">
                 <Badge variant="secondary">{doc.subject}</Badge>
                 <Badge variant="outline">{doc.type}</Badge>
              </div>
              <h1 className="text-2xl font-bold text-theme-text leading-tight mb-4">
                 {doc.title}
              </h1>
              <p className="text-theme-muted leading-relaxed text-sm">
                 {doc.description}
              </p>
           </div>

           <div className="space-y-4">
              <h3 className="font-mono font-bold uppercase tracking-widest text-xs border-b border-border pb-2">
                 Uploader Info
              </h3>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-theme-text text-theme-bg flex items-center justify-center font-bold font-mono">
                    {doc.uploadedBy.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-sm text-theme-text">{doc.uploadedBy.name}</h4>
                    <p className="text-xs text-theme-muted font-mono">
                       Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="font-mono font-bold uppercase tracking-widest text-xs border-b border-border pb-2">
                 Metadata
              </h3>
              <dl className="grid grid-cols-2 gap-y-4 text-sm">
                 <div>
                    <dt className="text-theme-muted font-mono uppercase text-[10px] tracking-wider mb-1">Views</dt>
                    <dd className="font-bold">{doc.viewCount.toLocaleString()}</dd>
                 </div>
                 <div>
                    <dt className="text-theme-muted font-mono uppercase text-[10px] tracking-wider mb-1">Downloads</dt>
                    <dd className="font-bold">{doc.downloadCount.toLocaleString()}</dd>
                 </div>
                 <div>
                    <dt className="text-theme-muted font-mono uppercase text-[10px] tracking-wider mb-1">Rating</dt>
                    <dd className="font-bold flex items-center gap-1">★ {doc.rating} <span className="text-theme-muted font-normal">({doc.ratingCount})</span></dd>
                 </div>
                 <div>
                    <dt className="text-theme-muted font-mono uppercase text-[10px] tracking-wider mb-1">Language</dt>
                    <dd className="font-bold uppercase">{doc.language}</dd>
                 </div>
              </dl>
           </div>

           <div className="space-y-4">
              <h3 className="font-mono font-bold uppercase tracking-widest text-xs border-b border-border pb-2">
                 Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                 {doc.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 bg-theme-surface text-theme-text text-xs tracking-tight font-medium hover:bg-theme-text hover:text-theme-bg transition-colors cursor-pointer">
                     #{tag}
                   </span>
                 ))}
              </div>
           </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between">
           <Button variant="ghost" size="sm" className="text-theme-muted gap-2">
             <Flag className="w-4 h-4" /> Report Issue
           </Button>
        </div>
      </aside>

    </div>
  )
}
