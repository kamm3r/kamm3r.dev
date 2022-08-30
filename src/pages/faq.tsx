import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const Faq: React.FC = () => {
  return (
    <Layout title='FAQ'>
      <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
          FAQ
        </h1>
        <p className='text-gray-600 dark:text-gray-400 mb-16'>
          question about stuff
        </p>
        <ul>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What is your preferred programming languages?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              I&#39;m the most comfortable with TypeScript.
            </p>
          </li>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What is the framework of choice to you?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              <Link href='https://nextjs.org/'>
                <a className='text-blue-400 hover:text-blue-600'>Next.js</a>
              </Link>{' '}
              is the current favorite, but also like{' '}
              <Link href='https://astro.build/'>
                <a className='text-blue-400 hover:text-blue-600'>Astro</a>
              </Link>{' '}
              for the simplicity and performance (The best static site framework
              in my opinion).
            </p>
          </li>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What are you working on currently?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              I am trying to make physics engine with TypeScript.
            </p>
          </li>
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What IDE or code editor I use?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              I use VSCode and sometimes when I feel extra spicy, I might pull
              up NeoVim.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Faq;
