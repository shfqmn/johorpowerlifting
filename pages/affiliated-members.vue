<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <h1>Affiliated Members</h1>
      <div>
        <div class="grid grid-cols md:grid-cols-2 mb-5">
          <div>
            <img src="/sm.png" class="w-[400px]" />
          </div>
          <div class="ml-3">
            <h2>Strength Mastery Gym</h2>
            <p>Contact Number (Whatsapp): +6011-13289101</p>
            <p>
              Address: 28-G, Jalan Seri Austin 3/55, Taman Seri Austin, 81100 Johor Bahru, Johor
            </p>
          </div>
        </div>
        <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/sm1.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <img src="/sm2.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <img src="/sm3.jpg" class="object-contain w-50 h-auto image-zoomable" />
        </div>
      </div>
      <div class="mt-16">
        <div class="grid grid-cols md:grid-cols-2 mb-5">
          <div>
            <img src="/jptc.png" class="w-[300px]" />
          </div>
          <div class="ml-3">
            <h2>Johor Performance Training Center</h2>
            <p>Contact Number (Whatsapp): +6011-13289101</p>
            <p>
              Address: Sutera Sports World, Jln Persisiran Sutera Danga 1, Taman Sutera Utama, 81200 Skudai, Johor
            </p>
          </div>
        </div>
        <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/jptc1.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <img src="/jptc2.jpg" class="object-contain w-50 h-auto image-zoomable" />
          <img src="/jptc3.jpg" class="object-contain w-50 h-auto image-zoomable" />
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

h2 {
  font-size: 2rem;
  font-weight: 600;
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
