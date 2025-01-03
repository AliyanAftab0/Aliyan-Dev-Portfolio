import React from "react"; 
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import SampleProjects from "../config/SampleProjects";

interface ProjectType {
  slug: string; 
  title: string;
  description: string; 
  imageUrl?: string;
  liveUrl?: string; 
}

const projects: ProjectType[] = SampleProjects;

const ProjectList = () => {
  return (
    
    <div className="container text-main mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: ProjectType, index: number) =>  (
          <div
            key={index}
            className= "shadow-lg rounded-lg border-2 dark:shadow-slate-900 overflow-hidden"
          >
            <Image
              className="w-full h-64 object-fill object-top"
              width={300}
              height={300}
              src={project.imageUrl ? project.imageUrl : "/default-image.jpg"}
              alt={project.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <Link
                href={`${project.liveUrl}`}
                target="_blank"
                className={buttonVariants({ variant:"default" })}
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Projects - AliyanDev',
  description: 'Explore our projects ranging from web apps to utilities. Get insights on the latest technologies used and see the final deployed versions.',
}

export default ProjectList;