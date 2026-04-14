<template>
  <div class="timeline-page">
    <div v-for="era in timeline" :key="era.name" class="era">
      <h2><a :href="era.link">{{ era.name }}（{{ era.period }}）</a></h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>事件</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in era.events" :key="i">
            <td><strong>{{ item.year }}</strong></td>
            <td>
              <a v-if="item.link" :href="item.link" class="event-link">{{ item.event }}</a>
              <span v-else>{{ item.event }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { timeline } from '../../data/timeline'
</script>

<style scoped>
.era h2 a {
  color: inherit;
  text-decoration: none;
}

.era h2 a:hover {
  color: var(--vp-c-brand-1);
}

.event-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.event-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
