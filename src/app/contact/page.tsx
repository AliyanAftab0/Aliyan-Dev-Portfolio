"use client";
import React from "react"
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkblznr");

  if (state.succeeded) {
    return Contact();
  }

  return (
    <section className="text-gray-600 sm:mx-40 text-main body-font relative">
      <div className="container px-5 py-3 mx-auto flex flex-wrap">
        <div className="sm:mx-12 my-10 dark:text-white">
          <div className="flex flex-col gap-[1.5rem]">
            <div>
              <p className="text-blue-600 text-xl font-bold">Contact Us</p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Have a <span className="text-blue-600">Project</span> or want
                to <br />
                <span className="text-blue-600">Collaborate</span>?
              </h1>
              <p className="text-xl">
                <span>We would love to hear from you.</span>
                <span>Drop a message.</span>
              </p>
            </div>
            <div>
              <div className="border-2 text-center rounded-md dark:bg-slate-900 shadow-2xl max-sm:-ml-5 p-5 dark:shadow-slate-800 shadow-slate-400">
                <div className="border-2 mb-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-xl">Location</p>
                  <p className="text-xl">Karachi, Sindh</p>
                </div>
                <div className="border-2 mb-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-xl">Mail at</p>
                  <p className="text-xl text-blue-500">aliyandev0@gmail.com</p>
                </div>
                <div className="border-2 mb-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-xl">Follow on</p>
                  <span className="flex my-3 gap-5 items-center justify-center cursor-pointer">
                    <Link
                      href="https://www.instagram.com/aliyandev/"
                      className="text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-125 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaInstagram size={30} />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/aliyan-aftab-b95b962b4/"
                      className="text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-125 hover:text-blue-700 dark:hover:text-blue-500"
                    >
                      <FaLinkedin size={30} />
                    </Link>
                    <Link
                      href="https://github.com/AliyanAftab0"
                      className="text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-125 hover:text-blue-700 dark:hover:text-blue-500"
                    >
                      <FaGithub size={30} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mb-6 border-2 rounded-md px-3 py-3 dark:shadow-slate-800 dark:bg-slate-900 shadow-2xl shadow-slate-400">
          <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-white">
            Have questions, feedback, or want to collaborate? Drop a message
            below!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button
              type="submit"
              className={buttonVariants({ variant: "default" })}
              disabled={state.submitting}
            >
              Send Message
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-white mt-3">
            Your privacy is important to us. We won't share your details with
            anyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
