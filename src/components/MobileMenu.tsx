import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
  //     isMenuOpen,
  //     {
  //       enterDelay: 20,
  //       exitDelay: 300,
  //     }
  //   );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className='visible md:hidden'
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <CgClose className='text-4xl' />
        ) : (
          <CgMenuRight className='text-4xl' />
        )}
      </button>
      {isMenuOpen && (
        <ul className='flex flex-col absolute bg-gray-100 dark:bg-gray-900'>
          <li
            className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: '150ms' }}
          >
            <Link href='/'>
              <a className='flex w-auto pb-4'>Home</a>
            </Link>
          </li>
          <li
            className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: '175ms' }}
          >
            <Link href='#about'>
              <a className='flex w-auto pb-4'>About</a>
            </Link>
          </li>
          <li
            className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: '200ms' }}
          >
            <Link href='/work'>
              <a className='flex w-auto pb-4'>Projects</a>
            </Link>
          </li>
          <li
            className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: '250ms' }}
          >
            <Link href='/blog'>
              <a className='flex w-auto pb-4'>Blog</a>
            </Link>
          </li>
          <li
            className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: '275ms' }}
          >
            <Link href='#hire'>
              <a className='flex w-auto pb-4'>Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
