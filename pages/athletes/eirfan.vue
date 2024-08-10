<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="athlete-profile">
        <img src="/athletes/eirfan.jpg" alt="Muhammad Zul Eirfan" class="athlete-image" />
        <h1>Muhammad Zul Eirfan</h1>
        <p>U66 Men Open</p>
        <NuxtLink target="_blank" to="https://www.instagram.com/zuleirfansalim">
          <p><strong>@zuleirfansalim</strong></p>
        </NuxtLink>

        <h1>Personal Records</h1>
        <p><strong>Squat: </strong>205kg</p>
        <p><strong>Bench: </strong>125kg</p>
        <p><strong>Deadlift: </strong>255kg</p>

        <h1>Competition Records</h1>
        <p>MPA Raw 2022 - 3rd Place</p>
        <p>Strength Academy Classic 2023 (NQ) - 3rd Place</p>
        <p>MAP National Championship 2023 - 3rd Place</p>
        <p>Map National Championship 2024 - 3rd Place</p>
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
