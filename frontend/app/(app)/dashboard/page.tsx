import Link from "next/link";
import { UploadCloud, FolderOpen, History, AlertTriangle } from "lucide-react";
import { DocumentCard } from "@/components/document/document-card";

export default function DashboardPage() {
  const featuredDocs = [
    {
      id: "1",
      title: "BRUTALIST STRUCTURES IN EASTERN EUROPE",
      subject: "Architecture",
      darkCode: "ARCH-8829-X",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx9ipjlUKiVaPKoudpdJKnoR2ajngmnnLWpL3gKplXIEDzvQIVabDkDba7yot9klD6WuQ-Eit9WbeSc_J4LipZQgwUKVnPH0gbEZkJ0B_oPcgfYjCmPv6L6asjJmmf0UJeWL3Qz1I4aQkfhzwMxh4mhx6KkbocjjbmKiE14rocMDCg11nEENeKFhmm9pEa_GqjVyuw3WoUES8oYeRRx-KicGSYX3td-dTLnWox-LRzznj1-F32jD9iNtT5bI4JoQ_zO-NyveVvY-9D",
      downloads: 4200,
      format: "PDF",
      size: "12.4MB"
    },
    {
      id: "2",
      title: "KINETIC ENERGY SYSTEMS VOL. IV",
      subject: "Engineering",
      darkCode: "ENG-1042-Y",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeTcVb1wrmbA14VfspTocOYCK3_c6WZxBzPF-7BKVImAR9Jpx7MTtuz5VbWdV56PQVzfSDUraVFzkz0sxxc9aLOpYxnFMG8gBc_xF5L5JoHtRHF0X_eyZJL_-xzwsAhvBcvSJvst0zpfhAnF5P8nqlDPC6SvYSEzNcmUnFVhjENMOxtEPwmN5s8JeAf2RNLOLHXtobEPme1R0s7awEv2xSFsM3FR_j7kXTDT6kgh4PhWyo_g3iPzUlaaCEZNZL7lKMCmzR2R8LmM34",
      downloads: 8900,
      format: "EPUB",
      size: "8.1MB"
    },
    {
      id: "3",
      title: "URBAN DENSITY AND THE VOID",
      subject: "Urban Planning",
      darkCode: "URB-5521-A",
      coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB3IxSBFPttCQxYxypP4A1rpplRLeedfoD2sDIdfDQ2khnWbpcP700fLVx_iWNhtStLVPTnvUnbe7jinRzcufIqsEyKJmHsxs6LFMdm_xVoxWvyt0EHrB4ZsPYkBf5hrGTCKoqpE2UZzskIIU0Nkub5lvnUeCFGJLROlTC8G42XlBceVG3DPfsr50mTtUNyhuwOXlPNKyflbgLE8XIoax6woStM8V4FYDb1jLNdgTU-afV6uuFJUIC1kvSnb7MuB4Ss6xLiLfKYuSR",
      downloads: 1500,
      format: "PDF",
      size: "15.2MB"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-80px)]">
      {/* Content Canvas */}
      <div className="flex-1 px-6 md:px-12 py-10 overflow-hidden w-full lg:max-w-[70vw] xl:max-w-5xl mx-auto lg:mx-0 bg-background dark:bg-surface">
        <header className="flex justify-between items-end mb-16">
          <div>
            <span className="block font-label text-[0.6875rem] uppercase tracking-wider mb-2 opacity-60">SYSTEM STATUS: AUTHORIZED</span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-[3.5rem] font-bold tracking-tighter leading-[1.0] uppercase">
              Good morning, Shamil
            </h1>
          </div>
          <div className="hidden sm:block w-20 h-20 border border-on-background hard-shadow bg-surface-container overflow-hidden dark:border-2 dark:border-primary shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhZYLXQvH9qbk-vblyRtD7YGJLigwBCxwuawSYxetqPMT8dC6WEE5zFfxZku0QGsEllmG_lIUNOquDosnwPv2eJzAxbpbxFr2652akhhm6-a1tzoAs7frOwQ0XcGlr1px-u1mcH2tr9vAvAU3i8czubNtR1zUQSk8ohnRLi-WVSUq6BYXYcWo2K2hsEHuJsWJ7Oox0YVwbKxAuqjnyqeGkO1G25rd-e2TZ-xpdBfZLGAslvfpLeMgPAgm7KZ3NYRXBXlngm1bruXNl" 
              alt="Avatar" 
              className="w-full h-full object-cover grayscale contrast-125" 
            />
          </div>
        </header>

        {/* Quick Actions Bento */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/upload" className="border border-on-background dark:border-outline-variant p-6 hard-shadow hard-shadow-hover transition-all bg-background dark:bg-surface-container cursor-pointer group hover:bg-on-background hover:text-background dark:hover:bg-primary dark:hover:text-on-primary">
            <UploadCloud className="w-8 h-8 md:w-10 md:h-10 mb-4" />
            <h3 className="text-base font-bold uppercase mb-2 font-headline">Upload document</h3>
            <p className="text-sm leading-relaxed opacity-60 font-body">Add new architectural data or research papers to the master archive.</p>
          </Link>
          <Link href="/browse" className="border border-on-background dark:border-outline-variant p-6 hard-shadow hard-shadow-hover transition-all bg-on-background text-background dark:bg-surface-container dark:text-on-background cursor-pointer group hover:bg-background hover:text-on-background dark:hover:bg-primary dark:hover:text-on-primary">
            <FolderOpen className="w-8 h-8 md:w-10 md:h-10 mb-4" />
            <h3 className="text-base font-bold uppercase mb-2 font-headline">Browse library</h3>
            <p className="text-sm leading-relaxed opacity-80 font-body">Navigate the full SYNAPS collection with advanced filtering.</p>
          </Link>
          <Link href="/my-library" className="border border-on-background dark:border-outline-variant p-6 hard-shadow hard-shadow-hover transition-all bg-background dark:bg-surface-container cursor-pointer group hover:bg-on-background hover:text-background dark:hover:bg-primary dark:hover:text-on-primary">
            <History className="w-8 h-8 md:w-10 md:h-10 mb-4" />
            <h3 className="text-base font-bold uppercase mb-2 font-headline">My uploads</h3>
            <p className="text-sm leading-relaxed opacity-60 font-body">Manage your historical contributions and track their verification status.</p>
          </Link>
        </section>

        {/* Continue Reading Scroll Row */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[1.75rem] font-semibold tracking-[-0.02em] uppercase font-headline">Continue reading</h2>
            <Link href="/my-library" className="text-[0.6875rem] font-bold uppercase hover:underline font-label hover:italic">View All</Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 -mx-2 px-2 scrollbar-none">
             {featuredDocs.map((doc) => (
               <div key={doc.id} className="min-w-[300px] md:min-w-[350px] shrink-0">
                  <DocumentCard {...doc} />
               </div>
             ))}
          </div>
        </section>

        {/* Recent Uploads List */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[1.75rem] font-semibold tracking-[-0.02em] uppercase font-headline">My recent uploads</h2>
            <button className="border border-on-background px-4 py-1 text-[0.6875rem] font-bold uppercase hover:bg-on-background hover:text-background dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-on-primary transition-colors font-label">EXPORT LOGS</button>
          </div>
          
          <div className="space-y-0 border-t border-on-background dark:border-primary font-label">
            
            {/* Item 1 */}
            <div className="flex items-center gap-6 py-4 border-b border-on-background dark:border-outline-variant hover:bg-on-background/5 dark:hover:bg-surface-container-highest transition-colors px-2">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-on-background dark:border-outline-variant diagonal-hatch shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h5 className="text-[0.875rem] font-bold uppercase truncate">MANIFESTO_FOR_THE_NEW_ARCHIVE.PDF</h5>
                <span className="text-[0.6875rem] opacity-60 uppercase">PDF • 1.2 MB</span>
              </div>
              <div className="hidden md:flex gap-12 text-[0.6875rem] font-medium uppercase min-w-[200px]">
                <div className="flex flex-col">
                  <span className="opacity-40">DATE</span>
                  <span>MAY 28, 2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="opacity-40">METRICS</span>
                  <span>1.2K VIEWS</span>
                </div>
              </div>
              <span className="bg-on-background text-background dark:bg-primary dark:text-on-primary text-[0.6875rem] font-bold uppercase px-3 py-1 shrink-0">APPROVED</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-6 py-4 border-b border-on-background dark:border-outline-variant hover:bg-on-background/5 dark:hover:bg-surface-container-highest transition-colors px-2">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-on-background dark:border-outline-variant bg-surface-container shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCVNIsAy4jneeHe1BfHSUUgASe2ulh1yKaS2vit6D7gWI6_atDzasUYzpEzrrtayriecqOKOVP9elt43vZ5vAD7tnY6zVUTSQP6HUb_vIlA8Z9CRFqGPmGn4RKQ70Niz6SNXBoUaCBFc4oMMJa38vezjhmrUNL60P6PjYlouySZnffwN-H_7BMhboSE1__yjNwFSt5igrporO0Kj0kHFbVN5DqaxmWo7HKPjrn2jJFiSSfXutpYx6c7SSOqyM-WJdAMF7RhW7nQQpK" alt="thumb" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-[0.875rem] font-bold uppercase truncate">SYNAPTIC_MAPPING_PHASE_01.CAD</h5>
                <span className="text-[0.6875rem] opacity-60 uppercase">DWG • 45.8 MB</span>
              </div>
              <div className="hidden md:flex gap-12 text-[0.6875rem] font-medium uppercase min-w-[200px]">
                <div className="flex flex-col">
                  <span className="opacity-40">DATE</span>
                  <span>MAY 25, 2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="opacity-40">METRICS</span>
                  <span>188 VIEWS</span>
                </div>
              </div>
              <span className="border border-on-background dark:border-outline-variant text-[0.6875rem] font-bold uppercase px-3 py-1 shrink-0">PENDING</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-6 py-4 border-b border-on-background dark:border-outline-variant hover:bg-on-background/5 dark:hover:bg-surface-container-highest transition-colors px-2 opacity-50">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-on-background dark:border-none bg-red-600 shrink-0 flex items-center justify-center text-white">
                <AlertTriangle size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-[0.875rem] font-bold uppercase line-through truncate">EXPERIMENTAL_DATA_LEAK.ZIP</h5>
                <span className="text-[0.6875rem] opacity-60 uppercase">ZIP • 2GB</span>
              </div>
              <div className="hidden md:flex gap-12 text-[0.6875rem] font-medium uppercase min-w-[200px]">
                <div className="flex flex-col">
                  <span className="opacity-40">DATE</span>
                  <span>MAY 22, 2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="opacity-40">METRICS</span>
                  <span>0 VIEWS</span>
                </div>
              </div>
              <span className="bg-red-600 text-white text-[0.6875rem] font-bold uppercase px-3 py-1 shrink-0">REJECTED</span>
            </div>

          </div>
        </section>
      </div>

      {/* Right Sidebar: Notifications */}
      <aside className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-on-background dark:border-primary bg-surface dark:bg-surface-container-low p-8 grow">
        <h3 className="text-[1rem] font-bold uppercase mb-8 border-b border-on-background dark:border-outline-variant pb-4 font-headline">Activity Log</h3>
        
        <div className="space-y-8 font-label">
          {/* Timeline Item 1 */}
          <div className="relative pl-6 border-l border-on-background dark:border-primary">
            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-on-background dark:bg-primary"></div>
            <span className="block text-[0.6875rem] font-bold uppercase opacity-60 mb-1">09:42 AM</span>
            <p className="text-[0.875rem] leading-tight">Document <span className="font-bold">ARCH-772</span> was verified by Curator J. Arcas.</p>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative pl-6 border-l border-on-background dark:border-primary">
            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-on-background dark:bg-primary"></div>
            <span className="block text-[0.6875rem] font-bold uppercase opacity-60 mb-1">YESTERDAY</span>
            <p className="text-[0.875rem] leading-tight">New system-wide security patch deployed. <Link href="#" className="underline font-bold dark:hover:text-primary transition-colors">Read details</Link>.</p>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative pl-6 border-l border-on-background/20 dark:border-outline-variant">
            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-on-background/20 dark:bg-outline-variant"></div>
            <span className="block text-[0.6875rem] font-bold uppercase opacity-60 mb-1">MAY 26</span>
            <p className="text-[0.875rem] leading-tight opacity-60">Your contribution <span className="font-bold">"Eastern Bloc Typology"</span> reached 1k downloads.</p>
          </div>
          
          {/* Timeline Item 4 */}
          <div className="relative pl-6 border-l border-on-background/20 dark:border-outline-variant">
            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-on-background/20 dark:bg-outline-variant"></div>
            <span className="block text-[0.6875rem] font-bold uppercase opacity-60 mb-1">MAY 24</span>
            <p className="text-[0.875rem] leading-tight opacity-60">Password rotation required in <span className="font-bold">3 days</span>.</p>
          </div>
        </div>
        
        <div className="mt-20 border border-on-background dark:border-outline-variant p-6 bg-background dark:bg-surface-container font-headline">
          <h4 className="text-[0.875rem] font-bold uppercase mb-2">Storage Usage</h4>
          <div className="h-4 border border-on-background dark:border-outline-variant w-full mb-4 relative">
            <div className="h-full bg-on-background dark:bg-primary w-[72%]"></div>
          </div>
          <div className="flex justify-between text-[0.6875rem] font-bold uppercase font-label">
            <span>14.2 GB USED</span>
            <span>20 GB TOTAL</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
