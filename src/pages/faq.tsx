import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const FooterLink = ({
  heading,
  linkHref,
  link,
}: {
  heading: string;
  linkHref: string;
  link: string;
}) => {
  return (
    <li>
      <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
        {heading}
      </h3>
      <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
        <Link href={linkHref}>
          <a
            className='text-blue-400 hover:text-blue-600'
            target='_blank'
            rel='noopener noreferrer'
          >
            {link}
          </a>
        </Link>
      </p>
    </li>
  );
};
const FooterItem = ({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) => {
  return (
    <li>
      <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
        {heading}
      </h3>
      <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
        {paragraph}
      </p>
    </li>
  );
};

export default function Faq() {
  return (
    <Layout title='FAQ'>
      <div className='flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
          FAQ
        </h1>
        <p className='text-gray-600 dark:text-gray-400 mb-16'>
          Some insightful question that you might want to know.
        </p>
        <ul>
          <FooterItem
            heading=' What is your preferred programming languages'
            paragraph='I&#39;m the most comfortable with TypeScript.'
          />
          <li>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 '>
              What is the framework of choice to you?
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base tracking-normal mb-6'>
              <Link href='https://nextjs.org/'>
                <a
                  className='text-blue-400 hover:text-blue-600'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Next.js
                </a>
              </Link>{' '}
              is the current favorite, but also like{' '}
              <Link href='https://astro.build/'>
                <a
                  className='text-blue-400 hover:text-blue-600'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Astro
                </a>
              </Link>{' '}
              for the simplicity and performance (The best static site framework
              in my opinion).
            </p>
          </li>
          <FooterLink
            heading='What stack do I use?'
            linkHref='https://github.com/t3-oss/create-t3-app'
            link='T3 Stack'
          />
          <FooterItem
            heading='What are you working on currently?'
            paragraph='I am trying to make physics engine with TypeScript.'
          />
          <FooterItem
            heading='What IDE or code editor I use?'
            paragraph='I use VSCode and sometimes when I feel extra spicy, I might pull up NeoVim.'
          />
        </ul>
      </div>
    </Layout>
  );
}
