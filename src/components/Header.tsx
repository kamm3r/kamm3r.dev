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
      <a className={isActive ? 'font-bold text-lg' : 'text-lg'}>
        <span className='capsize'>{text}</span>
      </a>
    </Link>
  );
};

export default function Header() {
  const router = useRouter();
  const isActive = router.asPath === '/blog';
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className='flex flex-row justify-between max-w-7xl py-6 sm:pb-16 z-10 mx-auto'>
      <figure className='flex justify-center items-center space-x-2'>
        <Image src='/splat.svg' width={24} height={24} alt='logo' />
        <h1 className='text-xl font-bold'>Marco Kammer</h1>
      </figure>
      <MobileMenu />
      <nav className='hidden md:flex space-x-12 items-center'>
        <NavLink href='/' text='Home' />
        {/* <NavLink href='#about' text='About' />
        <NavLink href='#work' text='Projects' /> */}
        <NavLink href='/blog' text='Blog' />
        <NavLink href='/contact' text='Contact' />
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
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
}
