<template>
  <div class="flex pt-[64px]" :style="{ 'min-height': 'var(--layout-page-content-min-height)' }">
    <div class="w-1/12"></div>
    <div class="w-10/12">
      <slot />
    </div>
    <div class="w-1/12"></div>
  </div>
</template>
