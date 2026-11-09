import { useEffect, useState, type FormEvent } from 'react'

const projects = [
  {
    number: '01',
    type: 'Intelligence artificielle · Machine learning',
    title: 'Prédiction du chiffre d’affaires',
    description: 'Un système de prédiction développé chez Telecel Faso pour mieux estimer les tendances de revenus.',
    tags: ['Python', 'Machine learning', 'Data'],
    role: 'Préparation des données, sélection des variables et évaluation des modèles.',
    enType: 'Artificial intelligence · Machine learning',
    enTitle: 'Revenue forecasting',
    enDescription: 'A forecasting system developed at Telecel Faso to better estimate revenue trends.',
    enRole: 'Data preparation, feature selection and model evaluation.',
    accent: 'project-sand',
  },
  {
    number: '02',
    type: 'Application métier · Backend',
    title: 'Gestion du parc informatique',
    description: 'Une application Java/Spring Boot pour suivre les équipements, les interventions et la maintenance.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    role: 'Développement des fonctionnalités de suivi et de maintenance du parc.',
    enType: 'Business application · Backend',
    enTitle: 'IT asset management',
    enDescription: 'A Java/Spring Boot application for tracking equipment, interventions and maintenance.',
    enRole: 'Development of asset tracking and maintenance features.',
    accent: 'project-blue',
  },
  {
    number: '03',
    type: 'Produit numérique · UI/UX',
    title: 'Tri intelligent des déchets',
    description: 'Conception d’une application de tri intelligent, du parcours utilisateur aux maquettes fonctionnelles.',
    tags: ['UI/UX', 'Flutter', 'Product'],
    role: 'Conception du parcours utilisateur et des maquettes de l’application.',
    enType: 'Digital product · UI/UX',
    enTitle: 'Smart waste sorting',
    enDescription: 'Design of a smart waste-sorting app, from user journeys to functional mockups.',
    enRole: 'User journey and application mockup design.',
    accent: 'project-orange',
  },
  {
    number: '04',
    type: 'Développement web · Maintenance informatique',
    title: 'Suivi des pannes',
    description: 'Une application Laravel pour déclarer, suivre et gérer les incidents du parc informatique.',
    tags: ['Laravel', 'PHP', 'Support'],
    role: 'Développement de la gestion des incidents et documentation des interventions.',
    enType: 'Web development · IT maintenance',
    enTitle: 'Incident tracking',
    enDescription: 'A Laravel application for reporting, tracking and managing IT equipment incidents.',
    enRole: 'Development of incident management features and intervention documentation.',
    accent: 'project-orange',
  },
]

function GitHubIcon() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 5 18.2 5.3 18.2 5.3c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M5.2 3.6a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0ZM1.2 8h4v12.8h-4V8Zm6.5 0h3.8v1.8h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2v6.9h-4v-6.1c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4v6.2h-4V8Z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M19.5 4.7A16.2 16.2 0 0 0 15.6 3l-.5 1a14.6 14.6 0 0 0-6.2 0l-.5-1a16.2 16.2 0 0 0-3.9 1.7C2 8.5 1.3 12.2 1.7 15.9a15.7 15.7 0 0 0 4.8 2.4l1.2-1.6c-.7-.3-1.3-.6-1.9-1 0-.1.1-.1.2-.2 3.7 1.7 7.7 1.7 11.3 0l.2.2c-.6.4-1.2.7-1.9 1l1.2 1.6a15.7 15.7 0 0 0 4.8-2.4c.5-4.3-.8-8-2.1-11.2ZM8.1 14.8c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.8 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m3 6 9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="download-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const intro = "What's Up ? Moi c'est Enzo, passionné de tech et de sécurité... je te laisse découvrir mon portfolio."
  const [typedIntro, setTypedIntro] = useState(intro)
  const [language, setLanguage] = useState<'fr' | 'en'>(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr')
  const [activeSection, setActiveSection] = useState('projets')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'ready'>('idle')
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showMoreAbout, setShowMoreAbout] = useState(false)
  const isEnglish = language === 'en'
  const localizedIntro = isEnglish
    ? "What's Up? I'm Enzo, passionate about tech and security... discover my portfolio."
    : intro

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = isEnglish
      ? `Hello Enzo,\n\nMy name is ${name}.\nMy email address: ${email}\n\n${message}`
      : `Bonjour Enzo,\n\nJe m'appelle ${name}.\nMon adresse email : ${email}\n\n${message}`

    setFormStatus('ready')
    window.location.href = `mailto:enzobitibaly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
    document.documentElement.classList.add('reveal-ready')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const photo = document.querySelector<HTMLElement>('.hero-photo-wrap')
    if (!photo || window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10
      const y = (event.clientY / window.innerHeight - 0.5) * -10
      photo.style.setProperty('--photo-x', `${x}px`)
      photo.style.setProperty('--photo-y', `${y}px`)
    }

    const resetPhoto = () => {
      photo.style.setProperty('--photo-x', '0px')
      photo.style.setProperty('--photo-y', '0px')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', resetPhoto)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', resetPhoto)
    }
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('#projets, #a-propos, #contact'))
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

      if (visibleSection) {
        setActiveSection(visibleSection.target.id)
      }
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .25, .5] })

    sections.forEach((section) => observer.observe(section))
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  useEffect(() => {
    setTypedIntro(localizedIntro)
    let position = localizedIntro.length
    let deleting = true
    let timeoutId: number

    const animateIntro = () => {
      if (!deleting && position < localizedIntro.length) {
        position += 1
      } else if (deleting && position > 0) {
        position -= 1
      } else if (!deleting) {
        deleting = true
        timeoutId = window.setTimeout(animateIntro, 2400)
        return
      } else {
        deleting = false
      }

      setTypedIntro(localizedIntro.slice(0, position))
      timeoutId = window.setTimeout(animateIntro, deleting ? 32 : 48)
    }

    timeoutId = window.setTimeout(animateIntro, 2400)
    return () => window.clearTimeout(timeoutId)
  }, [localizedIntro])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Retour en haut">
          EN-999<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? (isEnglish ? 'Close' : 'Fermer') : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true">{menuOpen ? '×' : '↘'}</span>
        </button>
        <nav id="main-nav" className={menuOpen ? 'nav-open' : ''}>
          <a className={activeSection === 'projets' ? 'active' : ''} href="#projets" onClick={closeMenu}>{isEnglish ? 'Projects' : 'Projets'}</a>
          <a className={activeSection === 'a-propos' ? 'active' : ''} href="#a-propos" onClick={closeMenu}>{isEnglish ? 'About' : 'À propos'}</a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={closeMenu}>Contact</a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span aria-hidden="true">{darkMode ? '☼' : '◐'}</span>
            {darkMode ? 'Clair' : 'Sombre'}
          </button>
          <button className="theme-toggle language-toggle" type="button" onClick={() => setLanguage(isEnglish ? 'fr' : 'en')} aria-label={isEnglish ? 'Passer en français' : 'Switch to English'}>
            {isEnglish ? 'FR' : 'EN'}
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <h1 className="hero-title">
          {isEnglish ? 'I turn ideas' : 'Je transforme les idées'}
          <em>{isEnglish ? ' into useful solutions.' : ' en solutions utiles.'}</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            <span className="intro-gradient">{typedIntro}</span>
            <span className="intro-cursor" aria-hidden="true" />
          </p>
          <div className="hero-actions">
            <a className="button secondary" href="#contact">Me contacter</a>
            <a className="button secondary cv-hero-link" href="/Bitibaly_Enzo_cv.pdf" download="CV-Marc-Enzo-Bitibaly.pdf">
              <span>CV</span>
              <DownloadIcon />
            </a>
          </div>
          <div className="hero-social-links" aria-label="Réseaux et contact">
            <a href="https://github.com/en-999" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/marc-enzo-bitibaly-a2bb22270/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer" aria-label="Discord">
              <DiscordIcon />
            </a>
            <a href="mailto:enzobitibaly@gmail.com" aria-label="Envoyer un email">
              <MailIcon />
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" aria-hidden="true" />
          <img className="hero-photo" src="/myself.jpeg" alt="Portrait de Marc Enzo Bitibaly" />
          <span className="hero-photo-label">{isEnglish ? <>Available<br />for ideas</> : <>Disponible<br />pour vos idées</>}</span>
        </div>
        <div className="hero-3d-scene" aria-hidden="true">
          <div className="hero-orb">
            <span className="orb-ring orb-ring-one" />
            <span className="orb-ring orb-ring-two" />
            <span className="orb-glow" />
          </div>
        </div>
      </section>
      <section className="projects-section section reveal" id="projets">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>{isEnglish ? 'My projects' : 'Mes projets'}</h2>
          <button className="view-all-projects" type="button" onClick={() => setShowAllProjects(!showAllProjects)}>
            {showAllProjects ? (isEnglish ? 'Show less' : 'Réduire') : (isEnglish ? 'See all' : 'Voir tous')} <span aria-hidden="true">→</span>
          </button>
          <span className="section-line" />
        </div>
        <div className="project-list">
          {projects.slice(0, showAllProjects ? projects.length : 3).map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <span className="visual-shape" aria-hidden="true" />
                <span className="visual-word">{isEnglish ? project.enTitle : project.title}</span>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{isEnglish ? project.enType : project.type}</p>
                  <h3>{isEnglish ? project.enTitle : project.title}</h3>
                  <p className="project-description">{isEnglish ? project.enDescription : project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button className="project-action" type="button" onClick={() => setSelectedProject(project)} aria-label={isEnglish ? `View details of ${project.enTitle}` : `Voir les détails de ${project.title}`}>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {showAllProjects && (
          <p className="all-projects-note">
            {isEnglish ? 'Four projects, one approach: build useful, reliable and accessible digital products.' : 'Quatre projets, une même approche : construire des produits numériques utiles, fiables et accessibles.'}
          </p>
        )}
      </section>

      <section className="about-section section reveal" id="a-propos">
        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>About me...</h2>
          <span className="section-line" />
        </div>
        <div className="about-grid">
          <p className="about-lead">{isEnglish ? 'I build clear, useful and reliable tools, from data models to user experiences.' : 'Je construis des outils clairs, utiles et fiables, du modèle de données jusqu’à l’expérience utilisateur.'}</p>
          <div className="about-copy">
            <p>{isEnglish ? 'Trained in computer science and entrepreneurship at Burkina Institute of Technology, I focus on backend development, artificial intelligence and accessible digital products.' : 'Formé en informatique et entrepreneuriat au Burkina Institute of Technology, je m’intéresse au développement backend, à l’intelligence artificielle et à la création de produits numériques accessibles.'}</p>
            <p className="stack-note"><strong>Stack :</strong> Java/Spring Boot · Node.js · Python · React · Flutter · MySQL · PostgreSQL</p>
            <div className="about-actions">
              <button className="button about-more-toggle" type="button" onClick={() => setShowMoreAbout(!showMoreAbout)}>
                {showMoreAbout ? (isEnglish ? 'Show less' : 'Réduire') : (isEnglish ? 'Learn more' : 'En savoir plus')} <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><strong>04</strong><span className="stat-label">{isEnglish ? 'experiences' : 'expériences'}</span></div>
          <div className="stat"><strong>+8</strong><span className="stat-label">{isEnglish ? 'key projects' : 'projets clés'}</span></div>
          <div className="stat"><strong>08</strong><span className="stat-label">{isEnglish ? 'technologies' : 'technologies'}</span></div>
        </div>
        {showMoreAbout && (
          <div className="about-more">
            <div>
              <span className="about-more-title">{isEnglish ? 'Professional journey' : 'Parcours professionnel'}</span>
              <div className="timeline">
                <article><span>2026</span><p><strong>Telecel Faso</strong>{isEnglish ? 'AI & Machine Learning internship' : 'Stage IA & machine learning'}</p></article>
                <article><span>2025</span><p><strong>LONAB</strong>{isEnglish ? 'Java/Spring Boot & information systems' : 'Java/Spring Boot & systèmes d’information'}</p></article>
                <article><span>2024</span><p><strong>{isEnglish ? 'Ouagadougou City Hall' : 'Mairie centrale de Ouagadougou'}</strong>{isEnglish ? 'Development & IT maintenance' : 'Développement & maintenance informatique'}</p></article>
                <article><span>2023</span><p><strong>Selection Waste</strong>{isEnglish ? 'UI/UX & digital product design' : 'UI/UX & conception de produit numérique'}</p></article>
              </div>
            </div>
            <div>
              <span className="about-more-title">{isEnglish ? 'Education' : 'Formation'}</span>
              <div className="education-card">
                <p><strong>{isEnglish ? 'Computer Science & Entrepreneurship' : 'Informatique & entrepreneuriat'}</strong><span>Burkina Institute of Technology · 2022—2025</span></p>
                <p><strong>{isEnglish ? 'Baccalaureate · Mathematics & Biology' : 'Baccalauréat · Mathématiques & biologie'}</strong><span>Lycée Saint Justin · 2019—2022</span></p>
              </div>
              <span className="about-more-title">{isEnglish ? 'Languages' : 'Langues'}</span>
              <div className="language-list">
                <span>Français <b>{isEnglish ? 'Native' : 'Natif'}</b></span>
                <span>Mooré <b>{isEnglish ? 'Native' : 'Natif'}</b></span>
                <span>English <b>{isEnglish ? 'Intermediate' : 'Intermédiaire'}</b></span>
                <span>Español <b>{isEnglish ? 'Beginner' : 'Débutant'}</b></span>
              </div>
            </div>
            <div>
              <span className="about-more-title">{isEnglish ? 'Certifications' : 'Certifications'}</span>
              <div className="certification-list">
                <p><strong>{isEnglish ? 'From Zero to Hero' : 'De zéro à héros'}</strong><span>{isEnglish ? 'Building digital products from scratch' : 'Développement de produits numériques à partir de zéro'}</span></p>
                <p><strong>Python Scripting for DevOps</strong><span>Coursera</span></p>
              </div>
              <span className="about-more-title location-title">{isEnglish ? 'Based in' : 'Basé à'}</span>
              <p className="location-value">Ouagadougou, Burkina Faso</p>
            </div>
          </div>
        )}
      </section>

      <section className="contact-section section reveal" id="contact">
        <p className="eyebrow">Let's connect</p>
        <h2>{isEnglish ? <>Let’s make something <em>meaningful.</em></> : <>Faisons quelque chose de <em>juste.</em></>}</h2>
        <div className="contact-layout">
          <div className="contact-intro">
            <p>{isEnglish ? 'A project, a question or simply want to connect? Write to me directly.' : 'Un projet, une question ou simplement envie d’échanger ? Écris-moi directement.'}</p>
            <a className="contact-link" href="mailto:enzobitibaly@gmail.com">enzobitibaly@gmail.com</a>
            <div className="contact-social-links">
              <a className="social-link github-link" href="https://github.com/en-999" target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a className="social-link linkedin-link" href="https://www.linkedin.com/in/marc-enzo-bitibaly-a2bb22270/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>{isEnglish ? 'Your name' : 'Votre nom'}</span>
              <input name="name" type="text" placeholder={isEnglish ? 'First Last' : 'Prénom Nom'} required />
            </label>
            <label>
              <span>{isEnglish ? 'Your email' : 'Votre email'}</span>
              <input name="email" type="email" placeholder="vous@email.com" required />
            </label>
            <label>
              <span>{isEnglish ? 'Message subject' : 'Objet du message'}</span>
              <input name="subject" type="text" placeholder={isEnglish ? 'Let’s talk about your project' : 'Parlons de votre projet'} required />
            </label>
            <label>
              <span>{isEnglish ? 'Your message' : 'Votre message'}</span>
              <textarea name="message" placeholder={isEnglish ? 'Hello Enzo, ...' : 'Bonjour Enzo, ...'} rows={5} required />
            </label>
            <button className="button form-submit" type="submit">{formStatus === 'ready' ? (isEnglish ? 'Message ready' : 'Message préparé') : (isEnglish ? 'Prepare message' : 'Préparer le message')}</button>
            <small className={formStatus === 'ready' ? 'form-confirmation' : ''}>
              {formStatus === 'ready'
                ? (isEnglish ? 'Your email app should open with the details pre-filled.' : 'Votre messagerie devrait s’ouvrir avec les informations préremplies.')
                : (isEnglish ? 'Your email app will open with the message pre-filled.' : 'Votre logiciel de messagerie s’ouvrira avec le message prérempli.')}
            </small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Marc Enzo Bitibaly</span>
        <span>{isEnglish ? 'Ouagadougou · Burkina Faso' : 'Ouagadougou · Burkina Faso'}</span>
      </footer>
      {showBackToTop && (
        <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut">
          ↑
        </button>
      )}
      {selectedProject && (
        <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Fermer les détails">×</button>
            <p className="project-type">{isEnglish ? selectedProject.enType : selectedProject.type}</p>
            <h2 id="project-modal-title">{isEnglish ? selectedProject.enTitle : selectedProject.title}</h2>
            <p>{isEnglish ? selectedProject.enDescription : selectedProject.description}</p>
            <p><strong>{isEnglish ? 'My role:' : 'Mon rôle :'}</strong> {isEnglish ? selectedProject.enRole : selectedProject.role}</p>
            <div className="tag-list">
              {selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="button modal-contact" href="#contact" onClick={() => setSelectedProject(null)}>{isEnglish ? 'Talk about this project' : 'Parler de ce projet'}</a>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
