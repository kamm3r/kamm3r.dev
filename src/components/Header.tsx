import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
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

export const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center py-6 sm:pb-16 z-10 mx-auto px-8 md:px-0 w-full'>
      <nav className='flex items-center justify-between w-full relative max-w-7xl  dark:border-gray-700 mx-auto text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>
        <figure className='flex justify-center items-center'>
          <Image src='/splat.svg' width={24} height={24} alt='logo' />
          {/* <h1 className='pl-2 text-xl font-bold'>Marco Kammer</h1> */}
        </figure>
        <div className='-ml-[0.6rem]'>
          <MobileMenu />
          <NavLink href='/' text='Home' />
          <NavLink href='/blog' text='Blog' />
          <NavLink href='/faq' text='FAQ' />
          <Link href='mailto:kamm3r@proton.me'>
            <a className='hidden md:inline-block ml-2 px-4 py-2 bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all'>
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
