"use client";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@/context/ThemeProvider";
import RightSidebar from "./components/RightSidebar";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const excludedPaths = ["/project-one"];
  const isLayoutExcluded = excludedPaths.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!isLayoutExcluded ? (
          <ThemeProvider>
            <div className="flex flex-col sm:flex-row w-full h-screen container">
              <div className="w-full sm:w-[23%]">
                <Sidebar />
              </div>
              <div className="w-full sm:w-[50%]">
                <main className="flex-1 overflow-y-auto top-10 relative sm:px-4 sm:pt-0 sm:pb-4">
                  {children}
                </main>
              </div>
              <div className="w-full sm:w-[23%]">
                <RightSidebar />
              </div>
            </div>
          </ThemeProvider>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
