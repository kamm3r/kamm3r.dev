import { Post } from '@/utils/parseMdx';
import { format, parse } from 'date-fns';
import Image from 'next/future/image';
import { PropsWithChildren, Suspense } from 'react';
import Layout from './Layout';
import { Newsletter } from './Newsletter';

const BlogLayout: React.FC<PropsWithChildren<{ post: Post }>> = ({
  children,
  post,
}) => {
  return (
    <Layout
      title={`${post.title} – Marco Kammer`}
      description={post.excerpt}
      image={post.coverImage}
      date={new Date(post.date).toString()}
      type='article'
    >
      <article className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          {post.title}
        </h1>
        <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
          <div className='flex items-center'>
            <Image
              alt='Marco Kammer'
              height={24}
              width={24}
              sizes='20vw'
              src='/profile.jpg'
              className='rounded-full'
            />
            <p className='ml-2 text-sm text-gray-700 dark:text-gray-300'>
              {'Marco Kammer / '}
              {/* {format(parse(post.date), 'MMMM dd, yyyy')} */}
              {new Date(post.date).toLocaleDateString('en-us', {
                dateStyle: 'long',
              })}
            </p>
          </div>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0'>
            {post.readingTime}
            {` • `}
            10 views
            {/* <ViewCounter slug={post.slug} /> */}
          </p>
        </div>
        <Suspense fallback={null}>
          <div className='w-full mt-4 prose dark:prose-dark max-w-none'>
            {children}
          </div>
          <div className='mt-8'>
            <Newsletter />
          </div>
          <div className='text-sm text-gray-700 dark:text-gray-300'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href='https://github.com/kamm3r/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {'Suggest Change'}
            </a>
          </div>
        </Suspense>
      </article>
    </Layout>
  );
};
export default BlogLayout;
