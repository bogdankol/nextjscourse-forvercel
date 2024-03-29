import Head from 'next/head'

import Layout from '../components/layout/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp;
