import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

interface DocumentCardProps {
  id: string;
  title: string;
  subject: string;
  coverImage: string;
  downloads: number;
  format: string;
  size: string;
  tag?: string; // e.g. "PREMIUM"
  darkCode?: string; // e.g. "001-ARCH-2024"
}

export function DocumentCard({
  id,
  title,
  subject,
  coverImage,
  downloads,
  format,
  size,
  tag,
  darkCode,
}: DocumentCardProps) {
  // Format numbers nicely like 1.2k
  const formatDownloads = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  };

  return (
    <Link href={`/doc/${id}`}>
      <div className="group border border-on-background dark:border-outline-variant bg-background dark:bg-surface-container hard-shadow hard-shadow-hover dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col h-full min-h-[400px] dark:hover:bg-surface-container-highest cursor-pointer">
        <div className="dark:p-6 pb-0 dark:pb-6 h-full flex flex-col flex-grow">
            <div className="w-full relative overflow-hidden grayscale bg-on-background/5 border-b border-on-background dark:border-none aspect-[4/5] dark:aspect-auto dark:h-32 dark:mb-4 dark:contrast-125 shrink-0">
              <div className="absolute inset-0 diagonal-hatch dark:hidden"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={coverImage} 
                alt={title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 dark:opacity-100 transition-opacity" 
              />
              {tag && (
                <div className="absolute top-4 left-4 dark:hidden">
                  <span className="bg-on-background text-background px-2 py-1 text-[0.6875rem] font-medium uppercase font-label">{tag}</span>
                </div>
              )}
            </div>

            <div className="p-6 dark:p-0 flex flex-col flex-grow pt-4 dark:pt-0 justify-between">
              <div>
                <span className="font-label uppercase tracking-widest text-[0.6875rem] dark:text-[10px] font-medium opacity-60 dark:opacity-100 dark:text-secondary mb-2 block">
                  <span className="dark:hidden">{subject}</span>
                  <span className="hidden dark:block">{darkCode || subject}</span>
                </span>
                <h3 className="font-headline font-semibold dark:font-bold text-lg dark:text-xl leading-tight mb-4 group-hover:underline dark:uppercase w-full line-clamp-3">
                  {title}
                </h3>
              </div>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-on-background/10 dark:border-none dark:pt-0 items-end">
                <div className="flex items-center justify-between w-full dark:hidden">
                  <span className="flex items-center gap-1 text-[0.6875rem] font-medium font-label">
                    <Download size={14} /> {formatDownloads(downloads)}
                  </span>
                  <span className="text-[0.6875rem] font-medium opacity-60 font-label uppercase">
                    {format} · {size}
                  </span>
                </div>

                <div className="hidden dark:flex items-end justify-between w-full">
                  <span className="text-[10px] font-label uppercase px-2 py-1 bg-surface-container-low border border-outline-variant text-on-background">
                     {format} Report
                  </span>
                  <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </Link>
  );
}
