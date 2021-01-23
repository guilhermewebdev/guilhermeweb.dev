import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useAmp } from 'next/amp'

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
  },
  {
    name: 'GitHub',
    link: 'https://github.com/guilhermewebdev'
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
const services = [
  {
    name: 'Aplicativos',
    subtitle: 'Nativos e PWA',
    description: 'Desenvolvimento de aplicativos nativos para IOS, Android, Smart TVs e PWAs utilizando JavaScript'
  },
  {
    name: 'Sites',
    subtitle: 'SEO e Performance super otimizados',
    description: 'Desenvolvimento de sites ultra performáticos e seguros, como E-Commerces, Blogs, Landing Pages entre outros'
  },
  {
    name: 'Plataformas',
    subtitle: 'Plataformas web de alta escalabilidade',
    description: 'Desenvolvimento de plataformas completas, para administração e automação empresarial ou implementação de ideias'
  },
  {
    name: 'Manutenção',
    subtitle: 'Foco na resolução de problemas',
    description: 'Manutenção em sistemas, implementação de novas funcionalidades ou reparo em problemas técnicos de funcionamento, performance ou segurança'
  }
]
export default function Home() {
  const isAmp = useAmp()

  return (
    <>
      <Head>
        <title>{name} - Web Developer</title>
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
          <figure>
            {isAmp ? (
              <amp-img
                src="/me.png"
                width={150}
                height={150}
                alt={name}
              />
            ) : (
                <Image
                  src="/me.png"
                  width={150}
                  height={150}
                  alt={name}
                />
            )}
          </figure>
          <h1>{name}</h1>
          <p>{slogan}</p>
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
        <article id="about">
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
        </article>
        <article id="services">
          <h3>Serviços</h3>
          <ul>
            {services.map(service => (
              <li>
                <section>
                  <h5>{service.name}</h5>
                  <h6>{service.subtitle}</h6>
                  <p>{service.description}</p>
                </section>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  )
}
