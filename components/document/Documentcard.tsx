import Link from "next/link"
import type { DocumentSummary } from "@/lib/types"

type Props = {
  doc: DocumentSummary
}

const TYPE_LABELS: Record<DocumentSummary["type"], string> = {
  research_paper: "Research",
  textbook: "Textbook",
  notes: "Notes",
  pyq: "PYQ",
  journal: "Journal",
  thesis: "Thesis",
  other: "Other",
}

function formatSize(bytes: number): string {
  if (bytes < 1_000_000) return `${(bytes / 1000).toFixed(0)} KB`
  return `${(bytes / 1_000_000).toFixed(1)} MB`
}

export default function DocumentCard({ doc }: Props) {
  return (
    <Link
      href={`/doc/${doc.id}`}
      className="synaps-card synaps-card-interactive flex flex-col h-full p-4 group"
    >
      {/* Thumbnail placeholder */}
      <div className="w-full aspect-[3/4] mb-3 bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden flex items-center justify-center relative">
        {doc.thumbnailUrl ? (
          <img
            src={doc.thumbnailUrl}
            alt={doc.title}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder — brutalist page lines */
          <div className="w-full h-full p-4 flex flex-col gap-[5px] justify-center opacity-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-[2px] bg-[var(--color-text-primary)] rounded-none"
                style={{ width: `${60 + (i % 3) * 15}%` }}
              />
            ))}
          </div>
        )}

        {/* Type badge */}
        <span className="absolute top-2 left-2 synaps-tag text-[10px]">
          {TYPE_LABELS[doc.type]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-1.5">
        <h3
          className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug line-clamp-2 group-hover:underline underline-offset-2"
          style={{ letterSpacing: "var(--tracking-tight)" }}
        >
          {doc.title}
        </h3>

        <p className="text-xs text-[var(--color-text-tertiary)]">
          {doc.subject}
        </p>

        {/* Meta row */}
        <div className="mt-auto pt-2 flex items-center justify-between border-t border-[var(--color-border-subtle)]">
          <span className="text-xs text-[var(--color-text-tertiary)]">
            {doc.pageCount ? `${doc.pageCount} pp` : formatSize(doc.fileSizeBytes)}
          </span>

          <div className="flex items-center gap-2">
            {doc.rating && (
              <span className="text-xs text-[var(--color-text-tertiary)]">
                ★ {doc.rating.toFixed(1)}
              </span>
            )}
            <span className="text-xs text-[var(--color-text-tertiary)]">
              ↓ {doc.downloadCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}