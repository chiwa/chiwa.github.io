import type { Photo } from '../data/portfolio'

export function PortfolioImage({ photo, priority = false }: { photo: Photo; priority?: boolean }) {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      style={{ objectPosition: photo.position }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  )
}
