"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./Theme-Toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // This runs whenever the page changes
  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  // This runs on page load
  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10">
      <LoadingBar color="#6028ff" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className="text-lg font-bold Aliyan-Dev md:text-2xl">
        <Link href={"/"}>
          <span className="text-blue-600">&lt;/&gt;</span>Aliyan
          <span className="text-blue-600">Devs</span>
        </Link>
      </div>
      <div className="md:flex w-full justify-end items-center Aliyan-Dev text-lg hidden space-x-4">
        <button
          className={`hover:border-b-2 border-blue-600 ${
            activeSection === "home" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          <Link href={"/"} scroll={false}>Home</Link>
        </button>
        <button
          className={`hover:border-b-2 border-blue-600 ${
            activeSection === "about" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          <Link href={"/about"} scroll={false}>About</Link>
        </button>
        <button
          className={`hover:border-b-2 border-blue-600 ${
            activeSection === "projects" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("projects")}
        >
          <Link href={"/projects"} scroll={false}>Projects</Link>
        </button>
        <button
          className={`hover:border-b-2 border-blue-600 ${
            activeSection === "contact" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link href={"/contact"} scroll={false}>Contact</Link>
        </button>
        <ModeToggle />
      </div>
      <div className="flex items-center space-x-3 justify-center sm:hidden">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
