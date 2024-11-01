import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Metadata, ResolvingMetadata } from 'next'
import SampleProjects from '../../config/SampleProjects' // Import SampleProjects array
import Onthispage from '../../components/Onthispage'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = SampleProjects.find(p => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }
 
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings)

  const htmlContent = (await processor.process(project.content)).toString()

  return (
    <MaxWidthWrapper className='prose dark:prose-invert'>
      <div className='flex'>
        <div className='px-16'>
          <h1>{project.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  )
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = SampleProjects.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project not found - AliyanDev',
      description: 'Project not found on AliyanDev.',
    }
  }

  return {
    title: `${project.title} - AliyanDev`,
    description: project.description,
  }
}
