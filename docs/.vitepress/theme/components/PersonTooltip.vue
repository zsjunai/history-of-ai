<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { people } from '../../data/people'

const props = defineProps<{
  id: string
}>()

const { lang } = useData()
const isEn = computed(() => lang.value === 'en-US')

const person = computed(() => people[props.id])

// 行内显示名：英文版用 englishName，中文版用 name
const inlineName = computed(() =>
  isEn.value ? person.value?.englishName ?? person.value?.name : person.value?.name
)

// 卡片标题（大号）与副标题（小号）：英文版反转
const cardPrimary = computed(() =>
  isEn.value ? person.value?.englishName : person.value?.name
)
const cardSecondary = computed(() =>
  isEn.value ? person.value?.name : person.value?.englishName
)

const cardNationality = computed(() =>
  isEn.value
    ? person.value?.nationality_en ?? person.value?.nationality
    : person.value?.nationality
)
const cardField = computed(() =>
  isEn.value
    ? person.value?.field_en ?? person.value?.field
    : person.value?.field
)
const cardBio = computed(() =>
  isEn.value
    ? person.value?.bio_en ?? person.value?.bio
    : person.value?.bio
)

const lifespan = computed(() => {
  if (!person.value) return ''
  const { born, died } = person.value
  return died ? `${born}–${died}` : `${born}–`
})

const showCard = ref(false)
const cardStyle = ref<Record<string, string>>({})
const arrowStyle = ref<Record<string, string>>({})
const nameRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

function onEnter() {
  showCard.value = true
  // 等 DOM 更新后再计算位置
  requestAnimationFrame(() => {
    if (!nameRef.value || !cardRef.value) return
    const rect = nameRef.value.getBoundingClientRect()
    const cardRect = cardRef.value.getBoundingClientRect()
    const viewportW = window.innerWidth
    const viewportH = window.innerHeight

    // 默认在上方显示
    let top = rect.top - cardRect.height - 8
    let showBelow = false

    // 如果上方空间不够，改为下方
    if (top < 8) {
      top = rect.bottom + 8
      showBelow = true
    }

    // 水平居中对齐，但不超出视口
    let left = rect.left + rect.width / 2 - cardRect.width / 2
    if (left < 8) left = 8
    if (left + cardRect.width > viewportW - 8) left = viewportW - cardRect.width - 8

    cardStyle.value = {
      top: `${top}px`,
      left: `${left}px`,
    }

    // 箭头位置
    const arrowLeft = rect.left + rect.width / 2 - left
    if (showBelow) {
      arrowStyle.value = {
        top: '-6px',
        bottom: 'auto',
        left: `${arrowLeft}px`,
        borderTopColor: 'transparent',
        borderBottomColor: 'var(--vp-c-divider)',
      }
    } else {
      arrowStyle.value = {
        top: 'auto',
        bottom: '-6px',
        left: `${arrowLeft}px`,
        borderTopColor: 'var(--vp-c-divider)',
        borderBottomColor: 'transparent',
      }
    }
  })
}

function onLeave() {
  showCard.value = false
}
</script>

<template>
  <span v-if="person" class="person-wrapper" @mouseenter="onEnter" @mouseleave="onLeave">
    <span ref="nameRef" class="person-name">{{ inlineName }}</span>
    <Teleport to="body">
      <span v-show="showCard" ref="cardRef" class="person-card" :style="cardStyle">
        <span class="person-card-arrow" :style="arrowStyle"></span>
        <span class="person-card-header">
          <span v-if="person.avatar" class="person-avatar">
            <img :src="person.avatar" :alt="inlineName" />
          </span>
          <span class="person-card-info">
            <span class="person-card-name">{{ cardPrimary }}</span>
            <span class="person-card-english">{{ cardSecondary }}</span>
            <span class="person-card-meta">{{ cardNationality }} · {{ cardField }}</span>
            <span class="person-card-life">{{ lifespan }}</span>
          </span>
        </span>
        <span class="person-card-bio">{{ cardBio }}</span>
      </span>
    </Teleport>
  </span>
  <span v-else class="person-unknown">{{ id }}</span>
</template>

<style scoped>
.person-wrapper {
  display: inline;
}

.person-name {
  color: var(--vp-c-brand-1);
  cursor: help;
  border-bottom: 1px dashed var(--vp-c-brand-1);
  transition: color 0.2s;
}

.person-name:hover {
  color: var(--vp-c-brand-2);
}

.person-card {
  position: fixed;
  width: 320px;
  padding: 16px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 9999;
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.person-card-arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
}

.person-card-header {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.person-avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.person-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-card-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.person-card-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.person-card-english {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.person-card-meta {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.person-card-life {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.person-card-bio {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 10px;
}

.person-unknown {
  color: var(--vp-c-danger-1);
  text-decoration: underline wavy;
}

@media (max-width: 768px) {
  .person-card {
    width: 280px;
  }
}
</style>
