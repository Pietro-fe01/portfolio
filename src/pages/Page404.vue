<template>
  <section class="not-found section">
    <div class="container">
      <div class="not-found__panel">
        <span>404</span>
        <h1>Questa pagina non esiste.</h1>
        <p>
          Il percorso richiesto non è disponibile. Torna alla home del portfolio per vedere presentazione,
          stack e progetti.
        </p>

        <RouterLink class="button button--primary" :to="{ name: 'homepage' }">
          Torna alla home
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found__panel {
  max-width: 42rem;
  padding: 2.2rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.not-found__panel span {
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: var(--surface);
  color: var(--accent-strong);
  font-weight: 800;
}

.not-found__panel h1 {
  margin: 0 0 0.85rem;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: var(--text-strong);
}

.not-found__panel p {
  margin-bottom: 1.2rem;
  color: var(--text-soft);
}
</style>
