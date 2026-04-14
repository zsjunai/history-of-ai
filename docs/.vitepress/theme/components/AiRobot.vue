<template>
  <div class="robot-wrapper" ref="wrapper" :style="robotStyle" @click="togglePause"
       :class="[action, { paused }]">
    <svg class="robot" :class="{ 'facing-left': facingLeft }" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Antenna -->
      <line x1="100" y1="28" x2="100" y2="48" stroke="var(--r-accent)" stroke-width="2.5" stroke-linecap="round"/>
      <circle class="antenna-dot" cx="100" cy="24" r="5" fill="var(--r-glow)"/>

      <!-- Head -->
      <rect x="60" y="48" width="80" height="56" rx="14" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="2"/>

      <!-- Eyes -->
      <circle class="eye" cx="82" cy="72" r="8" fill="var(--r-bg)"/>
      <circle class="pupil" cx="84" cy="72" r="4" fill="var(--r-glow)"/>
      <circle class="eye" cx="118" cy="72" r="8" fill="var(--r-bg)"/>
      <circle class="pupil" cx="120" cy="72" r="4" fill="var(--r-glow)"/>

      <!-- Mouth -->
      <rect class="mouth" x="80" y="88" width="40" height="6" rx="3" fill="var(--r-glow)" opacity="0.6"/>

      <!-- Neck -->
      <rect x="92" y="104" width="16" height="10" rx="3" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>

      <!-- Body -->
      <rect x="55" y="114" width="90" height="52" rx="12" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="2"/>

      <!-- Chest display -->
      <rect x="75" y="124" width="50" height="18" rx="4" fill="var(--r-bg)"/>
      <line class="scan-line" x1="78" y1="133" x2="122" y2="133" stroke="var(--r-glow)" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>

      <!-- Chest dots -->
      <circle class="chest-dot d1" cx="85" cy="150" r="2.5" fill="var(--r-glow)"/>
      <circle class="chest-dot d2" cx="100" cy="150" r="2.5" fill="var(--r-accent)"/>
      <circle class="chest-dot d3" cx="115" cy="150" r="2.5" fill="var(--r-glow)"/>

      <!-- Arms -->
      <g class="left-arm-group">
        <rect x="35" y="118" width="16" height="40" rx="8" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
        <circle cx="43" cy="162" r="6" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
      </g>
      <g class="right-arm-group">
        <rect x="149" y="118" width="16" height="40" rx="8" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
        <circle cx="157" cy="162" r="6" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
      </g>

      <!-- Legs -->
      <g class="left-leg-group">
        <rect x="72" y="166" width="18" height="20" rx="6" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
        <ellipse cx="81" cy="188" rx="11" ry="4" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
      </g>
      <g class="right-leg-group">
        <rect x="110" y="166" width="18" height="20" rx="6" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
        <ellipse cx="119" cy="188" rx="11" ry="4" fill="var(--r-body)" stroke="var(--r-accent)" stroke-width="1.5"/>
      </g>

      <!-- Shadow -->
      <ellipse class="shadow" cx="100" cy="196" rx="40" ry="4" fill="var(--r-accent)" opacity="0.1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'

const wrapper = ref<HTMLElement>()
const facingLeft = ref(false)
const paused = ref(false)
const action = ref<'walk' | 'run' | 'jump' | 'flip' | 'spin' | 'wave' | 'idle'>('walk')

const pos = reactive({ x: 0, y: 0 })
let vx = 0.5
let animId = 0
let containerW = 300
let containerH = 200
const robotSize = 180
let actionTimer: ReturnType<typeof setTimeout>
let groundY = 0
let jumpVy = 0
let isJumping = false

const robotStyle = ref({})

function updateStyle() {
  robotStyle.value = { transform: `translate(${pos.x}px, ${pos.y}px)` }
}

function pickNextAction() {
  const all: Array<typeof action.value> = ['walk', 'walk', 'run', 'jump', 'flip', 'spin', 'wave', 'idle']
  const next = all[Math.floor(Math.random() * all.length)]
  action.value = next

  const dir = vx >= 0 ? 1 : -1
  if (next === 'run') vx = dir * 1.5
  else if (next === 'walk') vx = dir * 0.5
  else if (next === 'idle' || next === 'wave' || next === 'spin') vx = 0
  else if (next === 'jump') {
    vx = dir * 0.3
    jumpVy = -4.5
    isJumping = true
    groundY = pos.y
  } else if (next === 'flip') {
    vx = dir * 0.5
    jumpVy = -5.5
    isJumping = true
    groundY = pos.y
  }

  const dur = next === 'jump' ? 900 : next === 'flip' ? 1000 : next === 'spin' ? 1200 : next === 'wave' ? 2500 : next === 'idle' ? 2000 : 2000 + Math.random() * 3000
  actionTimer = setTimeout(pickNextAction, dur)
}

function animate() {
  if (!paused.value) {
    pos.x += vx
    if (isJumping) {
      jumpVy += 0.16
      pos.y += jumpVy
      if (pos.y >= groundY) { pos.y = groundY; isJumping = false; jumpVy = 0 }
    }
    if (pos.x > containerW - robotSize || pos.x < 0) {
      vx *= -1; facingLeft.value = vx < 0
      pos.x = Math.max(0, Math.min(pos.x, containerW - robotSize))
    }
    updateStyle()
  }
  animId = requestAnimationFrame(animate)
}

function togglePause() {
  paused.value = !paused.value
  if (!paused.value) pickNextAction()
  else { clearTimeout(actionTimer); action.value = 'idle' }
}

function measureContainer() {
  const el = wrapper.value?.parentElement
  if (el) { containerW = el.clientWidth; containerH = el.clientHeight }
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    measureContainer()
    groundY = Math.max(containerH * 0.35, 0)
    pos.x = Math.random() * Math.max(containerW - robotSize, 0)
    pos.y = groundY
    updateStyle()
    animId = requestAnimationFrame(animate)
    pickNextAction()
  }, 200)
  window.addEventListener('resize', measureContainer)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  clearTimeout(actionTimer)
  window.removeEventListener('resize', measureContainer)
})
</script>

<style scoped>
.robot-wrapper {
  position: absolute; top: 0; left: 0;
  cursor: pointer; will-change: transform; z-index: 10;
}
.robot-wrapper:hover { filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.5)); }

.robot {
  --r-accent: #0ea5e9; --r-glow: #38bdf8;
  --r-body: #f0f7ff; --r-bg: #ffffff;
  width: 180px; height: 180px;
}
.robot.facing-left { transform: scaleX(-1); }

:global(.dark) .robot {
  --r-accent: #38bdf8; --r-glow: #7dd3fc;
  --r-body: #1a2236; --r-bg: #0b1120;
}

/* Always-on */
.antenna-dot { animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
.eye { animation: blink 4s ease-in-out infinite; }
@keyframes blink { 0%,42%,44%,100%{ry:8} 43%{ry:1} }
.scan-line { animation: scan 2s ease-in-out infinite; }
@keyframes scan { 0%,100%{opacity:0.3} 50%{opacity:0.9} }
.chest-dot.d1 { animation: dp 1.5s ease-in-out infinite 0s; }
.chest-dot.d2 { animation: dp 1.5s ease-in-out infinite 0.3s; }
.chest-dot.d3 { animation: dp 1.5s ease-in-out infinite 0.6s; }
@keyframes dp { 0%,100%{opacity:0.3} 50%{opacity:1} }

/* Transform origins at joints */
.left-arm-group { transform-origin: 43px 118px; }
.right-arm-group { transform-origin: 157px 118px; }
.left-leg-group { transform-origin: 81px 166px; }
.right-leg-group { transform-origin: 119px 166px; }

/* ===== WALK ===== */
.walk .robot { animation: walkBob 0.5s ease-in-out infinite; }
@keyframes walkBob {
  0%,100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(1.5deg); }
  75% { transform: translateY(-2px) rotate(-1.5deg); }
}
.walk .robot.facing-left { animation: walkBobL 0.5s ease-in-out infinite; }
@keyframes walkBobL {
  0%,100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
  25% { transform: scaleX(-1) translateY(-2px) rotate(1.5deg); }
  75% { transform: scaleX(-1) translateY(-2px) rotate(-1.5deg); }
}
.walk .left-arm-group { animation: armFwd 0.5s ease-in-out infinite; }
.walk .right-arm-group { animation: armBack 0.5s ease-in-out infinite; }
.walk .left-leg-group { animation: legFwd 0.5s ease-in-out infinite; }
.walk .right-leg-group { animation: legBack 0.5s ease-in-out infinite; }
@keyframes armFwd { 0%,100%{transform:rotate(0)} 50%{transform:rotate(15deg)} }
@keyframes armBack { 0%,100%{transform:rotate(0)} 50%{transform:rotate(-15deg)} }
@keyframes legFwd { 0%,100%{transform:rotate(0)} 50%{transform:rotate(12deg)} }
@keyframes legBack { 0%,100%{transform:rotate(0)} 50%{transform:rotate(-12deg)} }

/* ===== RUN ===== */
.run .robot { animation: runBob 0.3s ease-in-out infinite; }
@keyframes runBob {
  0%,100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(3deg); }
  75% { transform: translateY(-5px) rotate(-3deg); }
}
.run .robot.facing-left { animation: runBobL 0.3s ease-in-out infinite; }
@keyframes runBobL {
  0%,100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
  25% { transform: scaleX(-1) translateY(-5px) rotate(3deg); }
  75% { transform: scaleX(-1) translateY(-5px) rotate(-3deg); }
}
.run .left-arm-group { animation: rArmF 0.3s ease-in-out infinite; }
.run .right-arm-group { animation: rArmB 0.3s ease-in-out infinite; }
.run .left-leg-group { animation: rLegF 0.3s ease-in-out infinite; }
.run .right-leg-group { animation: rLegB 0.3s ease-in-out infinite; }
@keyframes rArmF { 0%,100%{transform:rotate(0)} 50%{transform:rotate(30deg)} }
@keyframes rArmB { 0%,100%{transform:rotate(0)} 50%{transform:rotate(-30deg)} }
@keyframes rLegF { 0%,100%{transform:rotate(0)} 50%{transform:rotate(25deg)} }
@keyframes rLegB { 0%,100%{transform:rotate(0)} 50%{transform:rotate(-25deg)} }

/* ===== JUMP ===== */
.jump .robot { animation: jumpSq 0.9s ease-out; }
@keyframes jumpSq {
  0%{transform:scaleY(0.85) scaleX(1.1)} 20%{transform:scaleY(1.1) scaleX(0.95)}
  60%{transform:scaleY(1.02) scaleX(0.99)} 100%{transform:scaleY(1) scaleX(1)}
}
.jump .robot.facing-left { animation: jumpSqL 0.9s ease-out; }
@keyframes jumpSqL {
  0%{transform:scaleX(-1) scaleY(0.85)} 20%{transform:scaleX(-1) scaleY(1.1)}
  60%{transform:scaleX(-1) scaleY(1.02)} 100%{transform:scaleX(-1) scaleY(1)}
}
.jump .left-arm-group, .jump .right-arm-group { animation: jArm 0.9s ease-out; }
@keyframes jArm { 0%{transform:rotate(0)} 25%{transform:rotate(-50deg)} 100%{transform:rotate(0)} }
.jump .left-leg-group { animation: jLL 0.9s ease-out; }
.jump .right-leg-group { animation: jLR 0.9s ease-out; }
@keyframes jLL { 0%{transform:rotate(0)} 25%{transform:rotate(-15deg)} 100%{transform:rotate(0)} }
@keyframes jLR { 0%{transform:rotate(0)} 25%{transform:rotate(15deg)} 100%{transform:rotate(0)} }

/* ===== FLIP ===== */
.flip .robot { animation: flipSpin 0.8s ease-in-out; }
@keyframes flipSpin {
  0% { transform: rotate(0deg) scale(1); }
  15% { transform: rotate(0deg) scaleY(0.8) scaleX(1.1); }
  30% { transform: rotate(90deg) scale(0.9); }
  50% { transform: rotate(200deg) scale(0.85); }
  70% { transform: rotate(310deg) scale(0.9); }
  85% { transform: rotate(360deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
}
.flip .robot.facing-left { animation: flipSpinL 0.8s ease-in-out; }
@keyframes flipSpinL {
  0% { transform: scaleX(-1) rotate(0deg); }
  15% { transform: scaleX(-1) rotate(0deg) scaleY(0.8); }
  30% { transform: scaleX(-1) rotate(90deg) scale(0.9); }
  50% { transform: scaleX(-1) rotate(200deg) scale(0.85); }
  70% { transform: scaleX(-1) rotate(310deg) scale(0.9); }
  85% { transform: scaleX(-1) rotate(360deg) scale(1.05); }
  100% { transform: scaleX(-1) rotate(360deg); }
}
.flip .left-arm-group, .flip .right-arm-group { animation: flipArm 0.8s ease-in-out; }
@keyframes flipArm { 0%{transform:rotate(0)} 30%{transform:rotate(-60deg)} 70%{transform:rotate(-60deg)} 100%{transform:rotate(0)} }
.flip .left-leg-group, .flip .right-leg-group { animation: flipLeg 0.8s ease-in-out; }
@keyframes flipLeg { 0%{transform:rotate(0)} 30%{transform:rotate(30deg)} 70%{transform:rotate(30deg)} 100%{transform:rotate(0)} }

.flip .shadow { animation: sFlip 0.8s ease-in-out; }
@keyframes sFlip { 0%{opacity:0.1} 30%{opacity:0.02} 70%{opacity:0.02} 100%{opacity:0.1} }

/* ===== SPIN ===== */
.spin .robot { animation: spinTwirl 1.2s ease-in-out; }
@keyframes spinTwirl {
  0% { transform: rotateY(0deg) scale(1); }
  25% { transform: rotateY(180deg) scale(0.9); }
  50% { transform: rotateY(360deg) scale(1); }
  75% { transform: rotateY(540deg) scale(0.9); }
  100% { transform: rotateY(720deg) scale(1); }
}
.spin .robot.facing-left { animation: spinTwirlL 1.2s ease-in-out; }
@keyframes spinTwirlL {
  0% { transform: scaleX(-1) rotateY(0deg); }
  25% { transform: scaleX(-1) rotateY(180deg) scale(0.9); }
  50% { transform: scaleX(-1) rotateY(360deg); }
  75% { transform: scaleX(-1) rotateY(540deg) scale(0.9); }
  100% { transform: scaleX(-1) rotateY(720deg); }
}
.spin .left-arm-group, .spin .right-arm-group { animation: spinArm 1.2s ease-in-out; }
@keyframes spinArm { 0%{transform:rotate(0)} 25%{transform:rotate(-20deg)} 50%{transform:rotate(0)} 75%{transform:rotate(-20deg)} 100%{transform:rotate(0)} }

.spin .shadow { animation: sSpin 1.2s ease-in-out; }
@keyframes sSpin { 0%,50%,100%{opacity:0.1; transform:scaleX(1)} 25%,75%{opacity:0.04; transform:scaleX(0.3)} }

/* ===== WAVE ===== */
.wave .right-arm-group { animation: waveH 0.35s ease-in-out infinite alternate; }
@keyframes waveH { 0%{transform:rotate(-35deg)} 100%{transform:rotate(-65deg)} }
.wave .robot { animation: waveB 2s ease-in-out infinite; }
@keyframes waveB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
.wave .robot.facing-left { animation: waveBL 2s ease-in-out infinite; }
@keyframes waveBL { 0%,100%{transform:scaleX(-1) translateY(0)} 50%{transform:scaleX(-1) translateY(-3px)} }

/* ===== IDLE ===== */
.idle .robot { animation: idleF 2.5s ease-in-out infinite; }
@keyframes idleF { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
.idle .robot.facing-left { animation: idleFL 2.5s ease-in-out infinite; }
@keyframes idleFL { 0%,100%{transform:scaleX(-1) translateY(0)} 50%{transform:scaleX(-1) translateY(-5px)} }

/* Shadow */
.walk .shadow { animation: sW 0.5s ease-in-out infinite; }
@keyframes sW { 0%,100%{opacity:0.1} 50%{opacity:0.07} }
.run .shadow { animation: sR 0.3s ease-in-out infinite; }
@keyframes sR { 0%,100%{opacity:0.1} 50%{opacity:0.04} }
.jump .shadow { animation: sJ 0.9s ease-out; }
@keyframes sJ { 0%{opacity:0.1} 25%{opacity:0.03} 100%{opacity:0.1} }
.idle .shadow, .wave .shadow { animation: sI 2.5s ease-in-out infinite; }
@keyframes sI { 0%,100%{opacity:0.1} 50%{opacity:0.06} }

/* Mouth */
.mouth { animation: mGlow 3s ease-in-out infinite; }
@keyframes mGlow { 0%,100%{opacity:0.6} 50%{opacity:0.3} }

/* Paused */
.paused .left-arm-group, .paused .right-arm-group,
.paused .left-leg-group, .paused .right-leg-group,
.paused .robot { animation: none !important; }
.paused .robot.facing-left { transform: scaleX(-1); }
</style>
