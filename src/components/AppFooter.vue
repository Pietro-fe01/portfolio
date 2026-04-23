<script setup>
import { profile, socialLinks } from '../data/portfolio';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__signature">
        <strong>{{ profile.name }}</strong>
        <span>Full Stack Web Developer · Palermo</span>
      </div>

      <div class="site-footer__socials">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          <i :class="link.icon"></i>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <span>&copy; {{ year }} {{ profile.name }}</span>
      <span>Sviluppato con Vue + Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1rem 0 2.25rem;
}

.site-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0 1.1rem;
  border-top: 1px solid var(--line);
}

.site-footer__signature {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.site-footer__signature strong {
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.03em;
  color: var(--text-strong);
}

.site-footer__signature span {
  color: var(--text-soft);
  font-size: 0.94rem;
}

.site-footer__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.site-footer__socials a {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 2.6rem;
  padding: 0.68rem 0.9rem;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
}

.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  color: var(--text-soft);
  font-size: 0.92rem;
}

@media (max-width: 640px) {
  .site-footer__inner,
  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-footer__bottom {
    padding-top: 0.85rem;
  }
}
</style>
