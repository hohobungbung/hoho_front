import { useState } from 'react'

export default function ImgWithSkeleton({ src, alt, style, imgStyle }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="img-skeleton-wrap" style={style}>
      {!loaded && <div className="img-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        style={{ ...imgStyle, opacity: loaded ? 1 : 0, transition: 'opacity .3s ease' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  )
}
