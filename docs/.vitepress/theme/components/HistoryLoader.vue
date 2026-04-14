<template>
  <div class="history-restore" v-if="hidden" @click="show">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
    <span>显示终端</span>
  </div>
  <div class="history-loader" ref="container" v-show="!hidden">
    <div class="terminal" :class="{ 'dark-mode': isDark }">
      <div class="terminal-header">
        <span class="terminal-title">&gt; history --all</span>
        <div class="header-actions">
          <button class="header-btn" v-if="!loading" @click="replay" title="重新播放">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
            </svg>
          </button>
          <button class="header-btn" @click="hide" title="隐藏">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="terminal-body" ref="terminalBody">
        <!-- Completed lines -->
        <div v-for="(item, i) in completedItems" :key="'done-'+i" class="log-line">
          <span class="year">{{ item.year }}</span>
          <span class="separator">│</span>
          <a v-if="item.link" :href="item.link" class="event event-link">{{ item.event }}</a>
          <span v-else class="event">{{ item.event }}</span>
        </div>
        <!-- Currently typing line -->
        <div v-if="typingLine" class="log-line">
          <span class="year">{{ typingLine.year }}</span>
          <span class="separator">│</span>
          <span class="event">{{ typingText }}<span class="cursor">█</span></span>
        </div>
        <!-- Idle cursor -->
        <div class="cursor-line" v-if="loading && !typingLine">
          <span class="cursor blink">█</span>
        </div>
        <!-- Done -->
        <div class="done-line" v-if="!loading">
          <span class="prompt">&gt;</span>
          <span class="done-text">{{ totalEvents }} events loaded. History continues...</span>
          <span class="cursor blink">█</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

import { allEvents, type TimelineEvent } from '../../data/timeline'

const allItems = allEvents

const completedItems = ref<TimelineEvent[]>([])
const typingLine = ref<TimelineEvent | null>(null)
const typingText = ref('')
const loading = ref(true)
const hidden = ref(false)
const totalEvents = allItems.length
const terminalBody = ref<HTMLElement>()

function hide() {
  hidden.value = true
  clearTimeout(timer)
}

function show() {
  hidden.value = false
  replay()
}
let timer: ReturnType<typeof setTimeout>
let observer: IntersectionObserver | null = null
const container = ref<HTMLElement>()
let playing = false

function scrollToBottom() {
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

function replay() {
  clearTimeout(timer)
  playing = false
  startAnimation()
}

function startAnimation() {
  if (playing) return
  playing = true

  completedItems.value = []
  typingLine.value = null
  typingText.value = ''
  loading.value = true
  let lineIndex = 0

  function typeLine() {
    if (lineIndex >= allItems.length) {
      loading.value = false
      playing = false
      return
    }

    const item = allItems[lineIndex]
    typingLine.value = item
    typingText.value = ''
    const fullText = item.event
    let charIndex = 0

    function typeChar() {
      if (charIndex < fullText.length) {
        typingText.value = fullText.slice(0, charIndex + 1)
        charIndex++
        scrollToBottom()
        const charDelay = lineIndex < 3 ? 25 : lineIndex < 8 ? 18 : 12
        timer = setTimeout(typeChar, charDelay)
      } else {
        // Line done, move to completed
        completedItems.value.push(item)
        typingLine.value = null
        typingText.value = ''
        lineIndex++
        scrollToBottom()
        const lineDelay = lineIndex < 4 ? 120 : lineIndex < 10 ? 80 : 50
        timer = setTimeout(typeLine, lineDelay)
      }
    }

    timer = setTimeout(typeChar, 60)
  }

  timer = setTimeout(typeLine, 300)
}

function syncWidth() {
  const features = document.querySelector('.VPFeatures .container') as HTMLElement
  const terminal = container.value?.querySelector('.terminal') as HTMLElement
  if (features && terminal) {
    const rect = features.getBoundingClientRect()
    terminal.style.maxWidth = rect.width + 'px'
    terminal.style.marginLeft = 'auto'
    terminal.style.marginRight = 'auto'
  }
}

onMounted(() => {
  setTimeout(syncWidth, 100)
  window.addEventListener('resize', syncWidth)

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startAnimation()
      }
    },
    { threshold: 0.2 }
  )

  if (container.value) {
    observer.observe(container.value)
  }
})

onUnmounted(() => {
  clearTimeout(timer)
  observer?.disconnect()
  window.removeEventListener('resize', syncWidth)
})
</script>

<style scoped>
.history-restore {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0 auto 30px;
  padding: 8px 20px;
  width: fit-content;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  color: var(--vp-c-text-3);
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.history-restore:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.terminal.dark-mode {
  --t-bg: #0b1120;
  --t-header: #111827;
  --t-border: #1e293b;
  --t-text: #e2e8f0;
  --t-muted: #64748b;
  --t-separator: #334155;
  --t-divider: #1e293b;
  --t-shadow: rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(14, 165, 233, 0.05);
}

.history-loader {
  margin: 0;
  padding: 0 24px 30px;
  box-sizing: border-box;
}

.terminal {
  margin: 0 auto;
  max-width: 1100px;
  overflow: hidden;
}

.terminal {
  --t-bg: #f1f5f9;
  --t-header: #e8ecf1;
  --t-border: #d1d9e0;
  --t-text: #1e293b;
  --t-muted: #64748b;
  --t-separator: #cbd5e1;
  --t-divider: #d1d9e0;
  --t-shadow: rgba(0, 0, 0, 0.06);

  position: relative;
  background: var(--t-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--t-border);
  box-shadow: 0 8px 32px var(--t-shadow);
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--t-header);
  border-bottom: 1px solid var(--t-border);
}

.terminal-title {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: var(--t-muted);
}

.header-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--t-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.header-btn:hover {
  color: var(--vp-c-brand-1);
  background: rgba(14, 165, 233, 0.1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.terminal-body {
  padding: 16px 18px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.9;
}

.log-line {
  display: flex;
  gap: 0;
  animation: lineIn 0.3s ease-out both;
}

@keyframes lineIn {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.year {
  color: #0ea5e9;
  font-weight: 700;
  min-width: 4.5em;
  flex-shrink: 0;
}

.separator {
  color: var(--t-separator);
  margin: 0 0.6em;
  flex-shrink: 0;
}

.event {
  color: var(--t-text);
}

.event-link {
  text-decoration: none;
  color: var(--t-text);
  transition: color 0.2s ease;
}

.event-link:hover {
  color: #0ea5e9;
}

.cursor-line {
  margin-top: 2px;
}

.cursor {
  color: #0ea5e9;
  animation: blink 0.8s step-end infinite;
}

.done-line {
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid var(--t-divider);
}

.prompt {
  color: #22c55e;
  margin-right: 0.5em;
}

.done-text {
  color: var(--t-muted);
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}


</style>
