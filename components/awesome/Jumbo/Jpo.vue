<template>
  <LayoutPageWrapper class="flex-1 flex">
    <LayoutPageSection class="flex-1 flex">
      <div class="flex-1 justify-content-center align-items-center wrapper">
        <div class="row">
          <div class="wrapper2">
            <NuxtParticles id="tsparticles" :options="options" />
            <div style="z-index: 20" ref="poster" class="pt-2">
              <div v-if="$screen.higherThan('md', $screen.current.value)">
                <Img src="/jpo_poster.png" :width="550" class="img-fluid rounded mx-auto d-block posterImg" />
              </div>
              <div v-else>
                <Img src="/jpo_poster.png" :width="450" class="img-fluid rounded mx-auto d-block posterImg" />
              </div>
            </div>
            <div id="countdown" class="d-flex justify-content-center align-items-center countdown pt-6">
              <h1 class="text-center text-white pb-1">
                <span class="badge text-black">STARTING SOON</span>
              </h1>
              <div class="clock pt-2">
                <span>{{ days }}</span>
                <span>{{ hours }}</span>
                <span>{{ minutes }}</span>
                <span>{{ seconds }}</span>
              </div>
            </div>
            <h1 class="text-center text-white pt-3">
              <span class="badge bg-secondary starting-soon">26.10.2024 - 27.10.2024</span>
            </h1>
            <div class="text-center pt-6">
              <button class="shadow-lg">
                <AwesomeButton text="Register Now" size="lg" to="https://docs.google.com/forms/d/1b-_twTrtS8dsfl2O7TgFmRTKVg2TPa6E2QhwepYq7Mc" />
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="pt-12">
            <h1 class="text-center fs-1 text-black">PARTNERS</h1>
            <div class="slider pt-4">
              <div class="item">
                <a href="https://asia-powerlifting.com">
                  <Img src="apf.png" width="200" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://kbs.gov.my">
                  <Img src="kbs.png" width="205" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://powerliftingmalaysia.com">
                  <Img src="map.png" width="270" class="img-fluid rounded mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://adamas.gov.my">
                  <Img src="adamas.png" width="350" class="img-fluid mx-auto d-block" />
                </a>
              </div>
              <div class="item">
                <a href="https://powerlifting.sport">
                  <Img src="ipf.png" width="270" class="img-fluid rounded mx-auto d-block" />
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
import VanillaTilt from 'vanilla-tilt'
import type { Container } from 'tsparticles-engine'
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

function countdownTimer(days, hours, minutes, seconds) {
  var s = [days, hours, minutes, seconds]
  var oneDay = 24 * 60 * 60 * 1000
  var firstDate = new Date('26 October 2024 9:00 UTC+8')
  var secondDate = new Date()
  var days = (firstDate.getTime() - secondDate.getTime()) / oneDay
  var hrs = (days - Math.floor(days)) * 24
  var min = (hrs - Math.floor(hrs)) * 60
  s[0].value = Math.floor(days)
  s[1].value = Math.floor(hrs)
  s[2].value = Math.floor(min)
  s[3].value = Math.floor((min - Math.floor(min)) * 60)
  var i = setInterval(function () {
    n()
  }, 1000)
  function f(d, x) {
    s[d].value = x
    s[d - 1].value = Number(s[d - 1].value) - 1
  }
  function n() {
    s[3].value = Number(s[3].value) - 1
    if (s[3].value == -1) {
      f(3, 59)
      if (s[2].value == -1) {
        f(2, 59)
        if (s[1].value == -1) {
          f(1, 23)
        }
      }
    }
    if (s[0].innerHTML <= -1) {
      clearInterval(i)
    }
  }
}

onMounted(async () => {
  VanillaTilt.init(poster.value, {
    max: 28,
    glare: false,
    'glare-prerender': false,
    'max-glare': 1,
    'full-page-listening': true,
  })
  countdownTimer(days, hours, minutes, seconds)
})
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
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: space-around;
  justify-content: center;
  align-items: center;

  span {
    font-size: 5vw;
    color: #fff;
    margin: 0 1vw;
    padding: 2.1vw 2.1vw;
    display: inline-block;
    width: 15vw;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 -5px 0 rgba(0, 0, 0, 0.5);
  }

  span:after {
    font-size: 1.5vw;
    display: block;
    margin: 3px 0 -1px;
    opacity: 0.8;
  }

  span:nth-of-type(1):after {
    content: 'days';
  }

  span:nth-of-type(2):after {
    content: 'hrs';
  }

  span:nth-of-type(3):after {
    content: 'min';
  }

  span:nth-of-type(4):after {
    content: 'sec';
  }
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
  .clock span {
    font-size: 6.5vw;
    padding: 4vw 4vw;
    width: 16vw;
  }

  .clock span:after {
    font-size: 3vw;
  }

  .starting-soon {
    color: white;
  }
}

@media (min-width: 1920px) {
  .clock span {
    font-size: 2vw;
    padding: 1vw 1vw;
    width: 10vw;
  }

  .clock span:after {
    font-size: 1.5vw;
  }
}
</style>
