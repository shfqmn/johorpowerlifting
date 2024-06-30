import { ClientOnly } from '../app/.nuxt/components';
<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ title: "Johor Association for Powerlifting" })
</script>

<template>
  <AwesomeJumboJpo />
</template>
