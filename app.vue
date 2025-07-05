<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      href: '/jap_logo.jpg',
    },
  ],
})
</script>

<template>
  <div class="w-full h-[80vh]">
    <iframe
      src="https://sites.google.com/view/johorpowerlifting"
      class="w-full h-full border-0"
      allowfullscreen
    ></iframe>
  </div>
</template>
