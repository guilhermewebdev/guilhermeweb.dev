import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import { useEffect, useState } from 'react'
import { injectGA, facebookPixel, googleTracking } from '../components/analytics';
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
const occupation = 'Desenvolvedor FullStack na Ubistart'
const quote = 'As grandes conquistas da humanidade foram obtidas conversando, e as grandes falhas pela falta de diálogo.'
const quoteAuthor = 'Stephen Hawking'
const skills = [
  {
    name: 'Git',
    icon: "https://img.icons8.com/color/150/000000/git.png"
  },
  {
    name: 'Relational Database',
    icon: "https://img.icons8.com/fluent/150/000000/database.png",
  },
  {
    name: 'MongoDB',
    icon: "https://img.icons8.com/color/150/000000/mongodb.png",
  },
  {
    name: 'Node.js',
    icon: "https://img.icons8.com/color/150/000000/nodejs.png",
  },
  {
    name: 'Golang',
    icon: "https://img.icons8.com/color/150/000000/golang.png",
  },
  {
    name: 'Rust',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
  },
  {
    name: 'Ruby',
    icon: "https://img.icons8.com/color/150/000000/ruby-programming-language.png"
  },
  {
    name: 'Python',
    icon: "https://img.icons8.com/color/150/000000/python.png"
  },
  {
    name: 'REST API',
    icon: 'https://img.icons8.com/fluent/150/000000/api-settings.png'
  },
  {
    name: 'GraphQL',
    icon: 'https://img.icons8.com/color/150/000000/graphql.png'
  },
  {
    name: 'Docker',
    icon: "https://img.icons8.com/color/150/000000/docker.png",
  },
  {
    name: 'Kubernetes',
    icon: "https://img.icons8.com/color/150/000000/kubernetes.png",
  },
  {
    name: 'DevOps / FullCycle',
    icon: "https://img.icons8.com/color/150/000000/settings-3--v1.png"
  },
  {
    name: 'CI/CD',
    icon: "https://img.icons8.com/color/150/000000/jenkins.png"
  },
  {
    name: 'Cloud Computing',
    icon: "https://img.icons8.com/fluent/150/000000/cloud.png",
  },
  {
    name: 'AWS',
    icon: "https://img.icons8.com/color/150/000000/amazon-web-services.png",
  },
  {
    name: 'Ansible',
    icon: "https://img.icons8.com/color/150/000000/ansible.png",
  },
  {
    name: 'Linux',
    icon: "https://img.icons8.com/color/150/000000/linux.png",
  },
  {
    name: 'Sass',
    icon: "https://img.icons8.com/color/150/000000/sass.png"
  },
  {
    name: 'JavaScript / TypeScript',
    icon: "https://img.icons8.com/color/150/000000/typescript.png",
  },
  {
    name: 'React.js / React Native',
    icon: "https://img.icons8.com/color/150/000000/react-native.png"
  },
  {
    name: 'Vue.js',
    icon: "https://img.icons8.com/color/150/000000/vue-js.png"
  },
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
const contactAction = "https://submit.jotform.com/submit/210254257271651/"
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
const TwitterUsername = "@GuilhermeWebDev"
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "description": description,
  "image": [
    "https://guilhermeweb.dev/me.png",
  ],
  "@id": "http://guilhermeweb.dev",
  "name": name,
  "address": {
    "addressRegion": "MG",
    "addressCountry": "BR"
  },
  "url": "https://guilhermeweb.dev/",
  "telephone": "+5532991982237",
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
  ],
}
const siteUrl = 'https://guilhermeweb.dev/'

export default function Home() {
  const isAmp = useAmp()
  const [form, setForm] = useState({
    email: '',
    name: '',
    area: '',
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
        digit(previous + current + (index % 2 == 0 ? '_' : '  '))
      }, index * 50);
      return previous + current;
    }, '')
  }
  useEffect(typingEffect, [])
  useEffect(injectGA, [])
  useEffect(facebookPixel, [])
  return (
    <>
      <Head>
        <title>{name} - Web Developer</title>
        <link rel="icon" href="/favicon.png" />
        <meta charSet="UTF-8" />
        {!isAmp && <meta name="viewport" content="width=device-width, initial-scale=1.0" />}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="copyright" content={name} />
        <meta name="author" content={name} />
        <meta name="creator" content={name} />
        <meta name="owner" content={name} />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="fb:app_id" content={FBApp} />
        <meta property="og:image" content={`${siteUrl}me.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:region" content="MG" />
        <meta property="og:country-name" content="BR" />
        <meta property="og:email" content={structuredData.email} />
        <meta property="og:image:alt" content={description} />
        <meta property="twitter:site" content={TwitterUsername} />
        <meta property="twitter:creator" content={TwitterUsername} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image:alt" content={description} />
        <meta property="twitter:image" content={`${siteUrl}me.png`} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTracking}`}></script>
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
            <h3>Principais Ferramentas</h3>
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
          <h3>Solicite orçamentos ou tire suas dúvidas</h3>
          <form className={styles.contactForm} {...formAttr} method="post" name="form_210254257271651" id="210254257271651" acceptCharset="utf-8" autoComplete="on" target={isAmp ? '_top' : '_blank'}>
            <ul>
              <li id="id_3">
                <label id="label_3" htmlFor="input_3">Email:</label>
                <input value={form.email} onInput={handlerInput('email')} type="text" id="input_3" name="q3_email3" datatype="input-textbox" placeholder=" " required />
              </li>
              <li id="id_1">
                <label id="label_1" htmlFor="input_1"> Nome: </label>
                <input type="text" required value={form.name} onInput={handlerInput('name')} id="input_1" name="q1_nome1" placeholder=" " />
              </li>
              <li datatype="control_phone" id="id_8">
                <fieldset className={styles.inputPhone} id="input_8_area">
                  <legend>Telefone:</legend>
                  <span className={styles.areaCode}>
                    <span>(</span>
                    <input maxLength={2} value={form.area} onInput={handlerInput('area')} type="tel" id="input_8_area" name="q8_telefone[area]" />
                    <span>)-</span>
                  </span>
                  <span className={styles.phone}>
                    <input value={form.phone} onInput={handlerInput('phone')} type="tel" id="input_8_phone" name="q8_telefone[phone]" />
                  </span>
                </fieldset>
              </li>
              <li id="id_4">
                <label id="label_4" htmlFor="input_4"> Assunto: </label>
                <input value={form.subject} onInput={handlerInput('subject')} type="text" id="input_4" name="q4_assunto" datatype="input-textbox" placeholder=" " />
              </li>
              <li datatype="control_textarea" id="id_5">
                <label id="label_5" htmlFor="input_5">Mensagem:</label>
                <textarea value={form.message} onInput={handlerInput('message')} id="input_5" name="q5_mensagem" cols="50" rows="7" required ></textarea>
              </li>
            </ul>
            <input type="text" name="website" style={{ display: 'none' }} />
            <input type="hidden" id="simple_spc" name="simple_spc" value="210254257271651" />
            <input type="hidden" name="formID" value="210254257271651" />
            <input type="hidden" id="JWTContainer" />
            <input type="hidden" id="cardinalOrderNumber" />
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
