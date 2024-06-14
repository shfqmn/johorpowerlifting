<template>
  <div>
    <agile :initial-slide="0">
      <img class="slide" src="/1.jpg">
      <img class="slide" src="/2.jpg">
      <img class="slide" src="/3.heic">
      <img class="slide" src="/4.jpg">
      <img class="slide" src="/5.jpg">
      <template v-slot:prevButton>
        <fa :icon="['fas', 'chevron-left']"></fa>
      </template>
      <template v-slot:nextButton>
        <fa :icon="['fas', 'chevron-right']"></fa>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss">
.agile {
  background-color: black;

  &__nav-button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    width: 80px;

    &:hover {
      background-color: rgba(black, 0.5);
      opacity: 1;
    }

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }

  &__dots {
    bottom: 10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    margin: 0 10px;

    button {
      background-color: transparent;
      border: 1px solid white;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }

    &--current,
    &:hover {
      button {
        background-color: white;
      }
    }
  }
}

.slide {
  display: block;
  height: 70vh;
  object-fit: scale-down;
  width: 100%;
}
</style>
