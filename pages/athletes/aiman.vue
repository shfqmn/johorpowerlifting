<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="athlete-profile">
        <img src="/athletes/aiman.jpg" alt="Muhammad Shafiq Aiman bin Zaharuddin" class="athlete-image" />
        <h1>Muhammad Shafiq Aiman bin Zaharuddin</h1>
        <p>U120/120+ Men Open</p>
        <NuxtLink target="_blank" to="https://www.instagram.com/aimancs">
          <p><strong>@aimancs</strong></p>
        </NuxtLink>

        <h1>Personal Records</h1>
        <p><strong>Squat: </strong>230kg</p>
        <p><strong>Bench: </strong>191kg</p>
        <p><strong>Deadlift: </strong>240kg</p>

        <h1>Competition Records</h1>
        <p>Deadlift Ladder Party Strength Mastery 2023 - 225kg</p>
        <p>Strength Academy Classic 2023 - 2nd Place</p>
        <p>MAP National Championship 2023 - 1st Place</p>
        <p>Last Man & Woman Standing 2.0 2023 - 3rd Place</p>
        <p>Strength Academy Classic 2024 - 3rd Place</p>
        <p>MAP National Championship 2024 - 3rd Place</p>
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
