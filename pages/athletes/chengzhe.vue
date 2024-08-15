<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="athlete-profile">
        <NuxtImg provider="cloudinary" src="/athletes/chengzhe.jpg" alt="Lee Cheng Zhe" class="athlete-image" />
        <h1>Lee Cheng Zhe</h1>
        <p>U59 Men Sub Junior</p>
        <NuxtLink target="_blank" to="https://www.instagram.com/chengzhe_lee">
          <p><strong>@chengzhe_lee</strong></p>
        </NuxtLink>

        <h1>Personal Records</h1>
        <p><strong>Squat: </strong>170kg</p>
        <p><strong>Bench: </strong>75kg</p>
        <p><strong>Deadlift: </strong>185kg</p>

        <h1>Competition Records</h1>
        <p>JPO Vol.1 2023 - 2nd Place</p>
        <p>Strength Academy Classic 2024 - 2nd Place</p>
        <P>MAP National Chamiopnship 2024 - 3rd Place</p>
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
