/* ============================================================
   SYNAPS — Shared TypeScript Types
   lib/types.ts
   ============================================================ */

export type DocumentType =
  | "research_paper"
  | "textbook"
  | "notes"
  | "pyq"
  | "journal"
  | "thesis"
  | "other"
export type DocumentFormat = 
   | "pdf"
   | "docx"
   | "exel"

export type DocumentSummary = {
   id:string,
   description: string | null,
   thumbnailUrl:string | null,
   title:string,
   status: string,
   format: DocumentFormat 
   uploadedBy: {
      id:string,
      name:string,
      avatarUrl:string | null
   }
   tags:string[],
   language:string,
   viewCount:number,
   ratingCount:number,
   uploadedAt:string,
   pageCount:number,
   downloadCount:number,
   rating:number,
   fileSizeBytes:number,
   subject:string,
   type: DocumentType,
}

export type Subject ={
   id:string,
   name:string,
   slug:string,
   documentCount:number,
   description: string,
   iconName?:string
}