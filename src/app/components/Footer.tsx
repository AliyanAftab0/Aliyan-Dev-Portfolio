"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">AliyanDevs</h2>
            <p className="text-sm mb-4">
              AliyanDevs is your go-to resource for web development insights, tutorials, and professional services. Let’s create something amazing together.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/aliyandev/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/aliyan-aftab-b95b962b4/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://github.com/AliyanAftab0" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500">
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3 mx-2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Blogs
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Karachi, Sindh, Pakistan</p>
            <p className="mb-4">Email: aliyandev0@gmail.com</p>
            <p>Phone: (+92) 03178544878</p>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} AliyanDevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
