<script lang="ts" setup>
const { awesome } = useAppConfig()
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400">
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        JAP. All rights reserved.
      </div>

      <div>
        <!-- Instagram -->
        <NuxtLink to="https://www.instagram.com/johor.powerlifting" target="_blank"><p><font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon>@johorpowerlifting</p></NuxtLink>
      </div>
    </div>
  </footer>
</template>
