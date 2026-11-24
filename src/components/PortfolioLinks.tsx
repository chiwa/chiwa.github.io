import { portfolio } from '../data/portfolio'

export function DownloadLink() {
  return (
    <a className="button button-primary" href={portfolio.links.cv} download>
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
      </svg>
      {portfolio.links.cvIsProfile ? 'Download CV summary' : 'Download CV'}
    </a>
  )
}

export function SocialLinks({ email = false }: { email?: boolean }) {
  return (
    <ul className="social-links flex flex-wrap items-center" aria-label="Contact links">
      <li><a href={portfolio.links.linkedin}>LinkedIn</a></li>
      <li><a href={portfolio.links.github}>GitHub</a></li>
      {email && <li><a href={`mailto:${portfolio.links.email}`}>Email</a></li>}
    </ul>
  )
}
