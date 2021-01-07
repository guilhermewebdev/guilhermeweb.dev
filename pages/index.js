import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export const config = { amp: 'hybrid' }

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        Fala meus caros
      
      </main>
      <Footer/>
    </>
  )
}
