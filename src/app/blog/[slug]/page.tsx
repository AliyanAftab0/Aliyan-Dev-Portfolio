import { components } from "../../components/CustomComponent";
import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image?: any;
  content: any;
  author: {
    bio: string;
    image: any;
    name: string;
  };
}

export const metadata = {
  title: 'Blogs - AliyanDev',
  description: 'Explore our latest blogs on technology, programming, and design. Stay updated with insightful content from our team.',
};

export const revalidate = 10;

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
    author->{bio,image,name}
  }[0]`;

  const post: BlogPost = await client.fetch(query);

  return (
    <article className="container m-auto mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(post.image).toString()}
        width={500}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="bg-slate-100 dark:bg-slate-900 rounded-lg px-2 p-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image).toString()}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>  
        </div>
      </section>

      {/* Main Body of Blog */}
      <section
        className="text-xl leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white"
      >
        <PortableText value={post.content} components={components} />
      </section>
    </article>
  );
}
