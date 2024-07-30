<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="text-center">
        <h1>Johor Powerlifting Coaching Network (JPCN)</h1>
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div class="lg:col-start-1 p-4 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div class="p-6 text-center">
              <h5 class="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-black-500 flex justify-center mt-2 mb-2">Wei Jian <br /> Power Coach</h5>
              <img src="/wj.png" class="object-scale-down w-auto h-[300px] mx-auto" />
              <NuxtLink to="https://www.instagram.com/wj_powercoach">
                <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">
                  join
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="p-4 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div class="p-6 text-center">
              <h5 class="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-black-500 flex justify-center mt-2 mb-2">EZ <br /> Strength Coach</h5>
              <img src="/ez.jpg" class="object-scale-down w-auto h-[300px] mx-auto" />
              <NuxtLink to="https://www.instagram.com/ez_strengthcoach">
                <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">join <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg></button>
              </NuxtLink>
            </div>
          </div>
          <div class="p-4 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div class="p-6">
              <h5 class="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-black-500 flex justify-center mt-2 mb-2">Forge <br /> Pinnacle</h5>
              <img src="/forge.png" class="object-scale-down w-auto h-[300px] mx-auto" />
              <NuxtLink to="https://www.instagram.com/forgepinnacle"><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4" type="button">join <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg></button>
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

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

h5 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
</style>
