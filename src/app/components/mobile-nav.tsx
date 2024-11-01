"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      { threshold: 0.5 } // Detect section as active when 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex items-center space-y-4 sm:hidden">
      <div className="flex flex-col m-auto my-10 text-lg font-medium Aliyan-Dev">
        <button
          className={`py-3 text-lg ${
            activeSection === "home" ? "text-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("home")}
        >
          <Link href="/" scroll={false} className="hover:text-blue-600">
            Home
          </Link>
        </button>
        <button
          className={`py-3 text-lg ${
            activeSection === "about" ? "text-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("about")}
        >
          <Link href="/about" scroll={false} className="hover:text-blue-600">
            About
          </Link>
        </button>
        <button
          className={`py-3 text-lg ${
            activeSection === "projects" ? "text-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("projects")}
        >
          <Link href="/projects" scroll={false} className="hover:text-blue-600">
            Projects
          </Link>
        </button>
        <button
          className={`py-3 text-lg ${
            activeSection === "contact" ? "text-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link href="/contact" scroll={false} className="hover:text-blue-600">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
