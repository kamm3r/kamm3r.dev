import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className='min-h-full flex gap-8 items-center justify-center p-20 flex-wrap'>
      <Image src='/splat.svg' width={18} height={18} alt='logo' />
      {/* <Link href='/terms'>Terms</Link>
      <Link href='/privacy'>Privacy Policy</Link> */}
      <Link href='https://github.com/kamm3r'>
        <a target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </Link>
      <Link href='https://twitter.com/kamm3r_'>
        <a target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
      </Link>
      <Link href='https://www.instagram.com/kamm3r_'>
        <a target='_blank' rel='noopener noreferrer'>
          Instagram
        </a>
      </Link>
    </footer>
  );
};
