<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="athlete-profile">
        <NuxtImg provider="cloudinary" src="/athletes/carmen.jpg" alt="Muhammad Zul Eirfan" class="athlete-image" />
        <h1>Carmen Kuan</h1>
        <p>U69 Women Open</p>
        <NuxtLink target="_blank" to="https://www.instagram.com/maeenauk_">
          <p><strong>@maeenauk_</strong></p>
        </NuxtLink>

        <h1>Personal Records</h1>
        <p><strong>Squat: </strong>97.5kg</p>
        <p><strong>Bench: </strong>55kg</p>
        <p><strong>Deadlift: </strong>125kg</p>

        <h1>Competition Records</h1>
        <p>SAC 2023</p>
        <p>JPO Vol. 1 2023</p>
        <p>MAP National Championship 2024</p>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })
</script>

<style scoped>
.athlete-profile {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.athlete-profile h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.athlete-profile p {
  margin: 5px 0;
}

.athlete-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  max-height: 500px;
}
</style>
