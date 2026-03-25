import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-theme-text focus:ring-offset-2",
        {
          "border-transparent bg-theme-surface text-theme-text":
            variant === "default",
          "border-transparent bg-theme-surface text-theme-muted":
            variant === "secondary",
          "border-border text-theme-muted bg-theme-surface": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
