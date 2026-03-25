import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, FileSearch } from "lucide-react"

export default function DocumentModerationPage() {
   const queue = [
      { id: "DOC-1092", title: "Advanced Calculus Vol 2.", uploader: "@student_x", subject: "Math", size: "14 MB", status: "Pending" },
      { id: "DOC-1093", title: "Algorithms final exam PYQ", uploader: "@johndoe", subject: "CS", size: "2.1 MB", status: "Pending" },
      { id: "DOC-1094", title: "Physics Lab Readings", uploader: "@phys_major", subject: "Physics", size: "0.5 MB", status: "Flagged" },
   ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 h-full flex flex-col">
      <header className="border-b border-border pb-6 shrink-0">
         <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Moderation Queue</h1>
         <p className="text-theme-muted font-medium">Review pending resources before network distribution.</p>
      </header>

      <div className="flex gap-4 mb-4 shrink-0">
         <Badge variant="default" className="text-sm px-4 py-1">Pending (14)</Badge>
         <Badge variant="outline" className="text-sm px-4 py-1 text-red-600 border-red-600">Flagged (3)</Badge>
         <Badge variant="outline" className="text-sm px-4 py-1">Rejected Recently (8)</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0">
         
         {/* Queue List */}
         <div className="flex flex-col h-full border border-border bg-theme-bg">
            <div className="p-4 border-b border-border bg-theme-surface/50 font-mono font-bold text-xs uppercase tracking-widest flex justify-between">
               <span>Approval Queue</span>
               <span>3 visible</span>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
               {queue.map(doc => (
                  <div key={doc.id} className="border border-border p-4 hover:border-blue-500 transition-colors cursor-pointer group flex flex-col gap-3 relative overflow-hidden">
                     {doc.status === 'Flagged' && <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 border-l-2 border-b border-red-600 transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>}
                     
                     <div className="flex justify-between items-start">
                        <div>
                           <div className="flex gap-2 items-center mb-1">
                              <span className="font-mono text-[10px] text-theme-muted uppercase">{doc.id}</span>
                              {doc.status === 'Flagged' && <Badge variant="outline" className="text-[10px] border-red-600 text-red-600 py-0">Flagged</Badge>}
                           </div>
                           <h3 className="font-bold text-theme-text">{doc.title}</h3>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 text-xs font-mono text-theme-muted">
                        <span>BY: {doc.uploader}</span>
                        <span>{doc.subject}</span>
                        <span>{doc.size}</span>
                     </div>
                  </div>
               ))}
               <div className="pt-4 text-center">
                  <Button variant="outline" size="sm" className="font-mono text-xs w-full">LOAD MORE</Button>
               </div>
            </div>
         </div>

         {/* Review Panel */}
         <div className="flex flex-col h-full border border-border bg-theme-bg shadow-sm">
            <div className="p-4 border-b border-border bg-theme-text text-theme-bg font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
               <FileSearch className="w-4 h-4" /> Inspecting: DOC-1092
            </div>
            
            <div className="flex-1 p-6 flex flex-col overflow-hidden">
               <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Advanced Calculus Vol 2.</h2>
                  <p className="text-sm text-theme-muted leading-relaxed">
                     Uploaded by @student_x on Oct 25, 2024. Contains solutions to the textbook exercises from chapters 5-10.
                  </p>
               </div>

               {/* Mock PDF Viewer Miniature */}
               <div className="flex-1 border border-border bg-theme-surface/30 mb-6 flex items-center justify-center relative overflow-hidden">
                  <span className="font-mono text-theme-text/20 font-bold uppercase tracking-widest text-2xl rotate-45 pointer-events-none">PDF Preview</span>
               </div>

               <div className="pt-4 border-t border-border flex gap-4 mt-auto">
                  <Button variant="outline" className="flex-1 h-14 border-red-600 text-red-600 hover:bg-red-600 hover:text-white group">
                     <X className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> Reject
                  </Button>
                  <Button className="flex-1 h-14 bg-green-600 text-white hover:bg-green-700 border-green-600 group shadow-sm">
                     <Check className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> Approve
                  </Button>
               </div>
            </div>
         </div>

      </div>
    </div>
  )
}
