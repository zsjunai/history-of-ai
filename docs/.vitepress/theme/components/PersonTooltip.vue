<script setup lang="ts">
import { computed } from 'vue'
import { people } from '../../data/people'

const props = defineProps<{
  id: string
}>()

const person = computed(() => people[props.id])

const lifespan = computed(() => {
  if (!person.value) return ''
  const { born, died } = person.value
  return died ? `${born}–${died}` : `${born}–`
})
</script>

<template>
  <span v-if="person" class="person-wrapper">
    <span class="person-name">{{ person.name }}</span>
    <span class="person-card">
      <span class="person-card-header">
        <span v-if="person.avatar" class="person-avatar">
          <img :src="person.avatar" :alt="person.name" />
        </span>
        <span class="person-card-info">
          <span class="person-card-name">{{ person.name }}</span>
          <span class="person-card-english">{{ person.englishName }}</span>
          <span class="person-card-meta">{{ person.nationality }} · {{ person.field }}</span>
          <span class="person-card-life">{{ lifespan }}</span>
        </span>
      </span>
      <span class="person-card-bio">{{ person.bio }}</span>
    </span>
  </span>
  <span v-else class="person-unknown">{{ id }}</span>
</template>

<style scoped>
.person-wrapper {
  position: relative;
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
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  padding: 16px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 100;
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
}

.person-wrapper:hover .person-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.person-card::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--vp-c-divider);
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

/* 边缘防溢出 */
@media (max-width: 768px) {
  .person-card {
    width: 280px;
    left: 0;
    transform: none;
  }
  .person-card::after {
    left: 24px;
    transform: none;
  }
}
</style>
