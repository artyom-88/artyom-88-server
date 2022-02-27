import { RecoilRoot } from 'recoil';
import 'src/assets/styles.scss';
import Layout from 'src/common/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
