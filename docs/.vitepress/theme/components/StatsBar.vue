<template>
  <div class="stats-bar">
    <div class="stats-container">
      <div class="stat-item" v-for="(stat, i) in stats" :key="i">
        <span class="stat-number" :ref="el => numberRefs[i] = el as HTMLElement">0</span>
        <span class="stat-unit" v-if="stat.unit">{{ stat.unit }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { number: 83, unit: '年', label: '历史跨度' },
  { number: 9, unit: '个', label: '时代' },
  { number: 23, unit: '位', label: '关键人物' },
  { number: 14, unit: '家', label: '机构' },
  { number: 25, unit: '篇', label: '专题' },
]

const numberRefs = ref<(HTMLElement | null)[]>([])
let observer: IntersectionObserver | null = null
let animated = false

function animateNumber(el: HTMLElement, target: number) {
  const duration = 1200
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    el.textContent = Math.round(eased * target).toString()
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true
        stats.forEach((stat, i) => {
          const el = numberRefs.value[i]
          if (el) {
            setTimeout(() => animateNumber(el, stat.number), i * 100)
          }
        })
      }
    },
    { threshold: 0.5 }
  )

  if (numberRefs.value[0]?.parentElement?.parentElement) {
    observer.observe(numberRefs.value[0].parentElement.parentElement)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.stats-bar {
  padding: 16px 24px 24px;
  text-align: center;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.stat-number {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 2em;
  font-weight: 800;
  background: linear-gradient(135deg, var(--vp-c-brand-1), #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.stat-unit {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
  margin-top: 2px;
}

.stat-label {
  font-size: 0.8em;
  color: var(--vp-c-text-3);
  margin-top: 4px;
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .stats-container {
    gap: 16px;
  }

  .stat-number {
    font-size: 1.5em;
  }

  .stat-item {
    min-width: 60px;
  }
}
</style>
