import { portfolio as p } from './data/portfolio'
import { Section } from './components/Section'
import { DownloadLink, SocialLinks } from './components/PortfolioLinks'
import { PortfolioImage } from './components/PortfolioImage'

const navigation = [
  ['about', 'About'],
  ['expertise', 'Expertise'],
  ['journey', 'Journey'],
  ['beyond', 'Beyond Engineering'],
  ['contact', 'Contact'],
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="top" className="site-header">
        <div className="shell header-inner flex items-center justify-between">
          <a className="wordmark flex items-center" href="#top">
            <span className="brand-mark" aria-hidden="true">{p.initials}</span>
            <span>{p.name}</span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="nav-list flex flex-wrap items-center">
              {navigation.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{p.role}</p>
            <h1 id="hero-title">{p.headline}</h1>
            <p className="tagline">{p.tagline}</p>
            <p className="intro">{p.introduction}</p>
            <div className="hero-actions flex flex-wrap items-center">
              <DownloadLink />
              <SocialLinks />
            </div>
          </div>
          <figure className="profile">
            <div className="profile-art">
              {p.profilePhoto
                ? <PortfolioImage photo={p.profilePhoto} priority />
                : <div className="monogram" aria-hidden="true"><span>{p.initials}</span></div>}
            </div>
            <figcaption><span>{p.name}</span>{!p.profilePhoto && <small>Portrait placeholder</small>}</figcaption>
          </figure>
        </section>

        <Section id="about" label="About me" title="Systems and people">
          <div className="about-layout">
            <div className="prose">{p.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="stat"><strong>{p.experience}</strong><span>Years in software development</span></div>
          </div>
        </Section>

        <Section id="expertise" label="Technical expertise" title="How I build">
          <div className="skills">
            {p.technical.map(group => (
              <div className="skill-row" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tags flex flex-wrap">
                  {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="leadership" label="Engineering leadership" title="How I lead">
          <ul className="leadership-grid grid">
            {p.leadership.map(item => (
              <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>
            ))}
          </ul>
        </Section>

        <Section id="journey" label="Professional journey" title="Career timeline">
          <ol className="timeline">
            {p.journey.map(entry => (
              <li key={entry.id}>
                {entry.period && <p className="eyebrow">{entry.period}</p>}
                <h3>{entry.title}</h3>
                {entry.organization && <p className="organization">{entry.organization}</p>}
                <p>{entry.description}</p>
              </li>
            ))}
          </ol>
          <aside className="education" aria-labelledby="education-title">
            <div>
              <h3 id="education-title" className="eyebrow">Education</h3>
              <p className="degree">{p.education.degree}</p>
              <p>Academic focus in {p.education.focus}</p>
            </div>
            <div className="gpa"><strong>{p.education.gpa}</strong><span>GPA</span></div>
          </aside>
        </Section>

        <section className="section" id="beyond" aria-labelledby="beyond-title">
          <div className="shell">
            <div className="gallery-heading">
              <h2 id="beyond-title">Beyond Engineering</h2>
              {p.galleryIsIllustrative && <p>Illustrative photography</p>}
            </div>
            <div className="gallery-grid grid">
              {p.gallery.map((item, index) => (
                <figure key={item.title} className={index === 0 ? 'gallery-feature' : undefined}>
                  <PortfolioImage photo={item.photo} />
                  <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Section id="content" label="Content creation" title="What I share">
          <div className="projects grid">
            {p.projects.map(project => (
              <article key={project.name} className="project">
                <div className={`project-art ${project.motif}`} aria-hidden="true">
                  {project.motif === 'code' ? <span>{'{ }'}</span> : <span />}
                </div>
                <div className="project-copy">
                  <p className="eyebrow">{project.format}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.url && <a href={project.url}>{project.action ?? 'Visit project'}</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let’s talk.</h2>
              <p>Get in touch about software architecture, engineering leadership, or a project you’re building.</p>
            </div>
            <div className="contact-actions">
              <DownloadLink />
              <SocialLinks email />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell flex items-center justify-between">
          <small>{p.name}</small>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  )
}
