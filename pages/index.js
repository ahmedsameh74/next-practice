import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name='keywords' content='blogs'/>
    </Head>
    <div className={styles.home}>
      <h2>Welcome to gaming vipes</h2>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam recusandae error atque aliquam tempora numquam laboriosam corrupti ut fugit reiciendis quaerat, inventore velit vitae asperiores enim rem odio vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a inventore iste nihil maiores unde deserunt, temporibus possimus blanditiis minima vel. Ratione natus sapiente sequi enim ea voluptas, illum adipisci?</p>
      </div>
    </div>
    </>
  )
}
