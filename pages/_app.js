import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from 'next/head';

import '../styles/globals.css';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio de Ilhame Sadik - Software Engineer" />
        <title>Ilhame SADIK | Software Engineer</title>
        <link rel="icon" type="image/png" href="/logoDK.png" />
      </Head>

      <Layout>
        <AnimatePresence initial={false}>
          <motion.div key={router.route} className="bg-primary/60 h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
