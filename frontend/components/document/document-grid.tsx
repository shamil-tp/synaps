import React from "react"
import { cn } from "@/lib/utils"

interface DocumentGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DocumentGrid({ children, className, ...props }: DocumentGridProps) {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
