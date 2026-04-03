import { DocumentGrid } from "@/components/document/document-grid";
import { DocumentCard } from "@/components/document/document-card";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const featuredDocs = [
    {
      id: "1",
      title: "Introduction to Automata and Languages",
      darkTitle: "Neural Lattice Encryption Protocols",
      subject: "Computational Theory",
      darkCode: "001-ARCH-2024",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuABbqm_jeb6ojIHJCheKb8eYF6-PInBOJ_2Sg_TzgJl5za6WpvcAtENpIwRdRQ9OLbJjQbKVi8XogWyRZdn877aEAIKb_tYyDT2l1QMZhpztXaaR7gses983KBwUAhmeOtkaueYdFLWUVBY6-yucAspPfYXuLkgv70WdsB5OEKlzsOYkh9MLqQgezm9yjNk4fxtKrTKi7fQbZXQOdjAH7oOcCTdRnDAp3nZfC6peP4exsTankRq7LO8fIJbT3Aq5NhDIXHyIyqdgKh7",
      darkImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwivS0McvXC08Wb6AjCdnUnXJHu4IA09ReIdSbDh7983k0iqrVZ7R2ppkANQsIfAo2MtwYqlBPUbhw9ZbAT1c3zGTLrJeBS_Qzk_EMPtN5xbX6_QvDcD5ZNIlu5EIDrCyVx8EZONkPuuWdGI7zxHcesrsRda1b7XS_cpINGd9fSZMXGpk3k4XC2imN6JCfyPtC1mTLWna-FzGLya5LW5S9UPsbMg2XEO36duPt-KdFcDMNKWu_GzBFfBIhZZMGxIgs_ehLuOaHHRG",
      downloads: 4200,
      format: "PDF",
      darkFormat: "Technical",
      size: "12MB",
      tag: "PREMIUM"
    },
    {
      id: "2",
      title: "Backpropagation in Multilayer Perceptrons",
      darkTitle: "Synthetic Mycelium As Structural Core",
      subject: "Neural Networks",
      darkCode: "042-BIO-2024",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tQ9r55K4y2pihl0pC7WvpvtyLHaZQBPz0j-xs5QMlD1zFW5_KXlJikJSMolkotNn7DIIZ7itFwtX4pO46bKSztVS5opVlmGP_Zj5pswp5Mcw_el-w4oQILoqBt0xtR4gRLMGjyLbTvZsaTyPYyJX4CTJwbPxeqxklCVe_LbdBVeOGqZkGTOVXM4F6DnOXptCCIAmYDrk0X7uR3-aBstFlhILbbTQa7ZnVX4xi80JB9c9nFwMjQX5y529mP3NvGcwpXZCvKbvrqq2",
      darkImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4rSnCerBNYolKUBD1glN7fke8YFnbJ4jbgj8DnuhE4HCgqfR9YN9KbYhpiaLnfFgp_Yw46tkdKFDxPTnRh4a9NNO0TE0098LPj8LwNy2hXSRgpDsw_qEL7aMv300588RDU90v1QgE9Ee_UBdShT69BoYeA3A7Dozema-SR1UoY09uUxrXpLjIhtMpclLiIMjOLQjAKhZ3pXqyegyPziZvZnDnTwBH1kUxMLFfBT05zuGiHFfBQe5QuV5UYWm6rysy6gxcYkWLrid6",
      downloads: 8900,
      format: "EPUB",
      darkFormat: "Case Study",
      size: "4MB"
    },
    {
      id: "3",
      title: "Vector Analysis and Tensor Field Theory",
      darkTitle: "Low-Earth Orbit Logistics Management",
      subject: "Advanced Calculus",
      darkCode: "109-SPA-2024",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWKhkJYKWf5Eq8oi83d7re0Wyx9_YXhvqG6YyYu18nGfaqD5QCltRBAShp43ZKhO-UWiBrh8Uj-xRtdydjA_4b3KfXEmiK9dcK3F6h8Pdg0YJtmbkRVUQ8POqMa-CSR5KGHbKmTUl5jK3Qwr4YP-_GwGnsGCae6W6KC1uK_Jhs3HXhS3XgI9z_TdYjsxMuljXs3GGvFqGHEOmQlabx_-RXQmuWahNHoWR-CIT-CdPzHByyRkapeUS-3MgOT1dJnAoZUeI1iVsXVjuH",
      darkImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeauGOUhnrPHK7Gq3LZKVIA9TYxGArDIEu2Pli3VShqRba6yn_xBTsTw1Rk9ugzDmsA34qH7cNMP__YfuEWvc8BIu1MAbVG_k5b3B_6mQlFqvsHeVvaZM0BHAWc52S-39ydPMDwT7ZTc3BauFtKfKi0xEnLTNc6FY7iD8nzACyUF-6MyXPGf8g68cSP8LdjAIdt9iejdpAnFPLqVB5WYl9qCfrOE3vIkyriYz-489yVYOFPCh7wrtUgmfyOsjypRe5cOFVaEDyq4j0",
      downloads: 1500,
      format: "PDF",
      darkFormat: "Whitepaper",
      size: "32MB",
      tag: "ARCHIVED"
    },
    {
      id: "4",
      title: "The Schrödinger Equation: A Unified Approach",
      darkTitle: "High-Density Modular Urbanism v2.0",
      subject: "Quantum Physics",
      darkCode: "556-URB-2024",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuALz-iEQpA35nJrHy6eXftrn82RFrqvz3NdFSCt9DibBnBcbnjVqoXLv7WYrZMleM7dxu8TlfB93ouxh5v6Mb34oBKaxhNsFh-0G9Z_UKPPQH1cjtap9ZJ2uXt7lfCgdwO-bnUu3B5u4ibRfpOyTGoXj9cA158soWJUKHmEY7oBbIlvxIlEWtGZOupIFD5DXUSY84av9Zu2R9W0jvWJBOwdTT66ry-wNc-UCOZnaQWC-ckcbFZkSwb7BYSvdJxapuTcvpaQ8vO5eZTM",
      darkImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdv5-XWX9oaU0IwFtsW0GUZWVlq8h3mWVSPhO8uF2HfcI7vzbM6vOse3SuFSFom9q8APU1OeNNDaLYX6e5sF5Q5aMLnxk0gRhFA7gCo9QX4cQuuU4hMPf0zfQOf7U8CTO9P6E7gRoD9i1ulaRwMF4t9qxFLmh1mkYwBwecdUMnj7Yj35JJlhsEqi5yzyWOIBW_SQJZmTBKUvQ29Anj4nfpLlpPdp_7MKQ-QH03aMRgu9Myl3tvOb7X_Tj1WV0HsMA9QGozbp56C2Rd",
      downloads: 6200,
      format: "PDF",
      darkFormat: "Blueprints",
      size: "8MB"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 xl:py-40 bg-background dark:bg-surface border-b border-on-background dark:border-none relative">
        <div className="max-w-7xl mx-auto">
          {/* Light Mode Hero Content */}
          <div className="dark:hidden">
            <span className="font-label uppercase tracking-widest text-[0.6875rem] font-medium block mb-6 text-on-background">Open · Free · Community-driven</span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              The archival system <br/>
              <span className="italic underline decoration-2 underline-offset-8">for modern study.</span>
            </h1>
            <p className="font-body text-xl md:text-2xl leading-relaxed max-w-2xl mb-12 opacity-80">
              A decentralized, high-fidelity repository for academic papers, lecture notes, and engineering problem sets. Built by students, for the future.
            </p>
            
            <div className="max-w-2xl">
              <div className="relative flex items-center border border-on-background bg-background hard-shadow mb-4">
                <Search className="mx-4 text-on-background opacity-50" />
                <input 
                  type="text" 
                  placeholder="Search 450,000+ documents..." 
                  className="w-full py-4 pr-4 bg-transparent border-none focus:ring-0 font-medium text-lg placeholder:text-on-background/30 outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-6">
                <span className="font-label uppercase tracking-widest text-[0.6875rem] font-medium opacity-60">Trending:</span>
                {["CLRS", "KTU PYQ", "H.C. Verma", "Deep Learning"].map(tag => (
                  <button key={tag} className="font-label uppercase tracking-widest text-[0.6875rem] font-medium border border-on-background px-2 py-1 hover:bg-on-background hover:text-background transition-colors">{tag}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Dark Mode Hero Content */}
          <div className="hidden dark:block">
            <div className="mb-6 inline-block">
              <span className="font-label text-xs uppercase tracking-widest text-primary border border-outline-variant px-3 py-1">[ OPEN · FREE · COMMUNITY-DRIVEN ]</span>
            </div>
            <h1 className="font-headline text-6xl md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] uppercase mb-12">
              Universal <br/><span className="italic underline decoration-4">Intelligence</span> Archival.
            </h1>
            <p className="font-body text-secondary max-w-2xl text-xl mb-12 uppercase tracking-tight">
              A decentralized repository for high-fidelity technical documentation, research papers, and industrial blueprints.
            </p>
            
            <div className="max-w-3xl">
              <div className="flex flex-col md:flex-row gap-0 group shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex-grow relative border-2 border-primary bg-surface-container-low px-4 flex items-center">
                  <Search className="text-secondary mr-3" />
                  <input 
                    type="text" 
                    placeholder="QUERY ARCHIVE..." 
                    className="w-full bg-transparent border-none focus:ring-0 text-primary font-label uppercase py-4 outline-none"
                  />
                </div>
                <button className="bg-primary text-on-primary font-label font-bold uppercase px-8 py-4 hover:bg-surface-bright transition-none">Execute Search</button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                <span>Recent:</span>
                {["Quantum-Cores", "Bio-Mimicry", "Orbital-Logistics"].map(tag => (
                  <Link href={`/search?q=${tag}`} key={tag} className="underline hover:text-primary transition-colors">{tag}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Strip */}
      <section className="bg-on-background dark:bg-surface-container-low text-background dark:text-on-background py-8 dark:py-12 px-6 md:px-12 border-b border-on-background/10 dark:border-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          <span className="font-label text-xs md:text-[0.6875rem] font-bold dark:font-black dark:-rotate-90 uppercase tracking-widest dark:tracking-tighter whitespace-nowrap">Browse by subject</span>
          
          <div className="flex-grow flex flex-wrap gap-3 dark:gap-2">
            {/* Light Mode Pills */}
            <div className="flex flex-wrap gap-3 dark:hidden">
              {[{n: "Mathematics", c: "1.2k"}, {n: "Physics", c: "840"}, {n: "Comp Sci", c: "2.4k"}, {n: "Mechanics", c: "310"}, {n: "Biology", c: "150"}].map(sub => (
                <button key={sub.n} className="border border-background px-3 py-1 text-[0.875rem] font-medium flex items-center gap-2 hover:bg-background hover:text-on-background transition-colors">
                  {sub.n} <span className="opacity-50 text-xs">{sub.c}</span>
                </button>
              ))}
              <Link href="/browse" className="bg-background text-on-background px-3 py-1 text-[0.875rem] font-bold hover:invert transition-all">VIEW ALL</Link>
            </div>

            {/* Dark Mode Pills */}
            <div className="hidden dark:flex flex-wrap gap-2">
              {["Architecture", "Biology", "Computing", "Design Systems", "Engineering", "Future Studies", "Geopolitics", "History"].map(sub => (
                <Link href="/browse" key={sub} className="px-4 py-2 border border-outline-variant hover:border-primary hover:bg-primary hover:text-on-primary font-label text-[10px] sm:text-xs uppercase transition-none">
                  {sub}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="py-24 px-6 md:px-12 border-b border-on-background dark:border-none bg-background dark:bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 dark:mb-16">
            <h2 className="font-headline text-4xl dark:text-5xl font-bold tracking-tighter uppercase dark:hidden">Featured Library</h2>
            <h2 className="hidden dark:block font-headline text-5xl font-bold tracking-tighter uppercase">Recent Deposits</h2>
            <Link href="/browse" className="font-label text-[0.6875rem] dark:text-sm font-medium uppercase tracking-widest hover:underline hover:italic dark:underline dark:underline-offset-4">
              <span className="dark:hidden">See all collections</span>
              <span className="hidden dark:block">View full index</span>
            </Link>
          </div>
          
          <DocumentGrid>
            {featuredDocs.map(doc => (
              <div key={doc.id} className="relative">
                {/* We render the document card twice visually via css logic or we render conditional data to the component itself. */}
                {/* To avoid layout shifts, let's render the singular smart component. It expects conditional props, so we can't easily pass different IDs without a wrapper. */}
                <div className="dark:hidden h-full">
                   <DocumentCard {...doc} />
                </div>
                <div className="hidden dark:block h-full">
                  <DocumentCard 
                    {...doc} 
                    title={doc.darkTitle}
                    coverImage={doc.darkImage}
                    format={doc.darkFormat}
                  />
                </div>
              </div>
            ))}
          </DocumentGrid>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-on-background dark:border-y-2 dark:border-primary bg-background dark:bg-surface px-6 md:px-12 py-0 dark:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 dark:divide-x-2 dark:divide-outline-variant">
            {[
              { val: "450K", dval: "1.2M+", lbl: "Documents", dlbl: "Total Archives" },
              { val: "12M", dval: "85.4K", lbl: "Downloads", dlbl: "Daily Queries" },
              { val: "85K", dval: "12,042", lbl: "Active Members", dlbl: "Active Nodes" },
              { val: "32", dval: "99.98%", lbl: "Key Subjects", dlbl: "Uptime Index" }
            ].map((stat, i) => (
              <div key={i} className={`p-8 md:p-12 dark:p-0 dark:px-8 text-center md:text-left ${i !== 3 && 'border-r border-on-background dark:border-none'} ${i > 1 && 'border-t border-on-background md:border-t-0 dark:border-none'}`}>
                 <div className="dark:hidden">
                    <span className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter block mb-2">{stat.val}</span>
                    <span className="font-label uppercase tracking-widest text-[0.6875rem] font-medium opacity-60">{stat.lbl}</span>
                 </div>
                 <div className="hidden dark:block">
                     <span className="font-label text-xs uppercase text-secondary mb-2 block">{stat.dlbl}</span>
                     <span className="font-headline text-4xl font-bold text-primary block">{stat.dval}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 xl:py-40 text-center relative overflow-hidden bg-background dark:bg-surface">
        <div className="absolute inset-0 bg-surface-container-low opacity-50 -z-10 hidden dark:block"></div>
        <div className="max-w-5xl mx-auto">
          {/* Light CTA */}
          <div className="dark:hidden">
            <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[1.0]">
              Share what you know.<br/>
              Learn what you don't.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/login" className="font-label bg-on-background text-background px-10 py-5 text-base md:text-lg font-bold hard-shadow hard-shadow-hover transition-all tracking-widest uppercase">GET STARTED FOR FREE</Link>
              <Link href="/browse" className="font-label border border-on-background px-10 py-5 text-base md:text-lg font-bold hard-shadow hard-shadow-hover transition-all tracking-widest uppercase bg-background">BROWSE THE LIBRARY</Link>
            </div>
          </div>

          {/* Dark CTA */}
          <div className="hidden dark:block">
             <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                Share what you know, preserve the <span className="italic">Future</span>.
             </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 uppercase tracking-wide">
                The Synaps archival system is only as strong as its contributors. Upload your research, documentation, or technical assets today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/upload" className="bg-primary text-on-primary font-label font-bold uppercase px-12 py-5 shadow-[6px_6px_0px_0px_rgba(198,199,197,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-none">Start Uploading</Link>
              <Link href="/about" className="border-2 border-primary text-primary font-label font-bold uppercase px-12 py-5 hover:bg-primary hover:text-on-primary transition-none">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}