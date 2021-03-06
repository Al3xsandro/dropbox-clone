import Head from 'next/head';
import App from './App';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dropbox ui</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <>
        <App />
      </>
    </div>
  )
}