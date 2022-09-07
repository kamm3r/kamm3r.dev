import { InferGetStaticPropsType } from 'next';
import { Suspense, useState } from 'react';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import { getAllPosts, Post } from '../utils/mdx';

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Layout
      title='Blog - Marco Kammer'
      description='Thoughts on the software industry, programming, tech, videography, music, and my personal life.'
    >
      <div className='flex flex-col items-start justify-center max-w-3xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Blog
        </h1>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          {`I'm going to write mostly about tech and gamedev stuff but here and odd ball might come out.
            In total, I've written ${posts?.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>
        <div className='relative w-full mb-4'>
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
          />
          <svg
            className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        {/* {!searchValue && (
          <>
            <h3 className='mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white'>
              Most Popular
            </h3>
            <BlogPost
              title='Rust Is The Future of JavaScript Infrastructure'
              excerpt='Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?'
              slug='rust'
              // views={69000}
            />
            <BlogPost
              title='Everything I Know About Style Guides, Design Systems, and Component Libraries'
              excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug='style-guides-component-libraries-design-systems'
              // views={420069}
            />
            <BlogPost
              title='Building a Design System Monorepo with Turborepo'
              excerpt='Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more.'
              slug='turborepo-design-system-monorepo'
              // views={1234}
            />
          </>
        )} */}
        <Suspense fallback={null}>
          <h3 className='mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white'>
            All Posts
          </h3>
          {!filteredBlogPosts?.length && (
            <p className='mb-4 text-gray-600 dark:text-gray-400'>
              No posts found.
            </p>
          )}
          <ul className='w-full mb-8'>
            {filteredBlogPosts?.map((post) => (
              <BlogPost
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </ul>
        </Suspense>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts: Post[] = getAllPosts()
    .slice(0, 9)
    .map((post) => post);

  return { props: { posts } };
}
