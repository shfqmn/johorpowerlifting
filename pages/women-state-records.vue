<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <h1>Women's State Records</h1>
      <div class="iframe-container">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUcSu0vVY9qSG0hV9gUeLd5NI4YeeyaiX15ZGZHP5S7j_yopg0vmcVzaDR1nIlocZj-0wp_I8xUrzE/pubhtml?gid=939188442&amp;single=true&amp;widget=true&amp;headers=false" class="responsive-iframe"></iframe>
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

.iframe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.responsive-iframe {
  width: 100%;
  height: 100vh;
  border: none;
}
</style>
