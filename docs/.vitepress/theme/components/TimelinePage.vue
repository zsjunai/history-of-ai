<template>
  <div class="timeline-page">
    <!-- 类型图例 -->
    <div class="legend">
      <span v-for="(label, key) in TYPE_LABELS" :key="key" class="legend-item">
        <span class="legend-icon">{{ ICONS[key] }}</span>{{ label }}
      </span>
      <span class="legend-divider"></span>
      <span class="legend-item">
        <span class="dot-sample milestone-sample"></span>里程碑
      </span>
    </div>

    <div
      v-for="(era, idx) in timeline"
      :key="era.name"
      class="era"
      :style="{ '--era-hue': hueFor(idx) }"
    >
      <div class="era-header">
        <h2>
          <a :href="withBaseUrl(era.link)">
            <span class="era-name">{{ era.name }}</span>
            <span class="era-period">{{ era.period }}</span>
          </a>
        </h2>
      </div>

      <ol class="event-list">
        <li
          v-for="(item, i) in era.events"
          :key="i"
          :class="['event-item', `imp-${item.importance || 'minor'}`]"
        >
          <span class="event-year">
            {{ item.year }}<span v-if="item.month" class="event-month">·{{ item.month }}月</span>
          </span>
          <span
            class="event-dot"
            :class="{ 'is-milestone': item.importance === 'milestone' }"
            :title="item.type ? TYPE_LABELS[item.type] : ''"
          ></span>
          <span class="event-icon">{{ iconFor(item.type) }}</span>
          <span class="event-text">
            <a v-if="item.link" :href="withBaseUrl(item.link)">{{ item.event }}</a>
            <span v-else>{{ item.event }}</span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import { timeline, type EventType } from '../../data/timeline'

const ICONS: Record<EventType, string> = {
  paper: '📄',
  product: '📦',
  company: '🏢',
  policy: '⚖️',
  person: '👤',
  event: '🎯',
  milestone: '⭐',
}

const TYPE_LABELS: Record<EventType, string> = {
  paper: '论文',
  product: '产品',
  company: '机构',
  policy: '政策',
  person: '人物',
  event: '事件',
  milestone: '里程碑',
}

// 10 个时代的色相（覆盖整个色环）
const HUES = [200, 180, 220, 30, 0, 260, 280, 145, 320, 15]

function iconFor(type?: EventType): string {
  return type ? ICONS[type] : '·'
}

function hueFor(idx: number): number {
  return HUES[idx % HUES.length]
}

function withBaseUrl(link: string): string {
  return withBase(link)
}
</script>

<style scoped>
.timeline-page {
  max-width: 880px;
  margin: 0 auto;
  padding: 8px 0 32px;
}

/* ========== 图例 ========== */
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 14px 18px;
  margin-bottom: 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.legend-icon {
  font-size: 1.1em;
}

.legend-divider {
  width: 1px;
  background: var(--vp-c-divider);
  align-self: stretch;
}

.dot-sample {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  margin-right: 4px;
}

.milestone-sample {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

/* ========== 时代分段 ========== */
.era {
  margin-bottom: 56px;
}

.era-header {
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 2px solid hsl(var(--era-hue), 65%, 55%);
}

.era-header h2 {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.era-header h2 a {
  color: hsl(var(--era-hue), 60%, 42%);
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  transition: opacity 0.2s ease;
}

.dark .era-header h2 a {
  color: hsl(var(--era-hue), 70%, 68%);
}

.era-header h2 a:hover {
  opacity: 0.75;
}

.era-period {
  font-size: 0.65em;
  font-weight: 400;
  color: var(--vp-c-text-3);
  letter-spacing: 0.05em;
  font-feature-settings: "tnum";
}

/* ========== 事件列表（时间轴）========== */
.event-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

/* 左侧竖线，对齐圆点中心 */
.event-list::before {
  content: '';
  position: absolute;
  left: 75px;
  top: 14px;
  bottom: 14px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    hsl(var(--era-hue), 60%, 65%) 0%,
    hsl(var(--era-hue), 60%, 65%, 0.3) 100%
  );
  border-radius: 1px;
}

.event-item {
  position: relative;
  display: grid;
  grid-template-columns: 68px 14px 24px 1fr;
  gap: 8px 10px;
  align-items: baseline;
  padding: 9px 0;
}

.event-year {
  text-align: right;
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-feature-settings: "tnum";
  font-size: 0.9em;
  white-space: nowrap;
}

.event-month {
  font-weight: 400;
  font-size: 0.85em;
  color: var(--vp-c-text-3);
  margin-left: 2px;
}

.event-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid hsl(var(--era-hue), 50%, 55%);
  margin-top: 7px;
  position: relative;
  z-index: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-item:hover .event-dot {
  transform: scale(1.3);
  background: hsl(var(--era-hue), 60%, 60%);
}

.event-dot.is-milestone {
  width: 14px;
  height: 14px;
  margin-left: -1.5px;
  margin-top: 6px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  border: none;
  box-shadow: 0 0 0 3px hsla(var(--era-hue), 60%, 50%, 0.25);
}

.event-icon {
  font-size: 1em;
  text-align: center;
  line-height: 1.6;
  user-select: none;
}

.event-text {
  line-height: 1.7;
}

.event-text a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.event-text a:hover {
  color: hsl(var(--era-hue), 60%, 50%);
  border-bottom-color: hsl(var(--era-hue), 60%, 50%);
}

.dark .event-text a:hover {
  color: hsl(var(--era-hue), 70%, 68%);
  border-bottom-color: hsl(var(--era-hue), 70%, 68%);
}

/* ========== 重要程度差异化 ========== */
.imp-milestone .event-text {
  font-size: 1.04em;
  font-weight: 600;
}

.imp-milestone .event-text a {
  color: hsl(var(--era-hue), 60%, 38%);
}

.dark .imp-milestone .event-text a {
  color: hsl(var(--era-hue), 70%, 72%);
}

.imp-major .event-text {
  font-size: 0.96em;
}

.imp-minor .event-text {
  font-size: 0.92em;
  opacity: 0.85;
}

/* ========== 移动端 ========== */
@media (max-width: 640px) {
  .event-item {
    grid-template-columns: 56px 12px 20px 1fr;
    gap: 6px 8px;
    padding: 8px 0;
  }
  .event-list::before {
    left: 62px;
  }
  .event-year {
    font-size: 0.82em;
  }
  .event-text {
    font-size: 0.9em;
  }
  .imp-milestone .event-text {
    font-size: 0.95em;
  }
  .imp-minor .event-text {
    font-size: 0.85em;
  }
  .legend {
    font-size: 0.78em;
    gap: 10px;
    padding: 10px 12px;
  }
}
</style>
