import Head from 'next/head'
import Image from 'next/image'
import { Viaoda_Libre, Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import Link from 'next/link'

const viaoda = Viaoda_Libre({ weight: "400", subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cards = [
    {alt: 'Card 1'},
    {alt: 'Card 2'},
    {alt: 'Card 3'},
    {alt: 'Card 4'},
    {alt: 'Card 5'},
    {alt: 'Card 6'},
  ]
  return (
    <>
      <Head>
        <title>Cracking Good Gifts</title>
        <meta name="description" content="Crafting a better world one gift at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.hero}>
        <Link href="/" className={`${styles.title} ${viaoda.className}`}>
          <h1>Cracking Good Gifts</h1>
        </Link>
        <p className={styles.tagline}>Crafting a better world<br />One gift at a time</p>
        <Link href="#getInTouch" className={styles.cta}>Get in Touch</Link>
      </header>
      <main className={inter.className}>
        <section>
          <ul className={styles.gallery}>
            {cards.map((card, i) =>
              <li key={card.alt}>
                <Image
                  src={`/cards/card${i + 1}.jpg`}
                  alt={card.alt}
                  width={756}
                  height={1008}
                  priority
                />
              </li>
            )}
          </ul>
        </section>
        <section className={styles.contact}>
          <h2 id="getInTouch">Get in Touch</h2>
          <p>Want to order some cards? Have us set up a stand at your event?</p>
          <form className={styles.contactForm}>
            <label>
              Name
              <input type="text" />
            </label>
            <label>
              E-mail
              <input type="email" />
            </label>
            <label className={styles.message}>
              Message
              <textarea rows={4}></textarea>
            </label>
          </form>
        </section>
      </main>
    </>
  )
}
