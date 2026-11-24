import type { ReactNode } from 'react'

export function Section({ id, label, title, children, className = '' }: {
  id: string
  label: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section ${className}`}>
      <div className="shell section-layout">
        <header>
          <p className="eyebrow">{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </header>
        <div className="section-content min-w-0">{children}</div>
      </div>
    </section>
  )
}
