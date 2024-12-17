<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="text-center justify-center items-center">
        <h1>Members Registration</h1>
        <div class="py-4">
          <div class="bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div class="p-6 text-center">
              <img provider="cloudinary" src="/register.jpg" class="object-scale-down w-full h-auto mx-auto" />
              <p class="mt-4">🏋️‍♀️ Lifters unite! Membership registration and renewals for 2025 are now open! Join us as we gear up for another powerful year of strength and determination. 💪</p>
              <NuxtLink to="https://docs.google.com/forms/d/1kpXFQGTxzxB7KB-nnCnWD7u-w-dtEtw8tVzpKU67D5I">
                <button class="mt-4 w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center justify-center gap-4" type="button">
                  register
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

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
</style>
