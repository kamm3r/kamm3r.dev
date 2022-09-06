import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className='min-h-full max-w-5xl px-8 md:px-0 pb-20 flex flex-wrap items-center justify-between w-full mx-auto gap-11'>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white'>
        {/* Let me know if you want to talk more */}
        Let me know if you are intrested to talk more
      </h3>
      {/* <figure className='flex items-center justify-start flex-[1_1_100%]'>
        <Image
          src='/splat.svg'
          className='w-full'
          width={24}
          height={24}
          alt='logo'
        />
        <h1 className='pl-2 text-xl font-bold'>Marco Kammer</h1>
      </figure> */}
      {/* <Link href='/terms'>Terms</Link>
      Social Media

Twitter — Instagram — 
      <Link href='/privacy'>Privacy Policy</Link> */}
      <div className='flex flex-col'>
        <h3 className=' text-xl'>Social Media</h3>
        <div className='flex  flex-wrap text-gray-600 dark:text-gray-400 space-x-1'>
          <Link href='https://github.com/kamm3r'>
            <a
              className='text-gray-600 dark:text-gray-400 text-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </Link>
          —
          <Link href='https://twitter.com/kamm3r_'>
            <a
              className='text-gray-600 dark:text-gray-400 text-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </Link>
          —
          <Link href='https://www.instagram.com/kamm3r_'>
            <a
              className='text-gray-600 dark:text-gray-400 text-xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </Link>
        </div>
      </div>
      <div className='flex flex-col'>
        <h3 className=' text-xl'>Get In Touch</h3>
        <Link href='mailto:kamm3r@proton.me'>
          <a className='text-gray-600 dark:text-gray-400 text-xl'>
            kamm3r@proton.me
          </a>
        </Link>
      </div>
      <figure className='flex'>
        <Image
          src='/splat.svg'
          className='w-full'
          width={18}
          height={18}
          alt='logo'
        />
        <h1 className='pl-2 text-base font-bold'>Marco Kammer</h1>
      </figure>
    </footer>
  );
};
