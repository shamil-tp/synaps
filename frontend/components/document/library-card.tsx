import React from "react"
import { DocumentSummary } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Share2, Trash2, CheckCircle2 } from "lucide-react"

export function LibraryCard({ doc }: { doc: DocumentSummary }) {
  const formattedDate = new Date(doc.uploadedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase()

  return (
    <Card className="flex flex-col h-full group hover:shadow-md transition-shadow relative">
      
      {/* Cover Image Area - Standard Book Aspect Ratio undisorted */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] max-h-60 border-b border-border bg-theme-surface flex items-center justify-center p-2 flex-shrink-0">
        <input 
          type="checkbox" 
          className="absolute top-4 left-4 z-10 w-5 h-5 rounded-sm border-2 border-theme-muted bg-theme-bg cursor-pointer accent-theme-text shadow-sm"
        />
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
        <div className="flex justify-between items-start mb-3 gap-2">
          <CardTitle className="text-xl font-mono leading-snug line-clamp-2">
            {doc.title}
          </CardTitle>
          <button className="text-theme-muted hover:text-theme-text shrink-0 mt-1">
             <MoreVertical className="w-5 h-5" />
          </button>
        </div>
        
        {/* Badges row matching snippet 2 */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
           <Badge variant="default" className="bg-theme-bg border-border text-theme-text inline-flex gap-1.5 px-2 py-1 items-center">
             <CheckCircle2 className="w-3 h-3" /> PUBLISHED
           </Badge>
           {doc.tags.slice(0, 3).map(tag => (
             <Badge key={tag} variant="outline" className="px-2 py-1 bg-theme-surface border-border text-theme-muted">
               #{tag.toUpperCase()}
             </Badge>
           ))}
        </div>

        {/* Meta info row */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-theme-muted font-medium">
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
      </CardHeader>

      {/* Action Buttons row matching snippet 2 */}
      <CardFooter className="flex border-t border-border pt-4 mt-auto items-center justify-between">
        <div className="flex gap-2 w-full">
           <Button variant="outline" className="flex-1 rounded-sm h-10 shadow-none border-border font-bold text-theme-text">
             <Pencil className="w-4 h-4 mr-2" /> Edit
           </Button>
           <Button variant="outline" className="flex-1 rounded-sm h-10 shadow-none border-border font-bold text-theme-text">
             <Share2 className="w-4 h-4 mr-2" /> Share
           </Button>
           <Button variant="ghost" className="flex-shrink-0 rounded-sm h-10 shadow-none text-red-600 hover:text-red-700 hover:bg-red-50 font-bold px-3">
             <Trash2 className="w-4 h-4 mr-1.5" /> Delete
           </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
