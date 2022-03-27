import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import 'src/assets/styles.scss';
import Layout from 'src/common/components/Layout';
import packageJson from '../../package.json';
import favicon from '../../public/favicon.ico';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name='build version' content={packageJson.version} />
        <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
