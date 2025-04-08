<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="events-container">
        <h1 class="page-title">Events</h1>

        <div v-for="year in sortedYears" :key="year" class="year-section">
          <h2 class="year-title">{{ year }}</h2>
          <div class="events-grid">
            <NuxtLink
              v-for="event in events[year]"
              :key="event.slug"
              :to="`/events/${event.slug}`"
              class="event-card"
            >
              <div class="card-content">
                <h3 class="event-title">{{ event.title }}</h3>
                <div class="card-arrow">
                  <span>→</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<script setup lang="ts">
// Import events from data file
import { events as eventsData } from '../../data/eventsData'

definePageMeta({ layout: 'page' })

// Organize events by year
const events = computed(() => {
  const eventsByYear: Record<
    string,
    Array<{ title: string; slug: string }>
  > = {}

  // Process the events data directly by year
  Object.entries(eventsData).forEach(([year, yearEvents]) => {
    eventsByYear[year] = yearEvents.map((event) => ({
      title: event.title,
      slug: event.path,
    }))
  })

  return eventsByYear
})

// Compute sorted years (latest first)
const sortedYears = computed(() => {
  return Object.keys(events.value).sort((a, b) => parseInt(b) - parseInt(a))
})
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.events-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(
    90deg,
    var(--color-gradient-start, #333) 0%,
    var(--color-gradient-end, #666) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  transition: color 0.3s ease;
}

.year-section {
  margin-bottom: 3rem;
}

.year-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border, #f0f0f0);
  position: relative;
  transition: border-color 0.3s ease;
}

.year-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 60px;
  height: 2px;
  background-color: var(--color-primary, #3b82f6);
  transition: background-color 0.3s ease;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.event-card {
  background-color: var(--color-card-bg, white);
  border-radius: 8px;
  box-shadow:
    0 4px 6px var(--color-shadow-light, rgba(0, 0, 0, 0.05)),
    0 1px 3px var(--color-shadow-dark, rgba(0, 0, 0, 0.1));
  transition:
    all 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  color: var(--color-text, inherit);
  border: 1px solid var(--color-border, #f0f0f0);
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px var(--color-shadow-hover, rgba(0, 0, 0, 0.1));
  border-color: var(--color-primary, #3b82f6);
  color: var(--color-text, inherit);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.card-arrow {
  margin-top: auto;
  align-self: flex-end;
  font-size: 1.25rem;
  opacity: 0;
  transform: translateX(-10px);
  transition:
    all 0.3s ease,
    color 0.3s ease;
}

.event-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--color-primary, #3b82f6);
}

@media (max-width: 768px) {
  .events-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .year-title {
    font-size: 1.75rem;
  }
}

/* CSS Variables for theme support */
:root {
  --color-primary: #3b82f6;
  --color-gradient-start: #333;
  --color-gradient-end: #666;
  --color-border: #f0f0f0;
  --color-card-bg: white;
  --color-text: inherit;
  --color-shadow-light: rgba(0, 0, 0, 0.05);
  --color-shadow-dark: rgba(0, 0, 0, 0.1);
  --color-shadow-hover: rgba(0, 0, 0, 0.1);
}

/* Improved Dark mode overrides */
:root.dark,
.dark {
  --color-primary: #4f93ff;
  --color-gradient-start: #5e7bbd;
  --color-gradient-end: #a0b4ff;
  --color-border: #3b3f49;
  --color-card-bg: #1a1d24;
  --color-text: #e2e8f0;
  --color-shadow-light: rgba(0, 0, 0, 0.3);
  --color-shadow-dark: rgba(0, 0, 0, 0.5);
  --color-shadow-hover: rgba(16, 30, 62, 0.6);
}

/* Add these additional styles for dark mode enhancements */
.dark .event-card {
  backdrop-filter: blur(4px);
  border-color: rgba(59, 63, 73, 0.7);
  background: linear-gradient(145deg, #1a1d24 0%, #23272f 100%);
  border: 1px solid rgba(79, 147, 255, 0.1);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  position: relative;
}

.dark .event-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
}

.dark .event-card:hover {
  border-color: rgba(79, 147, 255, 0.3);
  box-shadow:
    0 10px 25px rgba(16, 30, 62, 0.6),
    inset 0 0 0 1px rgba(79, 147, 255, 0.25);
  background: linear-gradient(165deg, #20242c 0%, #272c38 100%);
  transform: translateY(-5px) scale(1.01);
}

.dark .event-card:hover .card-content {
  background: radial-gradient(
    circle at top right,
    rgba(79, 147, 255, 0.06),
    transparent 70%
  );
}

.dark .year-title::after {
  background-color: var(--color-primary);
  box-shadow: 0 0 8px rgba(79, 147, 255, 0.5);
}

.dark .page-title {
  text-shadow: 0 0 15px rgba(94, 123, 189, 0.3);
}

.dark .event-title {
  color: #f0f4ff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
}

.dark .card-arrow {
  color: #7aa2ff;
  text-shadow: 0 0 10px rgba(79, 147, 255, 0.5);
}

.dark .event-card:hover .card-arrow {
  transform: translateX(0);
  opacity: 1;
  color: #a0c0ff;
}

/* Optional: Add transition to the body for smoother theme switching */
::before,
::after,
* {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
</style>
