<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1 class="page-title">Pengenalan Deadlift, KBS Fit Malaysia</h1>
        <div class="gallery-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
          <NuxtImg v-for="(image, index) in images" :key="index" :provider="'cloudinary'" :src="image" class="image-zoomable" />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'page' })

const images = [
  '/deadlift-kbs1.jpg',
  '/deadlift-kbs2.jpg',
  '/deadlift-kbs3.jpg',
  '/deadlift-kbs4.jpg',
  '/deadlift-kbs5.jpg',
]
</script>
<style scoped>
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}
.gallery-grid img {
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.image-zoomable {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.image-zoomable:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
