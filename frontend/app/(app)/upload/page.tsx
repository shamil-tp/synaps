import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UploadCloud, File, AlertCircle } from "lucide-react"

export default function UploadPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <header className="border-b border-border pb-6">
         <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Inject Knowledge</h1>
         <p className="text-theme-muted font-medium">Contribute resources to the distributed network.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         {/* File Input Area */}
         <div className="border border-border border-dashed bg-theme-surface/30 flex flex-col items-center justify-center p-12 text-center h-[400px] hover:bg-theme-surface transition-colors cursor-pointer group">
            <UploadCloud className="w-16 h-16 text-theme-muted mb-6 group-hover:scale-110 group-hover:text-theme-text transition-all" />
            <h3 className="font-bold text-xl mb-2 font-mono uppercase tracking-tight">Select Resource</h3>
            <p className="text-sm text-theme-muted mb-8 max-w-[250px]">
               Drag & drop or browse. PDF, DOCX, EXCEL up to 50MB.
            </p>
            <Button variant="default" className="w-full max-w-[200px] pointer-events-none uppercase text-xs tracking-widest font-bold border border-border shadow-sm">
               Browse System
            </Button>
         </div>

         {/* Metadata Form */}
         <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500 p-4 text-blue-700 dark:text-blue-400 text-sm flex gap-3 shadow-sm">
               <AlertCircle className="w-5 h-5 shrink-0" />
               <p className="font-medium">All uploads are subject to moderation. Please ensure your resource does not violate network guidelines.</p>
            </div>

            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-muted">Title / Designation</label>
                  <Input placeholder="E.g., Quantum Mechanics Notes - Chapter 1" />
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-muted">Description</label>
                  <textarea 
                     className="flex w-full rounded-none border border-border bg-theme-bg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-text min-h-[100px]"
                     placeholder="Brief overview of the resource contents..."
                  />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-muted">Format / Type</label>
                     <select className="flex h-10 w-full rounded-none border border-border bg-theme-bg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-text">
                        <option value="" disabled selected>Select Type...</option>
                        <option value="research_paper">Research Paper</option>
                        <option value="textbook">Textbook</option>
                        <option value="notes">Notes</option>
                        <option value="pyq">PYQ</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold font-mono uppercase tracking-widest text-theme-muted">Subject Domain</label>
                     <select className="flex h-10 w-full rounded-none border border-border bg-theme-bg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-text">
                        <option value="" disabled selected>Select Subject...</option>
                        <option value="cs">Computer Science</option>
                        <option value="math">Mathematics</option>
                        <option value="physics">Physics</option>
                     </select>
                  </div>
               </div>
               
               <div className="pt-4 border-t border-border/20 flex justify-end">
                  <Button className="px-8 uppercase tracking-widest text-sm font-bold shadow-sm">
                     Submit to Network
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
