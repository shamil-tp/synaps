/* ============================================================
   SYNAPS — Mock Data
   lib/mock-data.ts

   Only contains what the current page needs.
   Add more as you build each page.
   ============================================================ */

import type { DocumentSummary, Subject } from "@/lib/types"

// ── Type defined here because it's only used on the landing page
export type LandingStat = {
  label: string
  value: string
}

// ─────────────────────────────────────────────────────────────
// SUBJECTS
// Used by: landing page category strip, browse page filter bar
// ─────────────────────────────────────────────────────────────

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "sub_01",
    name: "Computer Science",
    slug: "computer-science",
    description: "Algorithms, data structures, systems, and theory.",
    documentCount: 142,
    iconName: "cpu",
  },
  {
    id: "sub_02",
    name: "Mathematics",
    slug: "mathematics",
    description: "Pure and applied mathematics.",
    documentCount: 98,
    iconName: "sigma",
  },
  {
    id: "sub_03",
    name: "Physics",
    slug: "physics",
    description: "Classical mechanics, quantum, and relativity.",
    documentCount: 76,
    iconName: "atom",
  },
  {
    id: "sub_04",
    name: "Electronics",
    slug: "electronics",
    description: "Circuits, signals, and embedded systems.",
    documentCount: 61,
    iconName: "zap",
  },
  {
    id: "sub_05",
    name: "Data Science",
    slug: "data-science",
    description: "ML, statistics, and data engineering.",
    documentCount: 54,
    iconName: "bar-chart-2",
  },
  {
    id: "sub_06",
    name: "Civil Engineering",
    slug: "civil-engineering",
    description: "Structures, materials, and surveying.",
    documentCount: 43,
    iconName: "building",
  },
  {
    id: "sub_07",
    name: "Chemistry",
    slug: "chemistry",
    description: "Organic, inorganic, and physical chemistry.",
    documentCount: 39,
    iconName: "flask-conical",
  },
  {
    id: "sub_08",
    name: "Economics",
    slug: "economics",
    description: "Micro, macro, and development economics.",
    documentCount: 35,
    iconName: "trending-up",
  },
]

// ─────────────────────────────────────────────────────────────
// DOCUMENTS
// Used by: landing page featured strip + recent uploads
// ─────────────────────────────────────────────────────────────

export const MOCK_DOCUMENTS: DocumentSummary[] = [
  {
    id: "doc_01",
    title: "Introduction to Algorithms",
    description:
      "Comprehensive coverage of algorithms and data structures used in computer science.",
    type: "textbook",
    status: "approved",
    thumbnailUrl: "/bookcover_1.jpg",
    format: "pdf",
    fileSizeBytes: 12_400_000,
    pageCount: 1292,
    uploadedBy: {
      id: "usr_01",
      name: "Arjun Menon",
      avatarUrl: null,
    },
    subject: "Computer Science",
    tags: ["algorithms", "data structures", "CLRS", "competitive programming"],
    language: "en",
    viewCount: 4821,
    downloadCount: 1340,
    rating: 4.9,
    ratingCount: 312,
    uploadedAt: "2024-11-02T08:30:00Z",
  },
  {
    id: "doc_02",
    title: "Calculus — Early Transcendentals",
    description:
      "Stewart's classic calculus textbook covering single and multivariable calculus.",
    type: "textbook",
    status: "approved",
    thumbnailUrl: "/bookcover_2.jpg",
    format: "pdf",
    fileSizeBytes: 9_800_000,
    pageCount: 1368,
    uploadedBy: {
      id: "usr_02",
      name: "Priya Nair",
      avatarUrl: null,
    },
    subject: "Mathematics",
    tags: ["calculus", "integration", "differentiation", "stewart"],
    language: "en",
    viewCount: 3902,
    downloadCount: 1102,
    rating: 4.7,
    ratingCount: 241,
    uploadedAt: "2024-10-15T10:00:00Z",
  },
  {
    id: "doc_03",
    title: "Deep Learning — Goodfellow et al.",
    description:
      "The definitive textbook on deep learning, covering neural networks, optimization, and applications.",
    type: "textbook",
    status: "approved",
    thumbnailUrl: "/bookcover_3.jpg",
    format: "pdf",
    fileSizeBytes: 7_200_000,
    pageCount: 800,
    uploadedBy: {
      id: "usr_03",
      name: "Rahul Das",
      avatarUrl: null,
    },
    subject: "Data Science",
    tags: ["deep learning", "neural networks", "AI", "ML"],
    language: "en",
    viewCount: 5610,
    downloadCount: 2201,
    rating: 4.8,
    ratingCount: 408,
    uploadedAt: "2024-09-20T14:00:00Z",
  },
  {
    id: "doc_04",
    title: "KTU CS301 — Data Structures PYQ 2019–2023",
    description:
      "Compiled previous year questions for KTU Data Structures paper with solutions.",
    type: "pyq",
    status: "approved",
    thumbnailUrl: "/bookcover_4.png",
    format: "pdf",
    fileSizeBytes: 1_400_000,
    pageCount: 64,
    uploadedBy: {
      id: "usr_04",
      name: "Shamil K",
      avatarUrl: null,
    },
    subject: "Computer Science",
    tags: ["KTU", "PYQ", "data structures", "B.Tech"],
    language: "en",
    viewCount: 8920,
    downloadCount: 4430,
    rating: 4.6,
    ratingCount: 512,
    uploadedAt: "2025-01-10T09:00:00Z",
  },
  {
    id: "doc_05",
    title: "Concepts of Physics — H.C. Verma Vol. 1",
    description:
      "Foundational physics textbook widely used for JEE and university entrance exams.",
    type: "textbook",
    status: "approved",
    thumbnailUrl: "/bookcover_5.jpg",
    format: "pdf",
    fileSizeBytes: 5_600_000,
    pageCount: 468,
    uploadedBy: {
      id: "usr_05",
      name: "Meera Krishnan",
      avatarUrl: null,
    },
    subject: "Physics",
    tags: ["physics", "JEE", "mechanics", "H.C. Verma"],
    language: "en",
    viewCount: 6720,
    downloadCount: 3180,
    rating: 4.9,
    ratingCount: 621,
    uploadedAt: "2024-12-05T11:30:00Z",
  },
  {
    id: "doc_06",
    title: "Handwritten Notes — Operating Systems",
    description:
      "Detailed handwritten notes covering process management, memory, and file systems.",
    type: "notes",
    status: "approved",
    thumbnailUrl: null,
    format: "pdf",
    fileSizeBytes: 3_200_000,
    pageCount: 110,
    uploadedBy: {
      id: "usr_06",
      name: "Aditya Sharma",
      avatarUrl: null,
    },
    subject: "Computer Science",
    tags: ["OS", "operating systems", "notes", "KTU"],
    language: "en",
    viewCount: 3410,
    downloadCount: 1890,
    rating: 4.5,
    ratingCount: 189,
    uploadedAt: "2025-02-18T07:00:00Z",
  },
]

// Convenience slices — so landing page can just import these
export const MOCK_FEATURED_DOCUMENTS: DocumentSummary[] =
  MOCK_DOCUMENTS.slice(0, 4)

export const MOCK_RECENT_DOCUMENTS: DocumentSummary[] =
  [...MOCK_DOCUMENTS].reverse().slice(0, 4)

// ─────────────────────────────────────────────────────────────
// LANDING STATS
// Used by: landing page stats bar only
// ─────────────────────────────────────────────────────────────

export const MOCK_LANDING_STATS: LandingStat[] = [
  { label: "Documents", value: "4,200+" },
  { label: "Members", value: "1,800+" },
  { label: "Downloads", value: "38,000+" },
  { label: "Subjects", value: "24" },
]