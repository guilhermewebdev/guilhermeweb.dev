import Head from 'next/head'
import { Html } from 'next/document'
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
    link: 'https://www.linkedin.com/in/guilherme-isa%C2%ADas-silva/'
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
const description = 'Tire suas ideias do papel, desenvolvo softwares sob medida pare seu negócio'
const keywords = 'programador; desenvolvedor; software; TI; profissional; Guilherme; Isaías; Django; Python; Docker; Sites; Site;'
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
        <meta charSet="UTF-8" />
        <meta name="author" content="Guilherme Isaías" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{name} - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <header>
        <address>
          <nav>
            <ul>
              {socials.map(({ name, link }) => (
                <li key={name}>
                  <a rel="nofollow" href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <section>
            <span>Telefone de contato</span>
            <a href="tel:22991982227">(22) 9 9198-2227</a>
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
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <article id="about">
          <h2>Sobre</h2>
          <p>{about}</p>
          <article>
            <h3>Ocupação atual</h3>
            <p>{occupation}</p>
          </article>
          <article>
            <h3>Citação</h3>
            <blockquote>{quote}</blockquote>
            <cite>{quoteAuthor}</cite>
          </article>
          <article>
            <h3>Habilidades</h3>
            <ul>
              {skills.map(skill => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        </article>
        <article id="services">
          <h2>Serviços</h2>
          <ul>
            {services.map(service => (
              <li key={service.name}>
                <section>
                  <h3>{service.name}</h3>
                  <h4>{service.subtitle}</h4>
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
