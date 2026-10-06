import { useEffect } from 'react'

const SITE_NAME = 'Parth Majithiya'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Lightweight SEO helper — updates document title and meta description /
 * Open Graph tags per route. Avoids pulling in react-helmet-async.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    if (description) {
      setMeta('description', description)
      setMeta('og:title', fullTitle, 'property')
      setMeta('og:description', description, 'property')
      setMeta('twitter:title', fullTitle)
      setMeta('twitter:description', description)
    }
  }, [title, description])

  return null
}
