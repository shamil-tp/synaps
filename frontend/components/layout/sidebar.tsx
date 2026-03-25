"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Library, User, Upload, Shield, Users, FileLock2 } from "lucide-react"

type SidebarLink = {
  href: string
  label: string
  icon: React.ElementType
}

const APP_LINKS: SidebarLink[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/my-library", label: "My Library", icon: Library },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/profile", label: "Profile", icon: User },
]

const ADMIN_LINKS: SidebarLink[] = [
  { href: "/admin/overview", label: "Overview", icon: Shield },
  { href: "/admin/user-management", label: "Users", icon: Users },
  { href: "/admin/document-moderation", label: "Moderation", icon: FileLock2 },
]

export function Sidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname()
  const links = isAdmin ? ADMIN_LINKS : APP_LINKS

  return (
    <aside className="w-64 border-r-2 border-theme-text bg-theme-bg flex flex-col min-h-screen">
      <div className="p-6 border-b-2 border-theme-text flex items-center gap-2">
        <div className="font-mono text-2xl font-bold tracking-tighter">
          SYNAPS
        </div>
        {isAdmin && <span className="text-xs bg-theme-text text-theme-bg px-1 font-mono">ADMIN</span>}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium border-2 transition-colors",
                isActive
                  ? "border-theme-text bg-theme-surface text-theme-text shadow-[2px_2px_0_var(--theme-text)]"
                  : "border-transparent text-theme-muted hover:border-theme-text/30 hover:text-theme-text"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t-2 border-theme-text">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium border-2 border-transparent text-theme-muted hover:border-theme-text/30 hover:text-theme-text transition-colors"
        >
          Exit to Public
        </Link>
      </div>
    </aside>
  )
}
