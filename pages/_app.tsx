import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
   const name = 'Marina Ananias';

  return (
    <>
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content={name} />
        <meta name="keywords" content="Music Technology, Computer Science, Web Development, Intern, Software Engineer, Music, Neuroscience" />
        <meta name="author" content= {name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}