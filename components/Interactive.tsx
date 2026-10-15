'use client'
import { useEffect, useRef, useState } from 'react'

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* "Hello" in Archivo's variable width axis: letters near the cursor squeeze
   narrow and heavy, the rest stay wide, so the word ripples as you move. */
export function HelloWord({ text = 'Hello' }: { text?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    const zone = el?.parentElement
    if (!el || !zone || reduced()) return
    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>('span'))
    let frame = 0
    let px = -1e4
    let py = -1e4

    const apply = () => {
      frame = 0
      for (const l of letters) {
        const r = l.getBoundingClientRect()
        const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2))
        const k = Math.max(0, 1 - d / 260)
        const wdth = 125 - k * 60
        const wght = 800 + k * 100
        l.style.fontVariationSettings = `"wdth" ${wdth.toFixed(1)}, "wght" ${wght.toFixed(0)}`
      }
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      px = e.clientX
      py = e.clientY
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      px = py = -1e4
      if (!frame) frame = requestAnimationFrame(apply)
    }
    zone.addEventListener('pointermove', onMove, { passive: true })
    zone.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      zone.removeEventListener('pointermove', onMove)
      zone.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <h1 ref={ref} className="hello" aria-label={text}>
      {text.split('').map((c, i) => (
        <span key={i} aria-hidden="true" style={{ '--i': i } as React.CSSProperties}>
          {c}
        </span>
      ))}
    </h1>
  )
}

/* The photo stamp tilts toward the pointer in 3-D and settles back on leave. */
export function Stamp({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`)
      el.classList.add('is-tilting')
    }
    const onLeave = () => {
      el.style.removeProperty('--rx')
      el.style.removeProperty('--ry')
      el.classList.remove('is-tilting')
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="stamp-wrap">
      {children}
    </div>
  )
}

/* Counts up from zero the first time it scrolls into view. */
export function CountUp({ to, decimals = 0, suffix = '' }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    setValue(0)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur = 1400
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur)
        setValue(to * (1 - Math.pow(1 - t, 4)))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* Project cards lean a little as they travel through the viewport, alternating
   direction, and straighten out as they reach the middle. */
export function ScrollTilt() {
  useEffect(() => {
    if (reduced()) return
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'))
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect()
        if (r.bottom < -100 || r.top > vh + 100) return
        const off = (r.top + r.height / 2 - vh / 2) / vh
        const dir = i % 2 ? -1 : 1
        c.style.setProperty('--tilt', `${(Math.max(-1, Math.min(1, off)) * 3.2 * dir).toFixed(2)}deg`)
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return null
}
