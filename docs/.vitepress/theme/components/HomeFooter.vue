<template>
  <div class="home-footer">
    <div class="quote">
      <span class="quote-mark">"</span>
      <span class="quote-text">We can only see a short distance ahead, but we can see plenty there that needs to be done.</span>
      <span class="quote-mark">"</span>
    </div>
    <div class="quote-translation">我们只能看清前方一小段距离，但在那里已经有大量工作等着我们去做。</div>
    <div class="quote-author">— Alan Turing, 《计算机器与智能》, 1950</div>
    <div class="badges">
      <a href="https://github.com/zsjunai/history-of-ai" class="badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Star on GitHub
      </a>
      <span class="separator">·</span>
      <span class="license">CC-BY-SA 4.0</span>
      <span class="separator">·</span>
      <span class="license">历史由所有人共同书写</span>
    </div>
  </div>
</template>

<style scoped>
.home-footer {
  text-align: center;
  padding: 48px 24px 32px;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 24px;
}

.quote {
  font-size: 1.1em;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.quote-mark {
  font-size: 1.4em;
  color: var(--vp-c-brand-1);
  opacity: 0.5;
  vertical-align: -0.1em;
}

.quote-translation {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  margin-top: 6px;
  font-style: normal;
}

.quote-author {
  font-size: 0.85em;
  color: var(--vp-c-text-3);
  margin-top: 8px;
}

.badges {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 0.85em;
  color: var(--vp-c-text-3);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.25s ease;
}

.badge:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.separator {
  color: var(--vp-c-divider);
}

.license {
  color: var(--vp-c-text-3);
}
</style>
