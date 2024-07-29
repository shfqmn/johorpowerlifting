<template>
  <div class="overflow-x-hidden">
    <LayoutPageNavbar class="h-[64px] max-h-[64px]" />
    <div class="flex pt-[64px]" :style="{ 'min-height': 'var(--layout-page-content-min-height)' }">
      <slot />
    </div>
    <LayoutPageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>
