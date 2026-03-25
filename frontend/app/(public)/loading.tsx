export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32 text-center flex flex-col items-center">
        <div className="h-6 w-48 bg-surface rounded-full mb-8" />
        <div className="h-[56px] w-3/4 bg-surface rounded-lg mb-4" />
        <div className="h-[56px] w-1/2 bg-surface rounded-lg mb-6" />
        <div className="h-6 w-2/3 bg-surface rounded-md mb-12" />
        
        {/* Search Input Skeleton */}
        <div className="w-full max-w-2xl flex flex-row gap-2">
          <div className="flex-1 h-12 sm:h-14 bg-surface rounded-lg" />
          <div className="h-12 sm:h-14 w-20 sm:w-32 bg-slate-mid/20 rounded-lg flex-shrink-0" />
        </div>

        <div className="mt-8 flex gap-6 justify-center">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-4 w-16 bg-surface rounded" />)}
        </div>
      </section>

      {/* ── SUBJECTS STRIP ── */}
      <section className="border-y border-surface bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="h-3 w-32 bg-slate-mid/20 rounded mb-6" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-10 w-36 bg-cream rounded-md border border-slate-mid/10" />
            ))}
            <div className="h-10 w-28 bg-slate-mid/20 rounded-md" />
          </div>
        </div>
      </section>

      {/* ── FEATURED DOCUMENTS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28">
         <div className="flex items-center justify-between mb-10">
            <div className="h-8 w-40 bg-surface rounded-md" />
            <div className="h-8 w-24 bg-surface rounded-md" />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col border border-surface rounded-xl overflow-hidden">
                <div className="w-full aspect-[4/3] bg-surface" />
                <div className="p-5 flex flex-col flex-1 gap-3">
                   <div className="h-5 w-full bg-surface rounded-md" />
                   <div className="h-5 w-2/3 bg-surface rounded-md" />
                   <div className="h-3 w-1/3 bg-surface rounded mt-2 mb-4" />
                   <div className="mt-auto pt-4 border-t border-slate-mid/10 flex justify-between">
                      <div className="h-3 w-12 bg-surface rounded" />
                      <div className="h-3 w-16 bg-surface rounded" />
                   </div>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── RECENT UPLOADS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-28 border-t border-surface">
         <div className="flex items-center justify-between mb-10">
            <div className="h-8 w-48 bg-surface rounded-md" />
            <div className="h-8 w-24 bg-surface rounded-md" />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col border border-surface rounded-xl overflow-hidden">
                <div className="w-full aspect-[4/3] bg-surface" />
                <div className="p-5 flex flex-col flex-1 gap-3">
                   <div className="h-5 w-full bg-surface rounded-md" />
                   <div className="h-5 w-2/3 bg-surface rounded-md" />
                   <div className="h-3 w-1/3 bg-surface rounded mt-2 mb-4" />
                   <div className="mt-auto pt-4 border-t border-slate-mid/10 flex justify-between">
                      <div className="h-3 w-12 bg-surface rounded" />
                      <div className="h-3 w-16 bg-surface rounded" />
                   </div>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-surface bg-surface/40">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className={`flex flex-col items-center justify-center ${i < 3 ? 'md:border-r md:border-slate-mid/20' : ''}`}>
                   <div className="h-10 w-24 bg-surface rounded-md mb-4" />
                   <div className="h-3 w-16 bg-slate-mid/20 rounded" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center flex flex-col items-center">
         <div className="h-[48px] w-3/4 bg-surface rounded-lg mb-4" />
         <div className="h-[48px] w-1/2 bg-surface rounded-lg mb-6" />
         <div className="h-5 w-2/3 bg-surface rounded-md mb-12" />
         
         <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-[56px] w-[200px] bg-slate-mid/20 rounded-lg" />
            <div className="h-[56px] w-[200px] bg-surface rounded-lg" />
         </div>
      </section>
    </div>
  )
}
