// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '../utils/trpc';
import PlausibleProvider from 'next-plausible';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='kammer.vercel.app'>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default trpc.withTRPC(MyApp);
