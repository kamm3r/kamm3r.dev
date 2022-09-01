// src/pages/_app.tsx
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '../utils/trpc';
import { ThemeProvider } from 'next-themes';
import PlausibleProvider from 'next-plausible';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='kammer.vercel.app'>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </PlausibleProvider>
  );
};

export default trpc.withTRPC(MyApp);
