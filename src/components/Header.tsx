import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? 'font-bold text-lg' : 'text-lg'
        } hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all`}
      >
        <span className='capsize'>{text}</span>
      </a>
    </Link>
  );
};

export const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className='flex flex-row justify-between items-center max-w-5xl py-6 sm:pb-16 z-10 mx-auto px-8 md:px-0'>
      <nav className='flex items-center justify-between w-full relative max-w-7xl border-gray-200 dark:border-gray-700 mx-auto text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>
        <figure className='flex justify-center items-center'>
          <Image src='/splat.svg' width={24} height={24} alt='logo' />
          <h1 className='pl-2 text-xl font-bold'>Marco Kammer</h1>
        </figure>
        <div className='ml-auto'>
          <MobileMenu />
          <NavLink href='/' text='Home' />
          <NavLink href='/blog' text='Blog' />
          <NavLink href='/faq' text='FAQ' />
          <NavLink href='/contact' text='Contact' />
        </div>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='ml-2 w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              className='w-5 h-5 text-gray-800 dark:text-gray-200'
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};
