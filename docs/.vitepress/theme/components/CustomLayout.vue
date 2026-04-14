<template>
  <Layout>
    <template #home-hero-before>
      <ParticleNetwork />
    </template>
    <template #home-hero-image>
      <AiRobot />
    </template>
    <template #home-hero-after>
      <StatsBar />
    </template>
    <template #home-features-before>
      <HistoryLoader />
    </template>
    <template #home-features-after>
      <HomeFooter />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ParticleNetwork from './ParticleNetwork.vue'
import AiRobot from './AiRobot.vue'
import StatsBar from './StatsBar.vue'
import HistoryLoader from './HistoryLoader.vue'
import HomeFooter from './HomeFooter.vue'

const { Layout } = DefaultTheme
</script>
