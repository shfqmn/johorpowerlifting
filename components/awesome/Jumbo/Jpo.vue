<template>
  <LayoutPageWrapper class="flex-1 flex">
    <LayoutPageSection class="flex-1 flex">
      <div class="flex-1 justify-content-center align-items-center wrapper">
        <div class="row">
          <div class="wrapper2">
            <NuxtParticles id="tsparticles" :options="options" />
            <div style="z-index: 20" ref="poster" class="pt-2">
              <img provider="cloudinary" src="/public/jpc2025.png" width="750" class="img-fluid rounded mx-auto d-block w-[45rem] h-auto" v-if="$screen.higherThan('md', $screen.current.value)" />
              <img provider="cloudinary" src="/public/jpc2025.png" width="750" class="img-fluid rounded mx-auto d-block w-[29.5rem]" v-else />
            </div>
            <div id="countdown" class="d-flex justify-content-center align-items-center countdown pt-6">
              <h1 class="text-center text-white pb-1">
                <span class="badge text-black">STARTING SOON</span>
              </h1>
              <!-- Removed clock -->
            </div>
            <h1 class="text-center text-white pt-3">
              <span class="badge bg-secondary starting-soon">15.02.2025</span>
            </h1>
            <div class="text-center pt-6">
              <button class="shadow-lg">
                <AwesomeButton text="Athlete Registration" size="lg" to="https://forms.gle/GNWJcQCDhdZw79mF9" />
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="pt-[10rem]">
            <h1 class="text-center fs-1 text-black">OFFICIAL EQUIPMENT</h1>
            <div class="slider p-2">
              <div class="item">
                <a href="https://www.instagram.com/bull_training">
                  <NuxtImg provider="twicpics" src="bull.png" class="object-contain size-[12rem]" v-if="$screen.higherThan('md', $screen.current.value)" />
                  <NuxtImg provider="twicpics" src="bull.png" class="object-contain size-[5rem]" v-else />
                </a>
              </div>
              <div class="item">
                <a href="https://www.instagram.com/hansupower_mas">
                  <NuxtImg provider="twicpics" src="/hansu.webp" class="object-contain size-[12rem]" v-if="$screen.higherThan('md', $screen.current.value)" />
                  <NuxtImg provider="twicpics" src="/hansu.webp" class="object-contain size-[5rem]" v-else />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="pt-12">
            <h1 class="text-center fs-1 text-black">PARTNERS</h1>
            <div class="slider p-2">
              <div class="item">
                <a href="https://asia-powerlifting.com">
                  <NuxtImg provider="twicpics" src="apf.png" width="200" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://www.kbs.gov.my">
                  <NuxtImg provider="twicpics" src="kbs.png" width="205" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://powerliftingmalaysia.com">
                  <NuxtImg provider="twicpics" src="map.png" width="270" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://www.adamas.gov.my">
                  <NuxtImg provider="twicpics" src="adamas.png" width="350" class="img-fluid mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://powerlifting.sport">
                  <NuxtImg provider="twicpics" src="ipf.png" width="270" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<script setup lang="ts">
const poster = ref()
const $screen = useAwesomeScreen()
const days = ref()
const hours = ref()
const minutes = ref()
const seconds = ref()

const options = {
  fullScreen: {
    enable: true,
    zIndex: -100,
  },
  background: {
    color: {
      value: '#FFFFFF',
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    links: {
      color: '#000',
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
}
const updateParticleNumber = () => {
  if (process.client) {
    const particleNumber = window.innerWidth < 640 ? 50 : 200 // Adjust the threshold and values as needed
    options.particles.number.value = particleNumber
  }
}

// Listen for the window resize event
if (process.client) {
  window.addEventListener('resize', updateParticleNumber)

  // Initial call to set the particle number based on the initial screen size
  updateParticleNumber()
}
</script>
<style lang="scss" scoped>
:root {
  --padding: 0em;
}

.wrapper {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
}

.clock {
  display: none; // Hide the clock
}

#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100%;
}

.slider {
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;

  .item+.item {
    padding-left: 0.5rem;
  }
}

.item {
  animation: animate 25s linear infinite;
}

.item img {
  padding: 0 0;
}

.slider:hover .item {
  animation-play-state: paused;
}

@media (max-width: 768px) {
  .starting-soon {
    color: white;
  }
}
</style>
