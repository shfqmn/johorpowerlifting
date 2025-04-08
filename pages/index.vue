<script lang="ts" setup>
import {
  IS_REGISTRATION_OPEN,
  NEXT_COMPETITION_DATE,
  NEXT_COMPETITION_NAME,
} from '../constants'
import { getAllEvents } from '../data/eventsData'

const { awesome } = useAppConfig()
definePageMeta({ layout: 'full' })
useHead({ title: 'Johor Association for Powerlifting' })

// Countdown timer data
const eventDate = NEXT_COMPETITION_DATE
const now = useNow({ interval: 1000 })
const remaining = computed(() => {
  const diff = eventDate.getTime() - now.value.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})

// Filter events
const activeFilter = ref('all')
const allEvents = getAllEvents()
const filteredEvents = computed(() => {
  // First filter events to only include future events
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Set to beginning of day for accurate comparison

  const upcomingEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate >= today
  })

  // Then apply the category filter
  if (activeFilter.value === 'all') return upcomingEvents
  return upcomingEvents.filter((event) => event.type === activeFilter.value)
})

// Banner images carousel
const bannerImages = [
  '/banner/banner1.jpg',
  '/banner/banner2.jpg',
  '/banner/banner3.jpg',
  '/banner/banner4.jpg',
]
const currentImageIndex = ref(0)
const currentImage = computed(() => bannerImages[currentImageIndex.value])

// Auto rotate banner images
function rotateImages() {
  currentImageIndex.value = (currentImageIndex.value + 1) % bannerImages.length
}

let imageInterval: NodeJS.Timeout

onMounted(() => {
  imageInterval = setInterval(rotateImages, 5000) // Change image every 5 seconds
})

onUnmounted(() => {
  clearInterval(imageInterval) // Clean up interval on component unmount
})

// Smooth scroll function
function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Hero Banner Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0"
    >
      <!-- Background Image with overlay -->
      <div class="absolute inset-0 bg-primary-900/60 z-10"></div>
      <div class="banner-container">
        <transition name="fade">
          <img
            :key="currentImageIndex"
            :src="currentImage"
            alt="Powerlifting Banner"
            class="banner-image"
          />
        </transition>
      </div>
      <div class="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 hero-title"
        >
          JOHOR POWERLIFTING ASSOCIATION
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto hero-subtitle"
        >
          Strength Through Determination: Building Champions in Johor
        </p>
        <div
          class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 hero-buttons"
        >
          <AwesomeButton
            text="Upcoming Events"
            type="primary"
            size="md"
            class="text-sm sm:text-base md:text-lg"
            @click="scrollToSection('events')"
          />
          <AwesomeButton
            text="Join Us"
            type="secondary"
            size="md"
            to="/register"
            class="text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </section>

    <!-- Motivational Banner Section -->
    <section
      class="min-h-screen text-white relative overflow-hidden"
      style="
        background-image: url('/banner/banner5.jpg');
        background-size: cover;
        background-position: center bottom;
      "
    >
      <div
        class="container mx-auto px-4 relative z-10 flex flex-col sm:flex-row items-end sm:items-center justify-end sm:justify-center text-center min-h-screen"
      >
        <div
          class="relative bg-gradient-to-r from-black/70 to-black/70 p-6 rounded-lg mb-8 sm:mb-0"
        >
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            GOOD LUCK RYZE!
          </h2>
          <div class="max-w-xl mx-auto">
            <p class="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Wishing our athlete Ryze the very best as he represents us at the
              Asian Junior & Sub-Junior Championship in Dehradun, India. The
              entire Johor Powerlifting family is behind you!
            </p>
            <div
              class="flex flex-wrap justify-center gap-3 sm:gap-4 items-center"
            >
              <div class="flex items-center">
                <span class="bg-primary-900/30 rounded-full p-1 sm:p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <span class="text-xs sm:text-sm font-medium"
                  >Focus on your technique</span
                >
              </div>
              <div class="flex items-center">
                <span class="bg-primary-900/30 rounded-full p-1 sm:p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <span class="text-xs sm:text-sm font-medium"
                  >Trust your training</span
                >
              </div>
              <div class="flex items-center">
                <span class="bg-primary-900/30 rounded-full p-1 sm:p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <span class="text-xs sm:text-sm font-medium"
                  >Give it your all</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Countdown Timer Section -->
    <section class="bg-primary-800 text-white py-8 sm:py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            NEXT COMPETITION
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-primary-200">
            {{ NEXT_COMPETITION_NAME }}
          </p>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
        >
          <div class="countdown-item">
            <div class="countdown-value text-2xl sm:text-3xl md:text-4xl">
              {{ remaining.days }}
            </div>
            <div class="countdown-label text-xs sm:text-sm md:text-base">
              Days
            </div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value text-2xl sm:text-3xl md:text-4xl">
              {{ remaining.hours }}
            </div>
            <div class="countdown-label text-xs sm:text-sm md:text-base">
              Hours
            </div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value text-2xl sm:text-3xl md:text-4xl">
              {{ remaining.minutes }}
            </div>
            <div class="countdown-label text-xs sm:text-sm md:text-base">
              Minutes
            </div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value text-2xl sm:text-3xl md:text-4xl">
              {{ remaining.seconds }}
            </div>
            <div class="countdown-label text-xs sm:text-sm md:text-base">
              Seconds
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-8 md:mt-10 text-center">
          <AwesomeButton
            v-if="IS_REGISTRATION_OPEN"
            text="Register Now"
            type="secondary"
            size="md"
            to="/events/register"
            class="text-sm sm:text-base md:text-lg"
          />
          <p v-else class="text-sm sm:text-base md:text-lg text-primary-200">
            Registration is currently closed. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>

    <!-- Events Calendar Section -->
    <section
      id="events"
      class="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-slate-800"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-6 sm:mb-8 md:mb-12">
          <h2
            class="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-primary-800 dark:text-primary-400"
          >
            UPCOMING EVENTS
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300"
          >
            Join us at our next powerlifting events
          </p>
        </div>

        <div
          class="flex justify-center mb-4 sm:mb-6 md:mb-8 overflow-x-auto px-2"
        >
          <div class="inline-flex rounded-md shadow-sm">
            <button
              :class="[
                'px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-l-lg transition-colors',
                activeFilter === 'all'
                  ? 'bg-primary-700 text-white dark:bg-primary-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600',
              ]"
              @click="activeFilter = 'all'"
            >
              All Events
            </button>
            <button
              :class="[
                'px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium border-x border-gray-200 dark:border-slate-600 transition-colors',
                activeFilter === 'competition'
                  ? 'bg-primary-700 text-white dark:bg-primary-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600',
              ]"
              @click="activeFilter = 'competition'"
            >
              Competitions
            </button>
            <button
              :class="[
                'px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-colors',
                activeFilter === 'workshop'
                  ? 'bg-primary-700 text-white dark:bg-primary-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600',
              ]"
              @click="activeFilter = 'workshop'"
            >
              Workshops
            </button>
            <button
              :class="[
                'px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-r-lg transition-colors',
                activeFilter === 'others'
                  ? 'bg-primary-700 text-white dark:bg-primary-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600',
              ]"
              @click="activeFilter = 'others'"
            >
              Others
            </button>
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <template v-if="filteredEvents.length > 0">
            <AwesomeCard
              v-for="event in filteredEvents"
              :key="event.path"
              class="h-full event-card"
            >
              <AwesomeCardContent>
                <div class="flex items-start mb-4">
                  <div
                    class="bg-primary-700 dark:bg-primary-600 text-white rounded p-2 text-center mr-4 w-12 sm:w-14 shrink-0"
                  >
                    <div class="text-xs font-medium">
                      {{
                        new Date(event.date).toLocaleString('default', {
                          month: 'short',
                        })
                      }}
                    </div>
                    <div class="text-lg sm:text-xl font-bold">
                      {{ new Date(event.date).getDate() }}
                    </div>
                  </div>
                  <div>
                    <h3
                      class="text-sm sm:text-base md:text-lg font-bold text-primary-900 dark:text-primary-300"
                    >
                      {{ event.title }}
                    </h3>
                    <p
                      class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1"
                    >
                      <span class="inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {{ event.time }}
                      </span>
                    </p>
                    <p
                      class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1"
                    >
                      <span class="inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {{ event.location }}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <span
                    :class="[
                      'inline-block rounded-full px-2 py-1 text-xs font-medium',
                      event.type === 'competition'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        : event.type === 'workshop'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
                    ]"
                  >
                    {{
                      event.type.charAt(0).toUpperCase() + event.type.slice(1)
                    }}
                  </span>
                </div>
              </AwesomeCardContent>
              <AwesomeCardFooter>
                <AwesomeButton
                  text="View Details"
                  type="secondary"
                  size="sm"
                  :to="`/events/${event.path}`"
                  class="w-full"
                />
              </AwesomeCardFooter>
            </AwesomeCard>
          </template>

          <div v-else class="col-span-full text-center py-8 sm:py-12">
            <div
              class="mx-auto w-12 h-12 sm:w-16 sm:h-16 mb-4 text-gray-300 dark:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                />
              </svg>
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              No Upcoming Events
            </h3>
            <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              There are no upcoming events scheduled at the moment. Please check
              back later.
            </p>
          </div>
        </div>

        <div class="mt-6 sm:mt-8 md:mt-12 text-center">
          <AwesomeButton
            text="View All Events"
            type="outline"
            size="md"
            to="/events"
            class="text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.countdown-item {
  @apply bg-primary-700 dark:bg-primary-600 rounded-lg p-3 md:p-4 flex flex-col items-center justify-center min-w-[90px] md:min-w-[110px] transition-transform;
}

.countdown-value {
  @apply text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1;
}

.countdown-label {
  @apply text-primary-200 dark:text-primary-100 text-xs md:text-sm uppercase font-medium tracking-wider;
}

/* Direct image crossfade animation */
.banner-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: absolute;
  inset: 0;
}

.fade-enter-active {
  z-index: 1;
  animation: scale-in 8s ease-out forwards;
}

.fade-leave-active {
  z-index: 0;
  animation: scale-out 2.5s ease-in forwards;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

/* Subtle scale animations */
@keyframes scale-in {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

@keyframes scale-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

/* Banner image styling */
.banner-image {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
}

/* Add smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}
</style>
