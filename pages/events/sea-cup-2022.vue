<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1 class="page-title">Southeast Asia Cup 2022</h1>
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
  '/seacup2022/seacup1.jpg',
  '/seacup2022/seacup2.jpg',
  '/seacup2022/seacup3.jpg',
  '/seacup2022/seacup4.jpg',
  '/seacup2022/seacup5.jpg',
  '/seacup2022/seacup6.jpg',
  '/seacup2022/seacup7.jpg',
  '/seacup2022/seacup8.jpg',
  '/seacup2022/seacup9.jpg',
  '/seacup2022/seacup10.jpg',
  '/seacup2022/seacup11.jpg',
  '/seacup2022/seacup12.jpg',
  '/seacup2022/seacup13.jpg',
  '/seacup2022/seacup14.jpg',
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
