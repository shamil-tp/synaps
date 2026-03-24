import Link from "next/link"
import type { Subject } from "@/lib/types"

type Props = {
  subject: Subject
}

export default function SubjectChip({ subject }: Props) {
  return (
    <Link
      href={`/browse?subject=${subject.slug}`}
      className="group inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border-strong)] rounded-[var(--radius-md)] bg-[var(--color-surface)] hover:bg-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-inverse)] transition-all duration-[var(--duration-fast)] hover:shadow-[var(--shadow-hard-sm)] hover:-translate-x-[1px] hover:-translate-y-[1px)]"
    >
      <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-text-inverse)] transition-colors">
        {subject.name}
      </span>
      <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-inverse)] opacity-70 transition-colors">
        {subject.documentCount}
      </span>
    </Link>
  )
}