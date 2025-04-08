<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 text-center"
    >
      <h1 class="text-4xl font-bold mb-4">
        Asian Classic Powerlifting Championship 2023
      </h1>
      <p class="text-lg">
        Celebrating strength, determination, and excellence in powerlifting.
      </p>
    </section>

    <!-- Gallery Section -->
    <section class="gallery py-12 px-4 md:px-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Image Grid -->
        <NuxtImg
          v-for="(image, index) in images"
          :key="index"
          :provider="'cloudinary'"
          :src="image"
          class="image-zoomable h-auto max-w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })

// Image sources
const images = [
  '/asians2023/asians-2023-13.jpg',
  '/asians2023/asians-2023-14.jpg',
  '/asians2023/asians-2023-15.jpg',
  '/asians2023/asians-2023-17.jpg',
  '/asians2023/asians-2023-18.jpg',
  '/asians2023/asians-2023-19.jpg',
  '/asians2023/asians-2023-20.jpg',
  '/asians2023/asians-2023-21.jpg',
  '/asians2023/asians-2023-22.jpg',
  '/asians2023/asians-2023-1.jpg',
  '/asians2023/asians-2023-2.jpg',
  '/asians2023/asians-2023-3.jpg',
  '/asians2023/asians-2023-4.jpg',
  '/asians2023/asians-2023-5.jpg',
  '/asians2023/asians-2023-6.jpg',
  '/asians2023/asians-2023-7.jpg',
  '/asians2023/asians-2023-8.jpg',
  '/asians2023/asians-2023-9.jpg',
  '/asians2023/asians-2023-10.jpg',
  '/asians2023/asians-2023-11.jpg',
  '/asians2023/asians-2023-12.jpg',
  '/asians2023/asians-2023-16.jpg',
]
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.gallery {
  background-color: #f9f9f9;
  border-radius: 8px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
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
