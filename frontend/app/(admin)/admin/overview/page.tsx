import React from "react"
import { Badge } from "@/components/ui/badge"

export default function AdminOverviewPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header className="border-b border-border pb-6 flex justify-between items-end">
         <div>
            <Badge variant="default" className="mb-4">SYSTEM ADMIN</Badge>
            <h1 className="text-4xl font-bold font-mono tracking-tighter uppercase mb-2">Network Overview</h1>
            <p className="text-theme-muted font-medium">Global metrics and active node telemetry.</p>
         </div>
         <div className="font-mono text-xs font-bold text-theme-muted text-right">
            <div>SYNC STATUS: <span className="text-green-600">ACTIVE</span></div>
            <div>LOAD: 12.4MS</div>
            <div>UPTIME: 99.99%</div>
         </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[{label:"Total Members", value:"1,824"}, {label:"Total Documents", value:"4,210"}, {label:"Pending Moderation", value:"14", alert:true}, {label:"Storage Used", value:"42.8 GB"}].map(stat => (
            <div key={stat.label} className={`border border-border p-6 ${stat.alert ? 'bg-theme-text text-theme-bg' : 'bg-theme-bg text-theme-text'} shadow-sm`}>
               <h3 className={`text-xs font-mono font-bold uppercase tracking-widest ${stat.alert ? 'text-theme-bg/70' : 'text-theme-muted'} mb-4 border-b ${stat.alert ? 'border-theme-bg/20' : 'border-border'} pb-2`}>
                 {stat.label}
               </h3>
               <p className="text-4xl font-bold">{stat.value}</p>
            </div>
         ))}
      </section>

      <section className="border border-border p-12 bg-theme-surface/50 text-center flex flex-col items-center justify-center min-h-[300px]">
         {/* Brutalist chart placeholder area */}
         <div className="w-full max-w-3xl flex items-end justify-between h-48 border-b border-border pb-2 px-4 gap-2 opacity-50 grayscale">
            {[30, 45, 20, 60, 80, 50, 90, 100, 75, 40, 25, 65, 85, 55].map((h, i) => (
               <div key={i} className="w-full bg-theme-text content-end transition-all hover:bg-theme-muted" style={{height: `${h}%`}}></div>
            ))}
         </div>
         <p className="mt-8 font-mono font-bold text-sm tracking-widest uppercase text-theme-muted">Upload Frequency (30 Days)</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <section className="border border-border p-6">
            <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-2">Recent System Logs</h3>
            <ul className="space-y-4 font-mono text-xs">
               <li className="flex gap-4"><span className="text-green-600">[OK]</span> <span>User @arjunm authenticated successfully.</span></li>
               <li className="flex gap-4"><span className="text-blue-600">[INFO]</span> <span>Document DOC-8924 uploaded. Awaiting review.</span></li>
               <li className="flex gap-4"><span className="text-red-600">[WARN]</span> <span>API rate limit approached by IP 192.168.1.1</span></li>
               <li className="flex gap-4"><span className="text-green-600">[OK]</span> <span>System backup completed at 02:00 UTC.</span></li>
               <li className="flex gap-4"><span className="text-green-600">[OK]</span> <span>Index rebuilt in 452ms.</span></li>
            </ul>
         </section>
         <section className="border border-border p-6">
            <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-2">Active Moderators</h3>
            <ul className="space-y-4 font-mono text-sm">
               <li className="flex justify-between items-center"><span className="font-bold">@sysadmin</span> <Badge variant="outline">Owner</Badge></li>
               <li className="flex justify-between items-center"><span className="font-bold">@mod_alex</span> <Badge variant="secondary" className="bg-green-500/10 text-green-700">Online</Badge></li>
               <li className="flex justify-between items-center"><span className="font-bold">@sarah_l</span> <span className="text-theme-muted text-xs">Offline (2h)</span></li>
            </ul>
         </section>
      </div>
    </div>
  )
}
