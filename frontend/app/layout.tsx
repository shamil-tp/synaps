import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// For Geist we'll import as a local fallback if needed, or simply use Google fonts if available
// Actually Next.js 14 doesn't have Geist in Google fonts sometimes so I'll put a Google font link in layout
export const metadata = {
  title: "SYNAPS - Archival System",
  description: "Universal Intelligence Archival. A decentralized repository for high-fidelity technical documentation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary font-body">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main className="pt-16 md:pt-20 min-h-[calc(100vh-16px)]">
              {children}
            </main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}