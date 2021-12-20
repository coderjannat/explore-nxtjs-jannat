import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../pages/Header'
import Service from './Service'
import Train from './train'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Js | Home</title>
        <meta name='keywords' content='Next Js' />
      </Head>
      <div>
        <Header />
        <Service />
        <Train />
      </div>
    </>
  )
}
