<template>
  <canvas ref="canvas" class="particle-canvas" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const canvas = ref<HTMLCanvasElement>()
let animationId = 0
let particles: Particle[] = []
let mouse = { x: -1000, y: -1000 }
let ctx: CanvasRenderingContext2D | null = null
let W = 0
let H = 0

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  color: string
}

const darkColors = ['#0ea5e9', '#38bdf8', '#7c3aed', '#a78bfa', '#06b6d4']
const lightColors = ['#0284c7', '#0369a1', '#6d28d9', '#7c3aed', '#0891b2']

function getColors() {
  return document.documentElement.classList.contains('dark') ? darkColors : lightColors
}

function getAlpha() {
  return document.documentElement.classList.contains('dark')
    ? Math.random() * 0.3 + 0.15
    : Math.random() * 0.2 + 0.15
}

function createParticles() {
  const count = Math.min(Math.floor((W * H) / 10000), 100)
  const colors = getColors()
  particles = []
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      alpha: getAlpha(),
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }
}

function draw() {
  if (!ctx) return

  ctx.clearRect(0, 0, W, H)

  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > W) p.vx *= -1
    if (p.y < 0 || p.y > H) p.vy *= -1

    const dx = p.x - mouse.x
    const dy = p.y - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 120) {
      p.vx += (dx / dist) * 0.15
      p.vy += (dy / dist) * 0.15
    }
    p.vx *= 0.995
    p.vy *= 0.995

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.globalAlpha = p.alpha
    ctx.fill()
  }

  const maxDist = 140
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < maxDist) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = particles[i].color
        const isDarkMode = document.documentElement.classList.contains('dark')
        ctx.globalAlpha = (1 - dist / maxDist) * (isDarkMode ? 0.1 : 0.12)
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
    }
  }

  ctx.globalAlpha = 1
  animationId = requestAnimationFrame(draw)
}

function handleMouse(e: MouseEvent) {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function init() {
  const el = canvas.value
  if (!el) return

  // Find and attach to VPHero
  const hero = document.querySelector('.VPHero') as HTMLElement
  if (!hero) return

  // Move canvas into the hero element so absolute positioning works
  if (el.parentElement !== hero) {
    hero.appendChild(el)
  }

  const dpr = window.devicePixelRatio || 1
  W = hero.offsetWidth
  H = hero.offsetHeight

  if (W === 0 || H === 0) return

  el.width = W * dpr
  el.height = H * dpr
  el.style.width = W + 'px'
  el.style.height = H + 'px'

  ctx = el.getContext('2d')
  if (!ctx) return
  ctx.scale(dpr, dpr)

  createParticles()
  cancelAnimationFrame(animationId)
  draw()
}

let resizeTimer: ReturnType<typeof setTimeout>
function handleResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(init, 300)
}

onMounted(async () => {
  await nextTick()
  // Delay to ensure VPHero is rendered and has dimensions
  setTimeout(init, 200)
  window.addEventListener('resize', handleResize)
  document.addEventListener('mousemove', handleMouse)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('mousemove', handleMouse)
})
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}
</style>
