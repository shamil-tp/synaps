import React from "react"
import Link from "next/link"
import { DocumentSummary } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Bookmark, MoreHorizontal } from "lucide-react"

export function DocumentCard({ doc }: { doc: DocumentSummary }) {
  const formattedDate = new Date(doc.uploadedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase()

  return (
    <Card className="flex flex-col h-full group hover:shadow-md transition-shadow">
      {/* Cover Image - Uncropped Book Covers */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] max-h-80 border-b border-border bg-theme-surface flex items-center justify-center p-2 flex-shrink-0">
        {doc.thumbnailUrl ? (
          <img
            src={doc.thumbnailUrl}
            alt={`${doc.title} cover`}
            className="w-full h-full object-contain shadow-sm bg-white"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span className="font-mono text-[10px] text-theme-muted uppercase tracking-widest opacity-50">
              {doc.subject}
            </span>
          </div>
        )}
      </div>

      <CardHeader className="flex-1 pb-4">
        <div className="flex justify-between items-start mb-3">
          <CardTitle className="text-xl font-mono leading-snug line-clamp-2">
            {doc.title}
          </CardTitle>
          <button className="text-theme-muted hover:text-theme-text shrink-0 ml-2">
             <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        
        {/* Meta tags row matching snippet 1 & 3 layout */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-theme-muted font-medium mb-4">
           <span className="uppercase text-theme-muted text-[11px] font-sans">
              {doc.uploadedBy.name}
           </span>
           <span>•</span>
           <span className="uppercase text-[11px] font-sans">
              {formattedDate}
           </span>
           <span>•</span>
           <span className="uppercase text-[11px] font-sans">
              {(doc.fileSizeBytes / 1_000_000).toFixed(1)} MB
           </span>
        </div>

        <p className="text-sm text-theme-muted font-sans leading-relaxed line-clamp-3">
          {doc.description}
        </p>
      </CardHeader>

      <CardFooter className="flex gap-2 border-t border-border pt-4">
        <Button asChild className="flex-1 bg-[#1E2328] hover:bg-[#1E2328]/90 text-white rounded-sm h-10 shadow-none border-none">
          <Link href={`/doc/${doc.id}`}>
            <Eye className="w-4 h-4 mr-2" /> View
          </Link>
        </Button>
        <Button variant="outline" className="flex-[0.5] rounded-sm h-10 shadow-none border-border">
          <Bookmark className="w-4 h-4 mr-2" /> Save
        </Button>
      </CardFooter>
    </Card>
  )
}
