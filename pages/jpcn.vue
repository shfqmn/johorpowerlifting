<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1>Johor Powerlifting Coaching Network (JPCN)</h1>
        <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/wj.png" class="object-contain w-30 h-auto image-zoomable" />
          <img src="/ez.jpg" class="object-contain w-30 h-auto image-zoomable" />
          <img src="/forge.png" class="object-contain w-30 h-auto image-zoomable" />
        </div>
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
</style>
