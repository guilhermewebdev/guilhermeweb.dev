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
const about = `Olá, sou Guilherme Isaías, desenvolvedor de software Full-Stack e Full-Cycle. 
              Especialista no desenvolvimento de sistemas web, e possuo experiência com a 
              criação de plataformas, lojas virtuais, automação comercial, entre outros. 
              Sempre utilizando as melhores práticas de desenvolvimento, com testes automatizados,
              Clean Code, integração contínua, entre outros, facilitando a manutenção, escalabilidade 
              e garantindo a estabilidade dos sistemas.
            `
const occupation = 'Desenvolvedor Web Autônomo'
const quote = 'As grandes conquistas da humanidade foram obtidas conversando, e as grandes falhas pela falta de diálogo.'
const quoteAuthor = 'Stephen Hawking'
const skills = [
  {
    name: 'Python',
  },
  {
    name: 'Django'
  },
  {
    name: 'Docker'
  },
  {
    name: 'JavaScript / Typescript'
  },
  {
    name: 'React.js / React Native'
  },
  {
    name: 'Node.js'
  },
  {
    name: 'DevOps / FullCycle'
  },
  {
    name: 'Computação em núvem'
  },
  {
    name: 'Linux',
  }
]
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
        <section id="about">
          <h3>Sobre</h3>
          <p>{about}</p>
          <section>
            <h5>Ocupação atual</h5>
            <p>{occupation}</p>
          </section>
          <section>
            <h5>Citação</h5>
            <blockquote>{quote}</blockquote>
            <cite>{quoteAuthor}</cite>
          </section>
          <section>
            <h5>Habilidades</h5>
            <ul>
              {skills.map(skill => (
                <li>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}
