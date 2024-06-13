<template>
  <div>
    <div class="slider">
      <img v-for="image in images" :key="image.id" :src="image.url" alt="Slider Image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, url: '/1.jpg' }
      ],
    };
  },
};
</script>

<style>
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider img {
  max-width: 100%;
  height: auto;
}
</style>
