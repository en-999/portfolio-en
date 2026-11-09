import { useEffect, useState, type FormEvent } from 'react'

const projects = [
  {
    number: '01',
    type: 'Intelligence artificielle · Machine learning',
    title: 'Prédiction du chiffre d’affaires',
    description: 'Un système de prédiction développé chez Telecel Faso pour mieux estimer les tendances de revenus.',
    tags: ['Python', 'Machine learning', 'Data'],
    accent: 'project-sand',
  },
  {
    number: '02',
    type: 'Application métier · Backend',
    title: 'Gestion du parc informatique',
    description: 'Une application Java/Spring Boot pour suivre les équipements, les interventions et la maintenance.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    accent: 'project-blue',
  },
  {
    number: '03',
    type: 'Produit numérique · UI/UX',
    title: 'Tri intelligent des déchets',
    description: 'Conception d’une application de tri intelligent, du parcours utilisateur aux maquettes fonctionnelles.',
    tags: ['UI/UX', 'Flutter', 'Product'],
    accent: 'project-orange',
  },
]

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = `Bonjour Enzo,\n\nJe m'appelle ${name}.\nMon adresse email : ${email}\n\n${message}`

    window.location.href = `mailto:enzobitibaly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Retour en haut">
          BE<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? 'Fermer' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true">{menuOpen ? '×' : '↘'}</span>
        </button>
        <nav id="main-nav" className={menuOpen ? 'nav-open' : ''}>
          <a href="#projets" onClick={closeMenu}>Projets</a>
          <a href="#a-propos" onClick={closeMenu}>À propos</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span aria-hidden="true">{darkMode ? '☼' : '◐'}</span>
            {darkMode ? 'Clair' : 'Sombre'}
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow fade-in">EN-999</div>
        <h1 className="hero-title">
          Je transforme les idées
          <em> en solutions utiles.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">Développeur logiciel basé à Ouagadougou, je construis des produits numériques avec curiosité, méthode et impact.</p>
          <div className="hero-actions">
            <a className="button" href="#projets">Découvrir mes projets <ArrowUpRight /></a>
            <a className="button secondary" href="#contact">Me contacter</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" aria-hidden="true" />
          <img className="hero-photo" src="/myself.jpeg" alt="Portrait de Marc Enzo Bitibaly" />
          <span className="hero-photo-label">Available<br />for ideas</span>
          <span className="hero-photo-index">/ 01</span>
        </div>
      </section>
      <div className="marquee" aria-label="Compétences">
        <span>BACKEND ✦ MACHINE LEARNING ✦ UI/UX ✦ REACT ✦ JAVA ✦ PYTHON ✦ BACKEND ✦ MACHINE LEARNING ✦ UI/UX ✦ REACT ✦ JAVA ✦ PYTHON ✦</span>
      </div>

      <section className="projects-section section" id="projets">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>Projets sélectionnés</h2>
          <span className="section-line" />
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <span className="visual-shape" aria-hidden="true" />
                <span className="visual-word">{project.title}</span>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href="#contact" aria-label={`Voir le projet ${project.title}`}><ArrowUpRight /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section" id="a-propos">
        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>À propos</h2>
          <span className="section-line" />
        </div>
        <div className="about-grid">
          <p className="about-lead">Je construis des outils clairs, utiles et fiables, du modèle de données jusqu’à l’expérience utilisateur.</p>
          <div className="about-copy">
            <p>Formé en informatique et entrepreneuriat au Burkina Institute of Technology, je m’intéresse au développement backend, à l’intelligence artificielle et à la création de produits numériques accessibles.</p>
            <p className="stack-note"><strong>Stack :</strong> Java/Spring Boot · Node.js · Python · React · Flutter · MySQL · PostgreSQL</p>
            <a className="text-link" href="mailto:enzobitibaly@gmail.com">Parlons de votre projet <ArrowUpRight /></a>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><strong>04</strong><span className="stat-label">expériences</span></div>
          <div className="stat"><strong>+8</strong><span className="stat-label">projets clés</span></div>
          <div className="stat"><strong>08</strong><span className="stat-label">technologies</span></div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <p className="eyebrow">Une idée en tête ?</p>
        <h2>Faisons quelque chose de <em>juste.</em></h2>
        <div className="contact-layout">
          <div className="contact-intro">
            <p>Un projet, une question ou simplement envie d’échanger ? Écris-moi directement.</p>
            <a className="contact-link" href="mailto:enzobitibaly@gmail.com">enzobitibaly@gmail.com <ArrowUpRight /></a>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>Votre nom</span>
              <input name="name" type="text" placeholder="Prénom Nom" required />
            </label>
            <label>
              <span>Votre email</span>
              <input name="email" type="email" placeholder="vous@email.com" required />
            </label>
            <label>
              <span>Objet du message</span>
              <input name="subject" type="text" placeholder="Parlons de votre projet" required />
            </label>
            <label>
              <span>Votre message</span>
              <textarea name="message" placeholder="Bonjour Enzo, ..." rows={5} required />
            </label>
            <button className="button form-submit" type="submit">Préparer le message <ArrowUpRight /></button>
            <small>Votre logiciel de messagerie s’ouvrira avec le message prérempli.</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Marc Enzo Bitibaly</span>
        <div className="social-links">
          <a className="social-link github-link" href="https://github.com/en-999" target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
            <ArrowUpRight />
          </a>
          <a className="social-link linkedin-link" href="https://www.linkedin.com/in/marc-enzo-bitibaly-a2bb22270/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
            <span>LinkedIn</span>
            <ArrowUpRight />
          </a>
        </div>
        <span>Ouagadougou · Burkina Faso</span>
      </footer>
    </main>
  )
}

export default App
