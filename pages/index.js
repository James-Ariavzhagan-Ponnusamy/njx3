import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import LeftNavbar from './components/LeftNavbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorem Ipsum is simply dummy text of the printing</title>
        <meta name="description" content="Jachinn Paul" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
     
      <LeftNavbar/>

    </div>
  )
}
