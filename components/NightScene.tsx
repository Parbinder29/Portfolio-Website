'use client'
import { useEffect, useRef } from 'react'

/* The hero's living layer, drawn on one 2-D canvas over the static SVG night:
   sakura petals tumbling in a gusting wind, a fine rain, and lantern motes
   that trail the pointer. Clicking (or tapping) shakes loose a flurry of
   petals. Everything is sprite-based so it stays cheap on phones, and it
   stops drawing when the hero is off-screen or the tab is hidden. */

type Petal = { x: number; y: number; z: number; vx: number; vy: number; rot: number; spin: number; flip: number; flipSpeed: number; tint: number }
type Mote = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number }
type Drop = { x: number; y: number; len: number; speed: number }

function makePetalSprite(hue: number) {
  const c = document.createElement('canvas')
  c.width = c.height = 48
  const g = c.getContext('2d')!
  g.translate(24, 26)
  const grad = g.createLinearGradient(0, -20, 0, 20)
  grad.addColorStop(0, `hsl(${hue} 80% 92%)`)
  grad.addColorStop(0.6, `hsl(${hue} 75% 82%)`)
  grad.addColorStop(1, `hsl(${hue - 6} 70% 68%)`)
  g.fillStyle = grad
  /* a sakura petal: round at the base, notched at the tip */
  g.beginPath()
  g.moveTo(0, 20)
  g.bezierCurveTo(-16, 10, -15, -12, -6, -19)
  g.lineTo(0, -13)
  g.lineTo(6, -19)
  g.bezierCurveTo(15, -12, 16, 10, 0, 20)
  g.fill()
  g.strokeStyle = `hsla(${hue} 60% 60% / 0.35)`
  g.lineWidth = 1
  g.beginPath()
  g.moveTo(0, 16)
  g.lineTo(0, -8)
  g.stroke()
  return c
}

function makeGlowSprite() {
  const c = document.createElement('canvas')
  c.width = c.height = 64
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, 'rgba(255,236,200,1)')
  grad.addColorStop(0.18, 'rgba(255,190,120,0.85)')
  grad.addColorStop(0.45, 'rgba(255,120,70,0.25)')
  grad.addColorStop(1, 'rgba(255,90,60,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 64, 64)
  return c
}

export default function NightScene() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sprites = [makePetalSprite(345), makePetalSprite(352), makePetalSprite(338)]
    const glow = makeGlowSprite()

    let w = 0, h = 0, dpr = 1
    let petals: Petal[] = []
    let drops: Drop[] = []
    const motes: Mote[] = []
    const pointer = { x: -999, y: -999, px: -999, py: -999, active: false, vx: 0 }
    const lantern = { x: -999, y: -999 }
    let wind = 0
    let frame = 0
    let last = 0
    let visible = true

    const spawnPetal = (anywhere: boolean): Petal => {
      const z = 0.35 + Math.random() * 0.75
      return {
        x: Math.random() * (w + 200) - 100,
        y: anywhere ? Math.random() * h : -30 - Math.random() * 80,
        z,
        vx: 0,
        vy: (18 + Math.random() * 22) * z,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 1.6,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 1.5 + Math.random() * 2.5,
        tint: (Math.random() * sprites.length) | 0,
      }
    }
    const spawnDrop = (anywhere: boolean): Drop => ({
      x: Math.random() * (w + 300) - 150,
      y: anywhere ? Math.random() * h : -40,
      len: 10 + Math.random() * 18,
      speed: 520 + Math.random() * 380,
    })

    const resize = () => {
      const r = host.getBoundingClientRect()
      w = r.width
      h = r.height
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const petalCount = Math.round(Math.min(70, Math.max(22, w / 20)))
      const dropCount = Math.round(Math.min(90, w / 16))
      petals = Array.from({ length: petalCount }, () => spawnPetal(true))
      drops = Array.from({ length: dropCount }, () => spawnDrop(true))
      if (reduced) draw(0)
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h)
      const t = performance.now() / 1000

      /* wind: a slow sway with occasional gusts, nudged by the pointer's sweep */
      const target = Math.sin(t * 0.23) * 22 + Math.max(0, Math.sin(t * 0.61)) ** 6 * 60 + pointer.vx * 0.6
      wind += (target - wind) * Math.min(1, dt * 1.5)
      pointer.vx *= Math.pow(0.02, dt)

      /* rain — thin, cold, behind the petals */
      ctx.strokeStyle = 'rgba(170,190,230,0.16)'
      ctx.lineWidth = 1
      ctx.beginPath()
      const slant = 0.18 + wind * 0.003
      for (const d of drops) {
        d.y += d.speed * dt
        d.x += d.speed * slant * dt
        if (d.y > h + 20 || d.x > w + 160) Object.assign(d, spawnDrop(false))
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.len * slant, d.y - d.len)
      }
      ctx.stroke()

      /* petals */
      for (const p of petals) {
        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const dist2 = dx * dx + dy * dy
        if (pointer.active && dist2 < 14000) {
          /* the pointer parts the petals around it */
          const f = (1 - dist2 / 14000) * 160 * dt
          const inv = 1 / Math.sqrt(dist2 + 1)
          p.vx += dx * inv * f * 8
          p.vy += dy * inv * f * 4
        }
        p.vx += (wind * p.z - p.vx) * Math.min(1, dt * 0.9)
        p.vy += ((18 + 30 * p.z) - p.vy) * Math.min(1, dt * 0.6)
        p.x += (p.vx + Math.sin(t * 1.3 + p.flip) * 14 * p.z) * dt
        p.y += p.vy * dt
        p.rot += p.spin * dt
        p.flip += p.flipSpeed * dt
        if (p.y > h + 30 || p.x > w + 120 || p.x < -140) Object.assign(p, spawnPetal(false))

        const size = 9 + 13 * p.z
        ctx.save()
        ctx.globalAlpha = 0.45 + 0.55 * p.z
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.scale(1, Math.cos(p.flip) * 0.85 + 0.15 * Math.sign(Math.cos(p.flip) || 1))
        ctx.drawImage(sprites[p.tint], -size / 2, -size / 2, size, size)
        ctx.restore()
      }

      /* lantern motes — warm light that follows the pointer and drifts up */
      ctx.globalCompositeOperation = 'lighter'
      if (pointer.active) {
        lantern.x += (pointer.x - lantern.x) * Math.min(1, dt * 5)
        lantern.y += (pointer.y - lantern.y) * Math.min(1, dt * 5)
        const flicker = 0.85 + Math.sin(t * 11) * 0.06 + Math.sin(t * 17.3) * 0.05
        ctx.globalAlpha = 0.5 * flicker
        ctx.drawImage(glow, lantern.x - 60, lantern.y - 60, 120, 120)
      }
      for (let i = motes.length - 1; i >= 0; i--) {
        const m = motes[i]
        m.life += dt
        if (m.life > m.max) {
          motes.splice(i, 1)
          continue
        }
        m.vy -= 14 * dt
        m.x += (m.vx + Math.sin(t * 3 + i) * 6) * dt
        m.y += m.vy * dt
        const k = 1 - m.life / m.max
        ctx.globalAlpha = k * k
        const s = m.size * (0.6 + k * 0.4)
        ctx.drawImage(glow, m.x - s / 2, m.y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (now: number) => {
      frame = 0
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016)
      last = now
      draw(dt)
      schedule()
    }
    const schedule = () => {
      if (!reduced && visible && !document.hidden && !frame) {
        last = performance.now()
        frame = requestAnimationFrame(loop)
      }
    }

    const toLocal = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onMove = (e: PointerEvent) => {
      const { x, y } = toLocal(e)
      if (!pointer.active) {
        lantern.x = x
        lantern.y = y
      }
      pointer.vx += (x - pointer.x) * (pointer.active ? 1.2 : 0)
      pointer.vx = Math.max(-260, Math.min(260, pointer.vx))
      const moved = Math.hypot(x - pointer.px, y - pointer.py)
      if (moved > 14 && motes.length < 60) {
        motes.push({ x, y, vx: (Math.random() - 0.5) * 30, vy: -10 - Math.random() * 20, life: 0, max: 1 + Math.random() * 1.2, size: 14 + Math.random() * 22 })
        pointer.px = x
        pointer.py = y
      }
      pointer.x = x
      pointer.y = y
      pointer.active = e.pointerType === 'mouse'
    }
    const onLeave = () => {
      pointer.active = false
      pointer.x = pointer.y = -999
    }
    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('a,button')) return
      const { x, y } = toLocal(e)
      for (let i = 0; i < 18; i++) {
        const p = spawnPetal(false)
        const a = Math.random() * Math.PI * 2
        const sp = 80 + Math.random() * 220
        Object.assign(p, { x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 60 })
        petals.push(p)
      }
      if (petals.length > 140) petals.splice(0, petals.length - 140)
      for (let i = 0; i < 8; i++) {
        motes.push({ x, y, vx: (Math.random() - 0.5) * 120, vy: -30 - Math.random() * 60, life: 0, max: 0.8 + Math.random(), size: 16 + Math.random() * 26 })
      }
      if (reduced) draw(0)
    }
    const onVisibility = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame)
        frame = 0
      } else schedule()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(host)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true
      if (!visible && frame) {
        cancelAnimationFrame(frame)
        frame = 0
      } else schedule()
    })
    io.observe(host)
    host.addEventListener('pointermove', onMove, { passive: true })
    host.addEventListener('pointerleave', onLeave, { passive: true })
    host.addEventListener('pointerdown', onDown, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    resize()
    schedule()
    canvas.classList.add('is-ready')

    return () => {
      if (frame) cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      host.removeEventListener('pointerdown', onDown)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="night-canvas" aria-hidden="true" />
}
