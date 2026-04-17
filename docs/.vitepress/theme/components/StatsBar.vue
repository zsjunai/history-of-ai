<template>
  <div class="stats-bar">
    <div class="stats-container">
      <a class="stat-item" v-for="(stat, i) in stats" :key="i" :href="stat.link">
        <span class="stat-number" :ref="el => numberRefs[i] = el as HTMLElement">0</span>
        <span class="stat-unit" v-if="stat.unit">{{ stat.unit }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { number: 83, unit: '年', label: '历史跨度', link: '/history-of-ai/timeline/' },
  { number: 10, unit: '纪', label: '本纪', link: '/history-of-ai/annals/01-dawn' },
  { number: 31, unit: '家', label: '世家', link: '/history-of-ai/houses/mit-ai-lab' },
  { number: 23, unit: '传', label: '列传', link: '/history-of-ai/biographies/turing' },
  { number: 25, unit: '卷', label: '书', link: '/history-of-ai/treatises/neural-networks' },
]

const numberRefs = ref<(HTMLElement | null)[]>([])
let observer: IntersectionObserver | null = null
let animated = false

function animateNumber(el: HTMLElement, target: number) {
  const duration = 1200
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
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
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.stat-item:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
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

.stat-item:hover .stat-label {
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .stats-container {
    gap: 12px;
  }

  .stat-number {
    font-size: 1.5em;
  }

  .stat-item {
    min-width: 60px;
    padding: 8px 10px;
  }
}
</style>
