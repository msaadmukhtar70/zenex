// app/blog-details/[slug]/page.tsx
import { notFound } from 'next/navigation';
import blog_data from '@/data/blog_data';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogDetails from '@/components/details/BlogDetails';

// Import the DataType from your blog_data.ts and rename it for consistency
import type { StaticImageData } from 'next/image';

interface BlogType {
  id: number;
  slug: string;
  img: StaticImageData;
  title: string;
  des: string;
  content: {
    subtitle: string;
    intro: string;
    keyPoints: string[];
    mainContent: string;
    quote: string;
    conclusion: string;
  };
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

type Params = {
  params: { slug: string };
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blog_data.map(blog => ({ slug: blog.slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Params) {
  const blog = blog_data.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }
  
  return {
    title: `${blog.title} - Your Agency Blog`,
    description: blog.des,
  };
}

export default function BlogDetailPage({ params }: Params) {
  const blog = blog_data.find((b) => b.slug === params.slug);
  
  if (!blog) return notFound();
  
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetails blog={blog} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}