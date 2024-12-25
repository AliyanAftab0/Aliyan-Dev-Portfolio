import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image?: any;
}

export const metadata: Metadata = {
  title: 'Blogs - AliyanDev',
  description: 'Explore our latest blogs on technology, programming, and design. Stay updated with insightful content from our team.',
};

export const revalidate = 10;

const BlogList = async () => {
  const query = `*[_type == 'post'] | order(_createdAt asc){
    summary, title, image, "slug": slug.current
  }`;

  const posts: BlogPost[] = await client.fetch(query);

  return (
      <div className="container text-main mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center my-2">Most Recent Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: BlogPost, index: number) => (
            <div
              key={index}
              className="shadow-lg rounded-lg border-2 dark:shadow-slate-900 overflow-hidden"
            >
              <Image
                className="w-full h-64 object-fill object-top"
                width={300}
                height={300}
                src={urlFor(post.image).toString()}
                alt={post.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="mb-4 line-clamp-3">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={buttonVariants({ variant: "default" })}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BlogList;
