import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import BlogPostCard from '../components/BlogPostCard';
import { Newsletter } from '../components/Newsletter';
import { trpc } from '../utils/trpc';
import { getAllPosts, Post } from '../utils/mdx';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: projectData, isLoading } = trpc.proxy.project.all.useQuery();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <Suspense fallback={null}>
      <Layout>
        <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
          <div className='flex flex-col-reverse justify-between sm:flex-row items-start w-full'>
            <div className='flex flex-col pr-8'>
              <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
                Marco Kammer
              </h1>
              <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                VP of Developer Experience at{' '}
                <span className='font-semibold'>Athlete</span>
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-16'>
                Maybe helping developers build a faster web? Maybe teaching
                about web development, and React / Next.js. fixes this
              </p>
            </div>
            <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 '>
              <Image
                alt='Marco Kammer'
                height={176}
                width={176}
                src='/profile.jpg'
                sizes='30vw'
                priority
                className='rounded-full filter grayscale'
              />
            </div>
          </div>

          <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 '>
            Projects
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projectData ? (
              projectData.map((project, i) => (
                <a key={i} href={project.link}>
                  <Image
                    className='w-full h-36 lg:h-60 object-cover rounded-xl filter grayscale hover:grayscale-0'
                    src={project.image}
                    alt={project.name}
                    priority
                    width={1280}
                    height={720}
                  />
                </a>
              ))
            ) : (
              <p>bruh you ain&#39;t got any data</p>
            )}
          </div>
          <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 mt-16'>
            Featured Posts
          </h3>
          <p className='text-base text-gray-600 dark:text-gray-400 md:text-xl tracking-normal mb-6'>
            There is not yet any real post here
          </p>
          <div className='flex gap-6 flex-col md:flex-row'>
            {posts?.map((post) => (
              <BlogPostCard
                key={post._id}
                title={post.title}
                slug={post.slug}
                // gradient='from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
                gradient='from-[#D8B4FE] to-[#818CF8]'
              />
            ))}
          </div>
          <Link href='/blog'>
            <a className='flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6'>
              Read all posts
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='h-6 w-6 ml-1'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
                />
              </svg>
            </a>
          </Link>
          {/* <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white'>
            Learn React & Next.js
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Build and deploy a modern SaaS application using the most popular
            open-source software. This course is 12 hours long and is completely
            live streamed.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1'
            className='flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6'
          >
            Watch all videos
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='h-6 w-6 ml-1'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
              />
            </svg>
          </a> */}
          <span className='h-16' />
          <Newsletter />
        </div>
      </Layout>
    </Suspense>
  );
}

export async function getStaticProps() {
  const posts: Post[] = getAllPosts()
    .slice(0, 3)
    .map((post) => post)
    .sort();

  return { props: { posts } };
}
