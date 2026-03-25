"use client"

import React from "react"
import Link from "next/link"
import { Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b-2 border-theme-text bg-theme-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-mono text-2xl font-bold tracking-tighter">
              SYNAPS
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/browse" className="text-sm font-medium text-theme-text hover:underline underline-offset-4">
                Browse
              </Link>
              <Link href="/search" className="text-sm font-medium text-theme-text hover:underline underline-offset-4">
                Search
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="hidden sm:flex group">
              <Link href="/upload">
                <Upload className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" /> 
                Upload
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}