import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="https://www.avasecurity.com/hubfs/Ava%20favicon.png" />
        <title key="title">Nathan Wang&apos;s test</title>
        <meta name="description" content="Nathan Wang's test." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
