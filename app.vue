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
  meta: [
    {
      name: 'google-site-verification',
      content: 'mA9KaOeGzcik8-Pa_8PIiSYeKZ0Xivp_RuicKPFcrpQ'
    }
  ]
})
</script>

<template>
  <Body class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
