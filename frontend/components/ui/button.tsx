import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "danger"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm",
          {
            "bg-theme-text text-theme-bg hover:opacity-90": variant === "default",
            "border border-border bg-theme-bg hover:bg-theme-surface text-theme-text":
              variant === "outline",
            "hover:bg-theme-surface hover:text-theme-text": variant === "ghost",
            "text-theme-text underline-offset-4 hover:underline": variant === "link",
            "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100": variant === "danger",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
