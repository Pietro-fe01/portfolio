<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue';
import {
  caseStudies,
  careerTimeline,
  dailyFocus,
  dailyTasks,
  heroBadges,
  heroMetrics,
  profile,
  publicProjects,
  socialLinks,
  stackGroups,
  workingStyle,
  realWorkAreas,
} from '../data/portfolio';

const contactLinks = socialLinks.filter((link) => link.label !== 'Email');

let revealObserver;

const revealElements = (elements) => {
  elements.forEach((element) => element.classList.add('is-visible'));
};

onMounted(async () => {
  await nextTick();

  if (typeof window === 'undefined') {
    return;
  }

  const elements = Array.from(document.querySelectorAll('[data-reveal]'));

  if (!elements.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements(elements);
    return;
  }

  document.documentElement.classList.add('motion-ready');

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  elements.forEach((element) => revealObserver.observe(element));
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  revealObserver = null;

  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('motion-ready');
  }
});
</script>

<template>
  <div class="home-page">
    <section id="top" class="hero section">
      <div class="container hero__layout">
        <div class="hero__copy">
          <span class="section-heading__eyebrow hero__eyebrow">Palermo / Full Stack Web Developer</span>
          <p class="hero__kicker">Portfolio</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero__role">{{ profile.role }}</p>

          <p class="hero__lead">{{ profile.summary }}</p>
          <p class="hero__support">{{ profile.intro }}</p>

          <div class="hero__actions">
            <a class="button button--primary" :href="profile.cvFile" download>
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>Scarica CV</span>
            </a>

            <a class="button button--ghost" :href="profile.linkedin" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>

            <a class="button button--ghost" href="#projects">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Case study</span>
            </a>
          </div>

          <div class="hero__metrics">
            <article v-for="item in heroMetrics" :key="item.value" class="hero__metric">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
        </div>

        <aside class="hero__board">
          <div class="hero__brand">
            <img :src="profile.logoMark" :alt="`${profile.name} logo`" />

            <div>
              <span>PF / Profilo operativo</span>
              <strong>{{ profile.name }}</strong>
            </div>
          </div>

          <div class="hero__board-section">
            <span class="hero__board-label">Nel lavoro di tutti i giorni</span>

            <ul class="hero__focus-list">
              <li v-for="item in dailyFocus" :key="item">
                <i class="fa-solid fa-arrow-right"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="hero__board-section">
            <span class="hero__board-label">Tecnologie ricorrenti</span>

            <div class="hero__badges">
              <span v-for="badge in heroBadges" :key="badge">{{ badge }}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section id="story" class="section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="section-heading__eyebrow">Percorso</span>
          <h2>Dal training ai prodotti reali.</h2>
          <p>
            Negli ultimi anni ho lavorato tra dashboard, backoffice, app verticali e workflow che richiedono ordine,
            responsabilità tecnica e attenzione all'esperienza d'uso.
          </p>
        </div>

        <div class="timeline">
          <article
            v-for="(step, index) in careerTimeline"
            :key="step.year"
            class="timeline-card"
            data-reveal
            :style="{ '--delay': `${index * 0.08}s` }"
          >
            <div class="timeline-card__marker">
              <span>{{ step.year }}</span>
            </div>

            <div class="timeline-card__body">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>

              <div class="timeline-card__chips">
                <span v-for="tag in step.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="work" class="section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="section-heading__eyebrow">Core focus</span>
          <h2>UI, product sense e operational flow.</h2>
          <p>
            Lavoro soprattutto su dashboard, survey platform, aree riservate, app cross-platform e integrazioni
            pensate per l'uso quotidiano.
          </p>
        </div>

        <div class="work-grid">
          <article
            v-for="(area, index) in realWorkAreas"
            :key="area.title"
            class="work-card"
            data-reveal
            :style="{ '--delay': `${index * 0.06}s` }"
          >
            <span class="work-card__index">0{{ index + 1 }}</span>
            <h3>{{ area.title }}</h3>
            <p>{{ area.text }}</p>
          </article>
        </div>

        <div class="task-cloud" data-reveal style="--delay: 0.12s">
          <span v-for="task in dailyTasks" :key="task">{{ task }}</span>
        </div>
      </div>
    </section>

    <section id="projects" class="section section--contrast">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="section-heading__eyebrow">Selected work</span>
          <h2>Progetti e contesti che raccontano bene il mio lavoro.</h2>
          <p>
            Una selezione di casi vicini alla mia esperienza quotidiana tra backoffice, customer flow, mobile e desktop tools.
          </p>
        </div>

        <div class="projects-grid">
          <article
            v-for="(project, index) in caseStudies"
            :key="project.code"
            class="project-card"
            data-reveal
            :style="{ '--delay': `${index * 0.06}s`, '--project-accent': project.accent }"
          >
            <div class="project-card__header">
              <div>
                <span class="project-card__code">{{ project.code }}</span>
                <h3>{{ project.title }}</h3>
                <p class="project-card__subtitle">{{ project.subtitle }}</p>
              </div>

              <div class="project-card__meta">
                <span>{{ project.scope }}</span>
                <strong>{{ project.visibility }}</strong>
              </div>
            </div>

            <p class="project-card__overview">{{ project.overview }}</p>

            <div class="project-card__highlights">
              <span v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</span>
            </div>

            <div class="project-card__stack">
              <span v-for="item in project.stack" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="section-heading__eyebrow">Public builds</span>
          <h2>Una piccola raccolta dei primi progetti realizzati durante il percorso con Boolean.</h2>
          <p>
            Sono esercizi e mini build pubbliche che raccontano l'inizio del mio percorso su UI, JavaScript e Vue,
            prima del passaggio a prodotti più strutturati e progetti privati.
          </p>
        </div>

        <div class="public-grid">
          <article
            v-for="(project, index) in publicProjects"
            :key="project.title"
            class="public-card"
            data-reveal
            :style="{ '--delay': `${index * 0.05}s` }"
          >
            <img v-if="project.image" :src="project.image" :alt="`Anteprima del progetto ${project.title}`" />
            <div v-else class="public-card__fallback">
              <span>{{ project.category }}</span>
              <strong>{{ project.title }}</strong>
            </div>

            <div class="public-card__body">
              <span class="public-card__eyebrow">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.summary }}</p>

              <div class="public-card__actions">
                <a class="button button--ghost button--sm" :href="project.repoHref" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-github"></i>
                  <span>Repo</span>
                </a>

                <a
                  v-if="project.liveHref"
                  class="button button--primary button--sm"
                  :href="project.liveHref"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Live demo</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="stack" class="section">
      <div class="container stack">
        <div class="stack__intro" data-reveal>
          <span class="section-heading__eyebrow">Stack & workflow</span>
          <h2>Frontend-first, full stack in execution.</h2>
          <p>
            UX, backend, mobile, desktop e delivery tecnica fanno parte dello stesso flusso di lavoro.
          </p>

          <div class="stack__principles">
            <article
              v-for="(item, index) in workingStyle"
              :key="item.title"
              class="principle-card"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>

        <div class="stack__groups">
          <article
            v-for="(group, index) in stackGroups"
            :key="group.name"
            class="stack-group"
            data-reveal
            :style="{ '--delay': `${index * 0.08}s` }"
          >
            <div class="stack-group__header">
              <i :class="group.icon"></i>
              <h3>{{ group.name }}</h3>
            </div>

            <div class="stack-group__chips">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section section--cta">
      <div class="container cta-panel" data-reveal>
        <div class="cta-panel__copy">
          <span class="section-heading__eyebrow">Contact</span>
          <h2>Disponibile per team e progetti in cui UX, struttura e delivery contano davvero.</h2>
          <p>
            Posso contribuire su frontend, Laravel/PHP, app cross-platform, workflow tools e supporto tecnico al deploy.
          </p>

          <div class="cta-panel__actions">
            <a class="button button--primary" :href="`mailto:${profile.email}`">
              <i class="fa-solid fa-envelope"></i>
              <span>Scrivimi</span>
            </a>

            <a class="button button--ghost" :href="profile.linkedin" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="cta-panel__meta">
          <a class="cta-panel__meta-item" :href="`mailto:${profile.email}`">
            <i class="fa-solid fa-envelope"></i>
            <span>{{ profile.email }}</span>
          </a>

          <div class="cta-panel__meta-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ profile.location }}</span>
          </div>

          <a
            v-for="link in contactLinks"
            :key="link.label"
            class="cta-panel__meta-item"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            <i :class="link.icon"></i>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: grid;
  gap: 1.4rem;
}

.hero {
  padding-top: 1.25rem;
}

.hero__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 1.5rem;
  align-items: stretch;
}

.hero__copy,
.hero__board {
  animation: cardRise 0.9s ease both;
  animation-delay: var(--delay, 0s);
}

.hero__copy {
  position: relative;
  padding: 3rem;
  border-radius: var(--radius-hero);
  background: var(--surface-contrast);
  color: var(--text-inverse);
  box-shadow: var(--shadow-strong);
  overflow: hidden;
}

.hero__copy::before,
.hero__copy::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  filter: blur(18px);
}

.hero__copy::before {
  inset: -18% auto auto 62%;
  width: 18rem;
  height: 18rem;
  background: radial-gradient(circle, rgba(var(--accent-warm-rgb), 0.28), transparent 70%);
}

.hero__copy::after {
  inset: auto auto -24% -12%;
  width: 16rem;
  height: 16rem;
  background: radial-gradient(circle, rgba(var(--accent-rgb), 0.24), transparent 70%);
}

.hero__eyebrow {
  color: var(--text-inverse-soft);
}

.hero__kicker {
  position: relative;
  z-index: 1;
  margin: 1.15rem 0 0.5rem;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(251, 247, 238, 0.54);
}

.hero__copy h1 {
  position: relative;
  z-index: 1;
  max-width: 9ch;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.92;
  letter-spacing: -0.07em;
}

.hero__role {
  position: relative;
  z-index: 1;
  margin-top: 0.8rem;
  color: var(--text-inverse-soft);
  font-size: 1.05rem;
  font-weight: 700;
}

.hero__lead {
  position: relative;
  z-index: 1;
  max-width: 54rem;
  margin-top: 1.4rem;
  color: var(--text-inverse);
  font-size: 1.1rem;
}

.hero__support {
  position: relative;
  z-index: 1;
  max-width: 58rem;
  margin-top: 1rem;
  color: var(--text-inverse-soft);
}

.hero__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.8rem;
}

.hero__metrics {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 2rem;
}

.hero__metric {
  padding: 1rem 1.1rem;
  background: rgba(255, 253, 248, 0.08);
  border: 1px solid var(--line-strong);
  border-radius: 1.4rem;
}

.hero__metric strong {
  display: block;
  margin-bottom: 0.32rem;
  color: var(--text-inverse);
  font-size: 1rem;
  font-weight: 800;
}

.hero__metric span {
  color: var(--text-inverse-soft);
  font-size: 0.9rem;
}

.hero__board {
  position: relative;
  padding: 2rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-hero);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

.hero__board::before {
  content: '';
  position: absolute;
  inset: 1rem;
  border: 1px solid var(--line);
  border-radius: calc(var(--radius-hero) - 1rem);
  opacity: 0.45;
  pointer-events: none;
}

.hero__brand {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
}

.hero__brand img {
  width: 4rem;
  height: 4rem;
  border-radius: 1.35rem;
  object-fit: cover;
  box-shadow: 0 20px 50px rgba(8, 17, 31, 0.2);
}

.hero__brand span {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.hero__brand strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: -0.05em;
  color: var(--text-strong);
}

.hero__board-section {
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
}

.hero__board-label {
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  padding: 0.4rem 0.72rem;
  border-radius: 999px;
  background: var(--surface-muted);
  color: var(--text-soft);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero__focus-list {
  display: grid;
  gap: 0.85rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.hero__focus-list li {
  display: flex;
  gap: 0.7rem;
  padding: 1rem 1.1rem;
  border-radius: 1.35rem;
  background: var(--surface-muted);
  border: 1px solid var(--line);
}

.hero__focus-list i {
  color: var(--accent);
  padding-top: 0.18rem;
}

.hero__focus-list span {
  color: var(--text);
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.hero__badges span {
  display: inline-flex;
  align-items: center;
  min-height: 2.6rem;
  padding: 0.65rem 0.92rem;
  border-radius: 999px;
  background: var(--surface-solid);
  border: 1px solid var(--line);
  color: var(--text);
  font-weight: 700;
  box-shadow: 0 14px 35px rgba(8, 17, 31, 0.06);
}

.section-heading {
  max-width: 52rem;
  margin-bottom: 1.8rem;
}

.section-heading h2 {
  margin: 0.8rem 0 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 0.97;
  letter-spacing: -0.06em;
  color: var(--text-strong);
}

.section-heading p {
  color: var(--text-soft);
  font-size: 1.02rem;
}

.timeline {
  position: relative;
  display: grid;
  gap: 1rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.86rem;
  top: 1rem;
  bottom: 1rem;
  width: 1px;
  background: linear-gradient(180deg, var(--accent), transparent);
  opacity: 0.75;
}

.timeline-card {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.timeline-card__marker {
  position: relative;
  z-index: 1;
  padding-top: 0.15rem;
}

.timeline-card__marker span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.4rem;
  min-height: 1.95rem;
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
  background: var(--surface-solid);
  border: 1px solid var(--line);
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline-card__body {
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.timeline-card__body,
.work-card,
.project-card,
.public-card,
.stack-group,
.cta-panel {
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}

.timeline-card__body:hover,
.work-card:hover,
.project-card:hover,
.public-card:hover,
.stack-group:hover,
.cta-panel:hover {
  transform: translateY(-4px);
}

.timeline-card__body h3,
.work-card h3,
.principle-card h3,
.stack-group h3,
.project-card h3,
.cta-panel h2 {
  margin: 0;
  font-family: var(--font-display);
  letter-spacing: -0.04em;
  color: var(--text-strong);
}

.timeline-card__body p {
  margin-top: 0.7rem;
  color: var(--text-soft);
}

.timeline-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.timeline-card__chips span,
.task-cloud span,
.project-card__highlights span,
.project-card__stack span,
.stack-group__chips span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-weight: 700;
}

.timeline-card__chips span {
  min-height: 2rem;
  padding: 0.42rem 0.72rem;
  background: var(--surface-muted);
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 0.88rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.work-card {
  position: relative;
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.work-card__index {
  display: inline-block;
  margin-bottom: 1.1rem;
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
}

.work-card p,
.principle-card p,
.project-card p,
.cta-panel p {
  color: var(--text-soft);
}

.task-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.15rem;
}

.task-cloud span {
  min-height: 2.35rem;
  padding: 0.55rem 0.8rem;
  background: var(--surface-solid);
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 0.9rem;
}

.stack {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 1.2rem;
  align-items: start;
}

.stack__intro {
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.stack__intro h2 {
  margin: 0.8rem 0 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  line-height: 0.97;
  letter-spacing: -0.06em;
  color: var(--text-strong);
}

.stack__intro p {
  color: var(--text-soft);
}

.stack__principles {
  display: grid;
  gap: 0.85rem;
  margin-top: 1.5rem;
}

.principle-card {
  padding: 1.15rem 1.2rem;
  border-radius: 1.35rem;
  background: var(--surface-muted);
  border: 1px solid var(--line);
}

.stack__groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.stack-group {
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: var(--surface-contrast-alt);
  box-shadow: 0 24px 60px rgba(8, 17, 31, 0.2);
}

.stack-group__header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.stack-group__header i {
  display: inline-grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 1rem;
  background: rgba(255, 253, 248, 0.12);
  color: var(--accent);
}

.stack-group h3 {
  color: var(--text-inverse);
}

.stack-group__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.stack-group__chips span {
  min-height: 2.3rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 253, 248, 0.08);
  border: 1px solid rgba(255, 253, 248, 0.1);
  color: rgba(255, 253, 248, 0.86);
  font-size: 0.92rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.project-card {
  position: relative;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 0.32rem;
  background: linear-gradient(90deg, var(--project-accent), transparent 78%);
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.project-card__code {
  display: inline-flex;
  margin-bottom: 0.7rem;
  color: var(--text-soft);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.project-card__subtitle {
  margin-top: 0.28rem;
  color: var(--text-soft);
  font-weight: 700;
}

.project-card__meta {
  display: grid;
  justify-items: end;
  gap: 0.35rem;
  text-align: right;
}

.project-card__meta span,
.project-card__meta strong {
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-card__meta span {
  background: var(--surface-muted);
  color: var(--text-soft);
}

.project-card__meta strong {
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent-strong);
}

.project-card__overview {
  margin-top: 1rem;
}

.project-card__highlights,
.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1rem;
}

.project-card__highlights span {
  min-height: 2rem;
  padding: 0.42rem 0.72rem;
  background: var(--surface-muted);
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 0.88rem;
}

.project-card__stack span {
  min-height: 2rem;
  padding: 0.42rem 0.72rem;
  background: var(--surface-solid);
  border: 1px solid var(--line);
  color: var(--text-soft);
  font-size: 0.88rem;
}

.public-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.public-card {
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.public-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-bottom: 1px solid var(--line);
}

.public-card__fallback {
  display: grid;
  align-content: end;
  gap: 0.65rem;
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: 1.4rem;
  border-bottom: 1px solid var(--line);
  background:
    radial-gradient(circle at top right, rgba(var(--accent-rgb), 0.22), transparent 34%),
    linear-gradient(135deg, #121212 0%, #090909 100%);
}

.public-card__fallback span {
  display: inline-flex;
  width: fit-content;
  min-height: 1.9rem;
  align-items: center;
  padding: 0.34rem 0.64rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.public-card__fallback strong {
  color: #fff7eb;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.public-card__body {
  display: grid;
  gap: 0.8rem;
  padding: 1.2rem;
}

.public-card__eyebrow {
  display: inline-flex;
  width: fit-content;
  min-height: 1.9rem;
  align-items: center;
  padding: 0.38rem 0.68rem;
  border-radius: 999px;
  background: var(--surface-muted);
  color: var(--text-soft);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.public-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.45rem;
  letter-spacing: -0.04em;
  color: var(--text-strong);
}

.public-card p {
  color: var(--text-soft);
}

.public-card :deep(.button) {
  width: fit-content;
}

.public-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.section--cta {
  padding-bottom: 0.4rem;
}

.cta-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 1.2rem;
  align-items: center;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, var(--surface-elevated), var(--surface));
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}

.cta-panel h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 0.96;
}

.cta-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.3rem;
}

.cta-panel__meta {
  display: grid;
  gap: 0.8rem;
}

.cta-panel__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 3.35rem;
  padding: 0.95rem 1rem;
  border-radius: 1.35rem;
  background: var(--surface-solid);
  border: 1px solid var(--line);
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 14px 35px rgba(8, 17, 31, 0.06);
}

@keyframes cardRise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1180px) {
  .work-grid,
  .projects-grid,
  .public-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stack {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 980px) {
  .hero__layout,
  .cta-panel {
    grid-template-columns: 1fr;
  }

  .project-card__header {
    flex-direction: column;
  }

  .project-card__meta {
    justify-items: start;
    text-align: left;
  }
}

@media (max-width: 760px) {
  .hero__copy,
  .hero__board,
  .stack__intro,
  .cta-panel {
    padding: 1.4rem;
  }

  .hero__metrics,
  .work-grid,
  .stack__groups,
  .projects-grid,
  .public-grid {
    grid-template-columns: 1fr;
  }

  .hero__copy h1 {
    max-width: none;
  }
}

@media (max-width: 540px) {
  .hero__actions,
  .cta-panel__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__actions :deep(.button),
  .cta-panel__actions :deep(.button) {
    width: 100%;
    justify-content: center;
  }

  .timeline::before {
    display: none;
  }

  .timeline-card {
    grid-template-columns: 1fr;
  }
}
</style>
