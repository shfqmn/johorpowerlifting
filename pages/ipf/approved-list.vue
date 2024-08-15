<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="flex justify-center items-center">
        <div class="p-4 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md z-10 translate-y-0">
          <div class="p-6 text-center">
            <h1>Approved List</h1>
            <div>
              <p class="mb-2">IPF 2023-2026</p>
              <NuxtLink to="https://www.powerlifting.sport/fileadmin/ipf/data/rules/approved-list/Approved__List_2023-2026_V2_01-11-2023.pdf" target="_blank">
                <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">
                  Download
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </button>
              </NuxtLink>
            </div>
            <div class="mt-8">
              <p class="mb-2">MAP 2024</p>
              <NuxtLink to="https://drive.google.com/file/d/1C2dhdb2-Ren3ibJwHKqvk7FFldy_Asy2/view?usp=sharing" target="_blank">
                <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">
                  Download
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
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
</style>
