'use client'
import { useEffect } from 'react'

/* One observer for the whole page: anything marked data-reveal fades in once. */
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.classList.add('in')
            io.unobserve(el)
            /* once it has landed, drop the reveal styles so hover transitions run undelayed */
            setTimeout(() => el.removeAttribute('data-reveal'), 1800)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
