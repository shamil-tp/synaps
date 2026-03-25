"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] bg-theme-bg flex flex-col items-center justify-center p-8 text-center border-4 border-red-600 border-dashed m-12">
      <div className="space-y-6 max-w-lg text-red-600">
        <h2 className="text-2xl font-bold uppercase tracking-widest font-mono">Critical Node Error</h2>
        <p className="text-red-600/70 font-mono text-sm">A failure occurred during structural rendering.</p>
        <div className="pt-8">
          <Button 
            onClick={() => reset()}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white uppercase font-bold tracking-widest text-xs shadow-none"
          >
            Reinitialize Handshake
          </Button>
        </div>
      </div>
    </div>
  )
}