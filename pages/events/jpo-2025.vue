<template>
  <div class="event-page">
    <div class="container">
      <h1 class="event-title">{{ event?.title }}</h1>
      <p class="event-description">
        {{ event?.description || 'Details coming soon!' }}
      </p>
      <div v-if="event" class="event-info">
        <p><strong>Date:</strong> {{ event.date }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
      </div>
      <button
        class="register-button"
        :disabled="!registrationOpen"
        @click="register"
      >
        {{ registrationOpen ? 'Register Now' : 'Registration Opens Soon' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getEventByPath } from '../../data/eventsData'

definePageMeta({ layout: 'page' })

const event = getEventByPath('jpo-2025') // Fetch event by path
const registrationOpen = ref(false) // Set initial value as needed

const register = () => {
  alert('Registration process initiated!')
}
</script>

<style scoped>
.event-page {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.event-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.event-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 15px;
}

.event-details {
  font-size: 1rem;
  color: #777;
}

.event-info {
  font-size: 1rem;
  color: #555;
  margin: 20px 0;
}

.register-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.register-button:not(:disabled):hover {
  background-color: #0056b3;
}
</style>
