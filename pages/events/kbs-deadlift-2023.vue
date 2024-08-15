<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1>Pengenalan Deadlift, KBS Fit Malaysia</h1>
        <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NuxtImg provider="cloudinary" src="/deadlift-kbs1.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <NuxtImg provider="cloudinary" src="/deadlift-kbs2.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <NuxtImg provider="cloudinary" src="/deadlift-kbs3.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <NuxtImg provider="cloudinary" src="/deadlift-kbs4.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <NuxtImg provider="cloudinary" src="/deadlift-kbs5.jpg" class="object-contain w-50 h-auto image-zoomable" />
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
</style>
