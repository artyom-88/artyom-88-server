import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import 'src/assets/styles.scss';
import Layout from 'src/common/components/Layout';

import packageJson from '../../package.json';
import favicon from '../../public/favicon.ico';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: { retry: 0 },
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>{pageProps.title}</title>
          <meta name='build version' content={packageJson.version} />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </StrictMode>
  );
}
