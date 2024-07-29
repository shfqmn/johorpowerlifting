<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1>Events</h1>
        <h2>2023</h2>
        <NuxtLink to="/events/agm-2023">
          <h3>Annual General Meeting JAP</h3>
        </NuxtLink>
        <NuxtLink to="/events/kbs-deadlift-2023">
          <h3>Pengenalan Deadlift KBS Fit Malaysia</h3>
        </NuxtLink>
        <NuxtLink to="jpo-2023">
          <h3>JPO Vol. 1 2023</h3>
        </NuxtLink>
        <NuxtLink to="/events/asians-2023">
          <h3>Asian Classic Powerlifting Championship</h3>
        </NuxtLink>
        <h2>2022</h2>
        <NuxtLink to="sea-cup-2022">
          <h3>SEA Cup 2022</h3>
        </NuxtLink>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

a:hover {
  color: blue;
  text-decoration: none;
}
</style>
