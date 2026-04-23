<script setup>
import { computed, ref } from 'vue';
import { profile } from '../data/portfolio';
import { useTheme } from '../composables/useTheme';

const menuOpen = ref(false);
const baseUrl = import.meta.env.BASE_URL;
const { currentThemeLabel, isDark, isSystem, nextThemeLabel, toggleTheme } = useTheme();

const navLinks = [
  {
    label: 'Percorso',
    href: `${baseUrl}#story`,
  },
  {
    label: 'Progetti',
    href: `${baseUrl}#projects`,
  },
  {
    label: 'Stack',
    href: `${baseUrl}#stack`,
  },
  {
    label: 'Contatti',
    href: `${baseUrl}#contact`,
  },
];

const themeToggleTitle = computed(() =>
  isSystem.value
    ? `Tema automatico dal dispositivo. Clicca per fissare il tema ${nextThemeLabel.value}.`
    : `Passa al tema ${nextThemeLabel.value}.`,
);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink class="site-header__brand" :to="{ name: 'homepage' }" @click="closeMenu">
        <img :src="profile.logoMark" :alt="`${profile.name} logo`" />

        <div>
          <span>PF / Portfolio</span>
          <strong>{{ profile.name }}</strong>
        </div>
      </RouterLink>

      <div class="site-header__right">
        <button
          class="theme-toggle"
          type="button"
          :title="themeToggleTitle"
          :aria-label="themeToggleTitle"
          @click="toggleTheme"
        >
          <i :class="isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" aria-hidden="true"></i>
          <span>{{ currentThemeLabel }}</span>
          <small v-if="isSystem">Auto</small>
        </button>

        <nav class="site-header__nav" :class="{ 'is-open': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>

          <a class="button button--dark button--sm" :href="`mailto:${profile.email}`" @click="closeMenu">
            Scrivimi
          </a>
        </nav>

        <button
          class="site-header__toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Apri menu di navigazione"
          @click="menuOpen = !menuOpen"
        >
          <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 0;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: var(--header-height);
  padding: 0.85rem 1.1rem;
  background: var(--surface-elevated);
  border: 1px solid var(--line);
  border-radius: 999px;
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow-soft);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--text-strong);
  text-decoration: none;
  min-width: 0;
}

.site-header__brand img {
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 16px 34px rgba(8, 20, 35, 0.16);
}

.site-header__brand span {
  display: block;
  margin-bottom: 0.18rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.site-header__brand strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: -0.03em;
}

.site-header__right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.site-header__nav a:not(.button) {
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.72rem 0.95rem;
  border-radius: 999px;
  transition: color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.site-header__nav a:not(.button):hover {
  color: var(--text-strong);
  background: var(--surface-muted);
  transform: translateY(-1px);
}

.theme-toggle,
.site-header__toggle {
  border: 1px solid var(--line);
  background: var(--surface-solid);
  color: var(--text-strong);
  cursor: pointer;
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-width: 8.6rem;
  min-height: 2.9rem;
  padding: 0.56rem 0.9rem 0.56rem 0.62rem;
  border-radius: 999px;
  font-weight: 800;
  background: linear-gradient(180deg, var(--surface-solid), var(--surface));
  box-shadow: 0 12px 28px rgba(8, 20, 35, 0.1);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 36px rgba(8, 20, 35, 0.14);
}

.theme-toggle i {
  display: inline-grid;
  place-items: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 999px;
  background: var(--surface-contrast-alt);
  color: var(--accent);
  font-size: 0.92rem;
}

.theme-toggle span {
  color: var(--text-strong);
}

.theme-toggle small {
  padding: 0.2rem 0.42rem;
  border-radius: 999px;
  background: var(--surface-muted);
  color: var(--text-soft);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-header__nav .button {
  display: inline-flex;
  align-items: center;
  color: var(--text-inverse);
}

.site-header__nav .button:hover {
  color: var(--text-inverse);
}

.site-header__toggle {
  display: none;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 999px;
}

@media (max-width: 860px) {
  .site-header__inner {
    flex-wrap: wrap;
    border-radius: 2rem;
  }

  .site-header__right {
    margin-left: auto;
  }

  .site-header__toggle {
    display: inline-grid;
    place-items: center;
  }

  .site-header__nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    padding-top: 0.75rem;
    order: 3;
  }

  .site-header__nav.is-open {
    display: flex;
  }

  .site-header__nav a {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 540px) {
  .site-header {
    padding: 0.75rem 0;
  }

  .site-header__inner {
    padding: 0.75rem 0.85rem;
  }

  .site-header__brand span {
    font-size: 0.62rem;
  }

  .site-header__brand strong {
    font-size: 0.92rem;
  }

  .theme-toggle {
    min-width: 3rem;
    padding: 0.55rem;
  }

  .theme-toggle span {
    display: none;
  }

  .theme-toggle small {
    display: none;
  }
}
</style>
