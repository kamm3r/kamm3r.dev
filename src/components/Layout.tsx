import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type MetaProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
};

const Layout: React.FC<MetaProps> = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Marco Kammer - Developer, writer, creator.',
    description: `Frontend developer, tRPC lurker and course creator.`,
    image: '/profile.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div className='bg-slate-100 text-[#140f0f] dark:bg-[#140f0f] dark:text-white'>
      <Head>
        <title>{meta.title}</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://kamm3r.dev${router.asPath}`}
        />
        <link rel='canonical' href={`https://kamm3r.dev${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Marco Kammer' />
        <meta name='description' content='Marco Kammer Porfolio' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kamm3r_' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />

        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Header />
      <main className='flex flex-col justify-center px-8 bg-slate-100 dark:bg-[#140f0f]'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
