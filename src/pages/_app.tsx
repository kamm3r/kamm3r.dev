// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppType, NextWebVitalsMetric } from 'next/dist/shared/lib/utils';
import { trpc } from '../utils/trpc';
import PlausibleProvider from 'next-plausible';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='kamm3r.dev'>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default trpc.withTRPC(MyApp);
