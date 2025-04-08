<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="hero-section">
        <h1>Johor Powerlifting Open Volume 2 2024</h1>
        <p class="subtitle">Thank you for making this event a success!</p>
      </div>
      <div class="event-details grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="detail-card">
          <h2>Date</h2>
          <p>March 15-16, 2024</p>
        </div>
        <div class="detail-card">
          <h2>Location</h2>
          <p>Johor Bahru, Malaysia</p>
          <p>Venue: Johor International Convention Centre</p>
        </div>
      </div>
      <div class="event-gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/images/event1.jpg" alt="Event photo 1" />
          <img src="/images/event2.jpg" alt="Event photo 2" />
          <img src="/images/event3.jpg" alt="Event photo 3" />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'page' })
</script>
<style scoped>
.hero-section {
  text-align: center;
  margin-bottom: 2rem;
}
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.subtitle {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #555;
}
.event-status {
  font-size: 1rem;
  color: #888;
  margin-top: 1rem;
}
.event-details {
  margin-top: 2rem;
}
.detail-card {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.detail-card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.detail-card p {
  font-size: 1rem;
  color: #333;
}
.event-results {
  margin-top: 2rem;
}
.event-results h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.event-results ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
.event-gallery {
  margin-top: 2rem;
}
.event-gallery h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.event-gallery .gallery-grid img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
