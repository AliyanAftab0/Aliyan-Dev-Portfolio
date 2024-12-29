"use client"
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className="bg-gray-100 dark:bg-slate-950 min-h-screen flex flex-col items-center justify-center py-32">
      {/* Main About Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48">
              <Image
                src="/Logo1.png"
                alt="Profile"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-white mb-4">
              Hello! I'm Aliyan, a passionate software developer and tech
              enthusiast. I created this website to share my experiences,
              tips, and tutorials on various programming languages and
              technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-white">
              Whether you're just starting out or looking to sharpen your
              skills, you'll find a variety of resources and insights here.
              Let's explore the world of programming together!
            </p>
          </div>
        </div>
        <br />
        <div className="flex justify-center items-center mx-auto">
          <Link
            href="/AliCV.pdf"
            target="_blank"
            className={buttonVariants({ variant: "default" })}
            download="AliCV.pdf"
          >
            Download Resume
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center mt-10 w-full max-w-4xl bg-white dark:bg-slate-900 shadow-lg rounded-lg p-4">
        <nav className="flex flex-row justify-around w-full text-center text-lg text-gray-800 dark:text-white space-x-5">
          <button
            onClick={() => setActiveTab("Skills")}
            className={`font-semibold ${activeTab === "Skills" ? "border-b-2 border-blue-500" : ""
              }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("Education")}
            className={`font-semibold ${activeTab === "Education" ? "border-b-2 border-blue-500" : ""
              }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("Experience")}
            className={`font-semibold ${activeTab === "Experience" ? "border-b-2 border-blue-500" : ""
              }`}
          >
            Experience
          </button>
        </nav>
      </div>

      {/* Content Section Based on Active Tab */}
      <div className="flex justify-center mt-5 w-full max-w-4xl">
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-8 w-full text-center text-gray-800 dark:text-white">
          {activeTab === "Skills" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { name: "HTML", icon: <FaHtml5 />, hoverColor: "text-orange-500", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                  { name: "CSS", icon: <FaCss3Alt />, hoverColor: "text-blue-500", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                  { name: "JavaScript", icon: <FaJs />, hoverColor: "text-yellow-500", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                  { name: "TypeScript", icon: <SiTypescript />, hoverColor: "text-blue-600", link: "https://www.typescriptlang.org/" },
                  { name: "Node.js", icon: <FaNodeJs />, hoverColor: "text-green-500", link: "https://nodejs.org/" },
                  { name: "React", icon: <FaReact />, hoverColor: "text-blue-400", link: "https://react.dev/" },
                  { name: "Tailwind CSS", icon: <SiTailwindcss />, hoverColor: "text-teal-400", link: "https://tailwindcss.com/" },
                  { name: "Next.js", icon: <SiNextdotjs />, hoverColor: "text-gray-800 dark:text-white", link: "https://nextjs.org/" },
                  { name: "Python", icon: <FaPython />, hoverColor: "text-green-400", link: "https://www.python.org/" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`group flex flex-col items-center p-4 bg-gray-100 hover:${skill.hoverColor} dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all`}
                  >
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group-hover:no-underline"
                    >
                      <div className="text-3xl mb-2">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Education" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <p className="text-lg">
                Governor Sindh Kamran Khan Tessori’s Initiative For Artificial Intelligence, Web 3.0 & Metaverse
              </p>
            </div>
          )}
          {activeTab === "Experience" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <ul className="space-y-2">
                <li className="text-lg">Fresher with 1.5 years experience of Frontend Developer</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
