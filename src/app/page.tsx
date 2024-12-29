"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Web Designer.", "&amp; Python Developer"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <main>
        <section className="container px-4 py-10 text-main mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              <span className="font-bold text-main flex-wrap sm:text-[3rem]">
                Welcome To <span className="text-blue-600">&lt;/&gt;</span>
                Aliyan<span className="text-blue-600">Devs</span>
              </span>
              <br />
              <span className="font-bold text-main border-b-4 border-blue-600 decoration-primary">
                <span ref={el} />
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Passionate software developer with over 1.5 years of experience in
              creating innovative solutions. Skilled in various programming
              languages and frameworks, I specialize in building robust and
              scalable applications. Explore my projects and see how I can bring
              your ideas to life!
            </p>
            <br />
            <Link
              href="/AliCV.pdf"
              target="_blank"
              className={buttonVariants({ variant: "default" })}
              download="AliCV.pdf"
            >
              Download Resume
            </Link>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              width={500}
              height={500}
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>
        <div className="border-t border-gray-300 mx-10 dark:border-gray-700 mt-8 pt-4 text-center"></div>
        <section className="text-gray-600 text-main text-xl dark:text-gray-50 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="text-4xl pb-8 mb-4 font-bold text-center">
              About Our Services
            </h2>
            <div className="flex flex-wrap justify-center -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest title-font font-medium mb-1">
                    WEB DEVELOPMENT
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                    Full-Stack Solutions
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                    Building robust, scalable, and responsive web applications
                    using modern tech stacks like React, Node.js, and more.
                  </p>
                  <a className="inline-flex items-center hover:text-indigo-700">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
