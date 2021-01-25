import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import { useEffect, useState } from 'react'

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
    link: 'https://www.linkedin.com/in/guilherme-isaías-silva/'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/guilhermewebdev'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/GuilhermeWebDev'
  },
  {
    name: 'Telefone: (32) 9 9198-2237',
    link: 'tel:32 9 9198 2237'
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
const slogan = 'Transformo ideias em software, ajudando empresas a automatizarem e melhorarem processos.'
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
    icon: "https://img.icons8.com/color/150/000000/python.png"
  },
  {
    name: 'Django',
    icon: "https://img.icons8.com/color/150/000000/django.png",
  },
  {
    name: 'Docker',
    icon: "https://img.icons8.com/color/150/000000/docker.png",
  },
  {
    name: 'JavaScript / Typescript',
    icon: "https://img.icons8.com/color/150/000000/typescript.png",
  },
  {
    name: 'React.js / React Native',
    icon: "https://img.icons8.com/officel/150/000000/react.png",
  },
  {
    name: 'Node.js',
    icon: "https://img.icons8.com/color/150/000000/nodejs.png",
  },
  {
    name: 'DevOps / FullCycle',
    icon: "https://img.icons8.com/color/150/000000/settings-3--v1.png"
  },
  {
    name: 'Computação em núvem',
    icon: "https://img.icons8.com/fluent/150/000000/cloud.png",
  },
  {
    name: 'Linux',
    icon: "https://img.icons8.com/color/150/000000/linux.png",
  },
  {
    name: 'Git',
    icon: "https://img.icons8.com/color/150/000000/git.png"
  },
  {
    name: 'Sass',
    icon: "https://img.icons8.com/color/150/000000/sass.png"
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
const portfolio = [
  {
    title: 'Duda Modas',
    description: 'E-commerce voltado para moda feminina',
    link: 'https://dudamodas.net/'
  },
  {
    title: 'Arbitrium',
    description: 'Micro Framework para criação de aplicações web',
    link: 'https://github.com/guilhermewebdev/arbitrium'
  },
  {
    title: 'Django Login',
    description: 'Interface elegante utilizando Django e React',
    link: 'https://github.com/guilhermewebdev/django-login'
  },
  {
    title: 'Odontoseries',
    description: 'Plataforma online de cursos para dentistas',
    link: 'https://odontoseries.herokuapp.com/',
  }
]
const contactAction = "https://us10.list-manage.com/contact-form?u=b5756f49cfa68ec8977aa6101&form_id=0ba2105a76d5d8a6694e3a6e3eb80a8b"
const contacts = [
  {
    name: '(32) 9 9198-2237',
    link: 'tel:3291982237'
  },
  {
    name: 'guilherme@guilhermeweb.dev',
    link: 'mailto:guilherme@guilhermeweb.dev',
  },
  {
    name: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=5532991982237'
  },
  {
    name: 'WhatsApp Web',
    link: 'https://web.whatsapp.com/send?phone=5532991982237'
  }
]
const FBApp = 223494466159144;
const TwitterUsername = "GuilhermeWebDev"
const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barbacena",
    addressRegion: "MG",
  },
  email: "mailto:guilherme@guilhermeweb.dev",
  image: "me.png",
  jobTitle: "Programmer",
  name: name,
  telephone: "+55 (32) 9 9198-2237",
  url: "https://guilhermeweb.dev"
}
const googleTraking = 'UA-135503394-3';

function injectGA() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', googleTraking);
  }
};

export default function Home() {
  const isAmp = useAmp()
  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [typewriter, digit] = useState(slogan);
  const actionType = isAmp ? 'action-xhr' : 'action'
  const formAttr = { [actionType]: contactAction }
  const skillsComponent = (
    <ul className={styles.skillList}>
      {skills.map(skill => (
        <li key={skill.name}>
          <figure>
            {isAmp ? (
              <amp-img
                src={skill.icon}
                width={150}
                height={150}
                alt={name}
              />
            ) : (
                <img
                  src={skill.icon}
                  width={150}
                  height={150}
                  alt={name}
                />
              )}
            <figcaption>{skill.name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
  function handlerInput(field) {
    return function (event) {
      setForm({ ...form, [field]: event.target.value })
    }
  }
  function typingEffect() {
    const list = slogan.split('');
    list.reduce((previous, current, index) => {
      setTimeout(() => {
        digit(previous + current + (index % 2 == 0 ? '█' : '  '))
      }, index * 50);
      return previous + current;
    }, '')

  }

  useEffect(typingEffect, [])
  useEffect(injectGA, [])
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Guilherme Isaías" />
        {!isAmp && <meta name="viewport" content="width=device-width, initial-scale=1.0" />}
        <title>{name} - Web Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta property="og:image" content="/thumb.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2050" />
        <meta property="og:image:height" content="780" />
        <meta name="twitter:site" content={TwitterUsername} />
        <meta property="fb:app_id" content={FBApp} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://guilhermeweb.dev/" />
        <meta name="twitter:card" content="/thumb.png" />
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="copyright" content={name} />
        <meta name="author" content={name} />
        <meta name="creator" content={name} />
        <meta name="og:region" content="MG" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="og:country-name" content="BR" />
        <meta name="owner" content={name} />
        <meta name="og:email" content={structuredData.email} />
        <meta name="twitter:image:alt" content={description} />
        <meta name="og:image:alt" content={description} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTraking}`}></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <header>
        <address className={styles.address}>
          <nav>
            <ul className={styles.topMenu}>
              {socials.map(({ name, link }) => (
                <li key={name}>
                  <a rel="noopener" target="_blank" href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </address>
        <section className={styles.title}>
          <figure className={styles.logo}>
            {isAmp ? (
              <amp-img
                src="/me.png"
                width={150}
                height={150}
                alt={name}
                className={styles.pic}
              />
            ) : (
                <Image
                  className={styles.pic}
                  src="/me.png"
                  width={150}
                  height={150}
                  alt={name}
                />
              )}
          </figure>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.slogan}>{typewriter}</p>
        </section>
        <nav className={styles.navigation}>
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
          <section className={styles.aboutMe}>
            <h2>Sobre</h2>
            <p>{about}</p>
          </section>
          <article className={styles.about} >
            <section className={styles.occupation}>
              <h3>Ocupação atual</h3>
              <p>{occupation}</p>
            </section>
            <section className={styles.quote}>
              <h3>Citação</h3>
              <blockquote>
                <q cite={quoteAuthor}>{quote}</q>
              </blockquote>
              <cite>{quoteAuthor}</cite>
            </section>
          </article>
          <article id="skills" className={styles.skills}>
            <h3>Habilidades</h3>
            <section>
              {skillsComponent}
              {skillsComponent}
            </section>
          </article>
        </article>
        <article className={styles.portfolio} id="portfolio">
          <h2 className={styles.name}>Portfólio</h2>
          <ul>
            {portfolio.map(item => (
              <li key={item.title}>
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a target="_blank" rel="noopener" href={item.link}>{'>'} Conhecer</a>
                </section>
              </li>
            ))}
          </ul>
        </article>
        <article className={styles.services} id="services">
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
        <section className={styles.contact} id="contact">
          <h2 className={styles.name}>Entre em contato</h2>
          <p>Solicite orçamentos ou tire suas dúvidas, responderei o mais rápido possível!</p>
          <form className={styles.contactForm} {...formAttr} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target={isAmp ? '_top' : '_blank'}>
            <ul>
              <li>
                <label htmlFor="mce-EMAIL">Email:</label>
                <input required type="email" value={form.email} id="mce-EMAIL" name="EMAIL" onInput={handlerInput('email')} />
              </li>
              <li>
                <label htmlFor="mce-NAME">Nome:</label>
                <input required type="text" value={form.name} id="mce-NAME" name="NAME" onInput={handlerInput('name')} />
              </li>
              <li>
                <label htmlFor="mce-PHONE">Telefone:</label>
                <input type="text" name="PHONE" className="" id="mce-PHONE" value={form.phone} onInput={handlerInput('phone')} />
              </li>
              <li>
                <label htmlFor="mce-ASSUNTO">Assunto:</label>
                <input required type="text" value={form.subject} name="ASSUNTO" id="mce-ASSUNTO" onInput={handlerInput('subject')} />
              </li>
              <li>
                <label htmlFor="mce-MESSAGE">Mensagem:</label>
                <textarea required value={form.message} name="MESSAGE" id='mce-MESSAGE' onInput={handlerInput('message')} />
              </li>
            </ul>
            <input type="hidden" name="b_b5756f49cfa68ec8977aa6101_5cfba22435" tabIndex="-1" value="" />
            <input type="submit" value="Enviar" name="subscribe" id="mc-embedded-subscribe" className={styles.button} />
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <section className={styles.navs}>
          <nav>
            <h2>Menu</h2>
            <ul className={styles.verticalMenu}>
              {menu.map(item => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h2>Redes Sociais</h2>
            <ul className={styles.verticalMenu}>
              {socials.map(item => (
                <li key={item.name}>
                  <a rel="noopener" target="_blank" href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h2>Contatos</h2>
            <ul className={styles.verticalMenu}>
              {contacts.map(item => (
                <li key={item.name}>
                  <a rel="noopener" target="_blank" href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <small>Copyright &copy; {new Date().getFullYear()} - {name}</small>
      </footer>
    </>
  )
}
