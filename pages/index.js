import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export const config = { amp: 'hybrid' }
const socials = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/guilhermeweb.dev',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/guilhermeweb.dev',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/guilherme-isa%C3%ADas-silva/'
  }
]
const menu = [
  {
    name: 'Quem sou',
    link: '#about',
  },
  {
    name: 'Serviços',
    link: '#services'
  },
  {
    name: 'Portfólio',
    link: '#portfolio'
  },
  {
    name: 'Contato',
    link: '#contact',
  }
]
const name = 'Guilherme Isaías'
const slogan = 'Transformo ideias em software, ajudando empresas a automatizarem e melhorarem processos'

export default function Home() {
  return (
    <>
      <Head>
        <title>{ name } - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <address>
          <nav>
            <ul>
              {socials.map(({ name, link }) => (
                <li>
                  <a rel="nofollow" href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <section>
            <span>Telefone de contato</span>
            <a href="tel:32991982237">(32) 9 9198-2237</a>
          </section>
        </address>
        <section>
          <Image
            src="/me.png"
            width={125}
            height={125}
            alt={name}
          />
          <h1>{ name }</h1>
          <p>{ slogan }</p>
        </section>
        <nav>
          <ul>
            {menu.map(item => (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>

      </main>
    </>
  )
}
