<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1 class="page-title">Johor Powerlifting Open Volume 1 2023</h1>
        <div class="gallery-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
          <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            :provider="'cloudinary'"
            :src="image"
            class="image-zoomable"
          />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'page' })

const images = [
  '/jpo2023/jpo2.jpg',
  '/jpo2023/jpo3.jpg',
  '/jpo2023/jpo4.png',
  '/jpo2023/jpo5.jpg',
  '/jpo2023/jpo6.jpg',
  '/jpo2023/jpo7.jpg',
  '/jpo2023/jpo8.jpg',
  '/jpo2023/jpo9.jpg',
  '/jpo2023/jpo10.jpg',
  '/jpo2023/jpo11.jpg',
  '/jpo2023/jpo12.jpg',
  '/jpo2023/jpo13.jpg',
  '/jpo2023/jpo14.jpg',
  '/jpo2023/jpo15.jpg',
  '/jpo2023/jpo16.jpg',
  '/jpo2023/jpo17.jpg',
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.image-zoomable:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
