import Link from 'next/link';
import Image, { ImageProps } from 'next/future/image';

import { ProsCard, ConsCard } from './Cards';
import Step from './Step';
import ImageWithTheme from './ImageWithTheme';
import React from 'react';

const CustomLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  children,
  href,
  ...props
}) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        <a>{children}</a>
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} className='rounded-lg' {...props} />;
}

function Callout(props: any) {
  return (
    <div className='flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
  // Analytics,
  ConsCard,
  ProsCard,
  Step,
  // Unsplash,
};

export default MDXComponents;
