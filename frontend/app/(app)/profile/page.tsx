import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <header className="border-b border-border pb-6">
         <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Profile Matrix</h1>
         <p className="text-theme-muted font-medium">Manage your network identity and credentials.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="col-span-1 border border-border p-6 flex flex-col items-center justify-center space-y-4 shadow-sm">
            <div className="w-32 h-32 bg-theme-text text-theme-bg flex items-center justify-center text-5xl font-mono font-bold">
               A
            </div>
            <Button variant="outline" size="sm" className="w-full uppercase text-xs">Update Avatar</Button>
            <div className="w-full pt-4 mt-4 border-t border-border/20 text-center">
               <p className="text-xs uppercase font-mono text-theme-muted tracking-widest">Joined</p>
               <p className="font-bold">Oct 24, 2024</p>
            </div>
         </div>

         <div className="col-span-2 space-y-8">
            <form className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold font-mono uppercase tracking-widest">Designation</label>
                     <Input defaultValue="Arjun Menon" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold font-mono uppercase tracking-widest">Handle</label>
                     <Input defaultValue="@arjunm" disabled className="bg-theme-surface cursor-not-allowed opacity-50" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-xs font-bold font-mono uppercase tracking-widest">Email Terminal</label>
                  <Input defaultValue="arjun.menon@student.university.edu" />
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold font-mono uppercase tracking-widest">Primary Discipline</label>
                  <select className="flex h-10 w-full rounded-none border border-border bg-theme-bg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-text">
                     <option value="cs" selected>Computer Science</option>
                     <option value="math">Mathematics</option>
                     <option value="physics">Physics</option>
                  </select>
               </div>
               
               <Button className="w-full text-sm font-bold uppercase tracking-widest h-12 shadow-sm">
                  Save Changes
               </Button>
            </form>

            <div className="border-t border-border/20 pt-8">
               <h3 className="text-xl font-bold text-red-600 mb-4 font-mono uppercase tracking-tight">Danger Zone</h3>
               <div className="border border-red-600 p-6 flex justify-between items-center bg-red-600/5">
                  <div>
                     <h4 className="font-bold text-red-600">Deallocate Node</h4>
                     <p className="text-sm text-theme-muted">Permanently erase profile and disconnected uploaded resources.</p>
                  </div>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white uppercase text-xs">
                     Delete Account
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
