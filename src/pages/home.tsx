import Head from 'next/head'
import Image from 'next/image'
import { Viaoda_Libre } from 'next/font/google'

const viaoda = Viaoda_Libre({ weight: "400", subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cracking Good Gifts</title>
        <meta name="description" content="Crafting a better world one gift at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="">
          <nav className="nav-utility">
            <a href="/" className={viaoda.className}>Cracking Good Gifts</a>
            <a href="/cart">
              <Image
                className="icon-md"
                src="/icons/cart.svg"
                alt="Cart"
                width={180}
                height={37}
                priority
            />
          </a>
          </nav>
          <nav className="nav-primary">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/story">Our Story</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <div className="hero">
          <h1>Cracking Good Gifts</h1>
          <p>Crafting a better world<br />One gift at a time</p>
        </div>
      </header>

      <main>
        <section>
          <h2>What are you shopping for?</h2>
          <ul>
            <li>Everything</li>
            <li>Cards</li>
            <li>Glass</li>
          </ul>
        </section>
        <section>
          <div>
            <span>50%</span>
            of every purchase goes to Dana-Farber Cancer Institute
          </div>
          <a href="/donate">Donate</a>
          <div>
            <span>$5000+</span>
            Raised to date
          </div>
        </section>
      </main>

      <footer>
        <img src="" alt="Cracking Good Gifts logo" />
        <div>
          <h2>Get in Touch</h2>
          <a href="mailto:support@crackinggoodgifts.org">support@crackinggoodgifts.org</a>
          <a href="">CrackingGoodGifts</a>
        </div>
        <p>Copyright &copy; 2023 Cracking Good Gifts. All rights reserved.</p>
      </footer>
    </>
  )
}
