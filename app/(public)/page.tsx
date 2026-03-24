import Link from "next/link"
import type { Metadata } from "next"
import DocumentCard from "@/components/document/DocumentCard"
import SubjectChip from "@/components/ui/SubjectChip"
import type { DocumentSummary, Subject } from "@/lib/types"
import type { LandingStat } from "@/lib/mock-data"

// ── Later: replace these with real API calls to Express ──────
import {
  MOCK_SUBJECTS,
  MOCK_FEATURED_DOCUMENTS,
  MOCK_RECENT_DOCUMENTS,
  MOCK_LANDING_STATS,
} from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Synaps — Open Knowledge Exchange",
  description:
    "Discover, share, and download research papers, textbooks, notes, and PYQs. Free and open for everyone.",
}

export default function LandingPage() {
  const subjects: Subject[] = MOCK_SUBJECTS
  const featured: DocumentSummary[] = MOCK_FEATURED_DOCUMENTS
  const recent: DocumentSummary[] = MOCK_RECENT_DOCUMENTS
  const stats: LandingStat[] = MOCK_LANDING_STATS

  return (
    <main className="synaps-page-enter">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="synaps-container py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto">

          {/* Eyebrow */}
          <span className="synaps-tag mb-6 inline-block">
            Open · Free · Community-driven
          </span>

          {/* Headline */}
          <h1
            className="text-[var(--color-text-primary)] mb-4"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tighter)",
              fontWeight: 800,
            }}
          >
            Knowledge that
            <br />
            <span
              className="relative inline-block"
              style={{ fontStyle: "italic" }}
            >
              flows freely.
              {/* Underline accent */}
              <span
                className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--color-text-primary)]"
                aria-hidden
              />
            </span>
          </h1>

          <p
            className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto"
            style={{
              fontSize: "var(--text-md)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Upload and discover research papers, textbooks, handwritten notes,
            and previous year question papers — all in one place.
          </p>

          {/* Search bar */}
          <form
            action="/search"
            className="flex gap-2 max-w-lg mx-auto"
          >
            <input
              type="text"
              name="q"
              placeholder="Search for textbooks, notes, PYQs..."
              className="synaps-input flex-1 text-sm"
              style={{ height: "44px" }}
            />
            <button
              type="submit"
              className="synaps-btn synaps-btn-primary px-5 text-xs"
              style={{ height: "44px" }}
            >
              Search
            </button>
          </form>

          {/* Search hints */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {["CLRS", "KTU PYQ", "H.C. Verma", "Deep Learning"].map((hint) => (
              <Link
                key={hint}
                href={`/search?q=${encodeURIComponent(hint)}`}
                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline underline-offset-2 transition-colors"
              >
                {hint}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects strip ─────────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div className="synaps-container py-6">
          <p
            className="text-xs font-semibold text-[var(--color-text-tertiary)] mb-4 tracking-[var(--tracking-widest)] uppercase"
          >
            Browse by subject
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <SubjectChip key={subject.id} subject={subject} />
            ))}
            <Link
              href="/browse"
              className="synaps-tag hover:bg-[var(--color-text-primary)] hover:text-[var(--color-text-inverse)] hover:border-[var(--color-text-primary)] transition-all duration-[var(--duration-fast)] cursor-pointer"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured documents ─────────────────────────────── */}
      <section className="synaps-container py-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2
            className="text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Featured
          </h2>
          <Link
            href="/browse"
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline underline-offset-2 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="synaps-container">
        <hr className="border-[var(--color-border)]" />
      </div>

      {/* ── Recent uploads ─────────────────────────────────── */}
      <section className="synaps-container py-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2
            className="text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Recently uploaded
          </h2>
          <Link
            href="/browse?sort=newest"
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline underline-offset-2 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {recent.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div className="synaps-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[var(--color-border)]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center md:px-8"
              >
                <span
                  className="text-[var(--color-text-primary)] font-black tabular-nums"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                    letterSpacing: "var(--tracking-tighter)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs text-[var(--color-text-tertiary)] mt-1.5 font-medium tracking-[var(--tracking-wide)] uppercase"
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="synaps-container py-20 md:py-28 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-[var(--color-text-primary)] mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "var(--tracking-tighter)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            Share what you know.
            <br />
            Learn what you don't.
          </h2>
          <p
            className="text-[var(--color-text-secondary)] mb-8"
            style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)" }}
          >
            Join the community. Upload your notes, papers, and PYQs — help
            someone pass their exam or find a breakthrough.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login"
              className="synaps-btn synaps-btn-primary px-8 py-3 text-sm justify-center"
            >
              Get started — it's free
            </Link>
            <Link
              href="/browse"
              className="synaps-btn synaps-btn-ghost px-8 py-3 text-sm justify-center"
            >
              Browse library
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}