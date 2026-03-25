import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MoreVertical, ShieldAlert } from "lucide-react"

export default function UserManagementPage() {
  const users = [
    { id: "U-100", name: "Arjun Menon", handle: "@arjunm", role: "Member", joined: "Oct 24, 2024", status: "Active", docs: 12 },
    { id: "U-101", name: "Priya Nair", handle: "@pnair", role: "Member", joined: "Sep 15, 2024", status: "Active", docs: 4 },
    { id: "U-102", name: "System Admin", handle: "@sysadmin", role: "Admin", joined: "Jan 01, 2024", status: "Active", docs: 142 },
    { id: "U-103", name: "Rahul Das", handle: "@rahuld", role: "Member", joined: "Nov 02, 2024", status: "Suspended", docs: 0 },
    { id: "U-104", name: "Sarah L.", handle: "@sarah_l", role: "Moderator", joined: "Feb 14, 2024", status: "Active", docs: 35 },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="border-b border-border pb-6">
         <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Node Directory</h1>
         <p className="text-theme-muted font-medium">Manage user allocations and clearances.</p>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div className="flex gap-2">
            <Button variant="default" className="shadow-sm">All Users</Button>
            <Button variant="outline">Moderators</Button>
            <Button variant="outline" className="text-red-600 border-red-600/30 hover:border-red-600 hover:text-red-600">Suspended</Button>
         </div>
         <div className="w-full sm:w-72 flex gap-2">
            <Input type="search" placeholder="Search by handle or ID..." />
            <Button size="icon" variant="outline"><Search className="w-4 h-4" /></Button>
         </div>
      </div>

      <div className="w-full overflow-x-auto border border-border bg-theme-bg shadow-sm">
         <table className="w-full text-left text-sm">
            <thead className="bg-theme-surface/50 border-b border-border font-mono uppercase tracking-widest text-xs">
               <tr>
                  <th className="p-4 border-r border-border">ID</th>
                  <th className="p-4 border-r border-border">User</th>
                  <th className="p-4 border-r border-border">Role</th>
                  <th className="p-4 border-r border-border">Status</th>
                  <th className="p-4 border-r border-border">Docs</th>
                  <th className="p-4 border-r border-border">Joined</th>
                  <th className="p-4 text-center">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y-2 divide-theme-text/20">
               {users.map(u => (
                  <tr key={u.id} className="hover:bg-theme-surface/30 transition-colors">
                     <td className="p-4 border-r border-border/20 font-mono text-xs text-theme-muted">{u.id}</td>
                     <td className="p-4 border-r border-border/20">
                        <div className="font-bold">{u.name}</div>
                        <div className="text-theme-muted text-xs font-mono">{u.handle}</div>
                     </td>
                     <td className="p-4 border-r border-border/20">
                        <Badge variant={u.role === "Admin" ? "default" : u.role === "Moderator" ? "secondary" : "outline"} className={u.role === 'Admin' ? 'bg-theme-text text-theme-bg' : ''}>
                           {u.role}
                        </Badge>
                     </td>
                     <td className="p-4 border-r border-border/20">
                        <span className={`inline-flex items-center gap-1.5 font-bold text-xs ${u.status === 'Suspended' ? 'text-red-600' : 'text-green-600'}`}>
                           <span className={`w-2 h-2 rounded-full ${u.status === 'Suspended' ? 'bg-red-600' : 'bg-green-600'}`}></span>
                           {u.status}
                        </span>
                     </td>
                     <td className="p-4 border-r border-border/20 font-mono">{u.docs}</td>
                     <td className="p-4 border-r border-border/20 text-theme-muted">{u.joined}</td>
                     <td className="p-4 text-center">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                           <MoreVertical className="w-4 h-4" />
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      <div className="flex items-center justify-between text-theme-muted font-mono text-xs border-t border-border pt-4">
         <span>5 of 1,824 records</span>
         <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>PREV</Button>
            <Button variant="outline" size="sm">NEXT</Button>
         </div>
      </div>
    </div>
  )
}
