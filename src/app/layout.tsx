import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteConfig from "./config/site";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider"
import Footer from "./components/Footer";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <br className="bg-slate-800" />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
