<template>
  <LayoutPageWrapper>
    <!-- Hero Section -->
    <div class="hero-section py-16 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Johor Powerlifting Association</h1>
    </div>

    <!-- Introduction Section -->
    <LayoutPageSection>
      <div class="content-section">
        <h1>Introduction</h1>
        <p>
          Powerlifting is a strength sport that consists of three attempts at
          maximum weight on three lifts: 'SQUAT', 'BENCH', and 'DEADLIFT'.
          Similar to the Olympic weightlifting sport, it involves athletes
          attempting a single maximum-weight lift of a barbell loaded with
          weight plates. Powerlifting evolved from a sport known as "odd lifts,"
          which followed the same three-attempt format but used a wider variety
          of events, similar to strongman competitions. Eventually, the odd
          lifts became standardized to the current three lifts.
        </p>
        <p>
          In competition, lifts can be performed 'EQUIPPED' or 'UNEQUIPPED'
          (usually referred to as 'CLASSIC' or 'RAW' lifting in the IPF
          specifically). Equipment in this context refers to supportive bench
          shirts or suits or squat/deadlift suits. In some federations, knee
          wraps are allowed in the equipped category but not in the unequipped
          category; in others, they can be used in both equipped and unequipped
          lifting. Weightlifting belts, knee sleeves, wrist wraps, and special
          shoes can also be used, but they are not considered when
          differentiating between equipped and unequipped lifting. Competitions
          take place worldwide. Powerlifting has been a Paralympic sport (bench
          press only) since 1984 and, under the IPF, is also a World Games
          sport. Local, national, and international competitions are also
          sanctioned by other federations operating independently of the IPF.
        </p>
      </div>
    </LayoutPageSection>

    <!-- Classes and Categories Section -->
    <LayoutPageSection>
      <div class="content-section">
        <h1>Classes and Categories</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3>Men</h3>
            <p>
              Up to 53kg (Sub-Junior/Junior), 59kg, 66kg, 74kg, 83kg, 93kg, 105kg, 120kg, 120kg+
            </p>
          </div>
          <div>
            <h3>Women</h3>
            <p>
              Up to 43kg (Sub-Junior/Junior), 47kg, 52kg, 57kg, 63kg, 69kg, 76kg, 84kg, 84kg+
            </p>
          </div>
        </div>
        <div class="mt-6">
          <h3>Age Categories</h3>
          <p>
            sub-junior (18 and under), junior (18-23), open (24-39), masters 1
            (40-49), masters 2 (50-59), masters 3 (60-69), masters 4 (70+)
          </p>
        </div>
      </div>
    </LayoutPageSection>

    <!-- JAP Section -->
    <LayoutPageSection>
      <div class="content-section">
        <h1>Johor Association for Powerlifting (JAP)</h1>
        <p>
          Johor Association for Powerlifting (JAP) was established on November 5, 2022, as a state-level association through the collaboration of 15 members. A paradigm shift for the strength sport is about to happen, and we have seen a significant number of new, strong, potential, and talented athletes joining the competition.
        </p>
        <p>
          The association is founded on strong values that we carry with us in all our endeavors. We strive to provide what we set out to, in the best possible manner within our limited capabilities. We aspire to be one of the best-governed associations in the state of Johor. Our office bearers, officials, athletes, and members are extraordinary. We are confident that we will continue to meet the standards we set for ourselves and progressively enhance them, together in unity.
        </p>
        <p>
          In the development and growth of this sport in the state of Johor, last year we secured cooperation from TWO gyms in the Johor Bahru district to make their premises powerlifting training centers. These gyms are STRENGTH MASTERY, Taman Seri Austin, Johor Bahru, and JOHOR PERFORMANCE TRAINING CENTRE, Sutera Sports World, Taman Sutera Utama, Skudai. As the sport of powerlifting continues to develop in the future, we have received support from several interested gyms to collaborate with us in nurturing and developing more powerlifting athletes in the state of Johor.
        </p>
        <p>
          We also aim to advance this sport by introducing powerlifting from the secondary school and IPTA (public universities) levels to nurture new athletes under the 'Sub-Junior' category. As an international sport, we were given the opportunity to be the venue host for the 1st SEA CUP POWERLIFTING 2022 at Hotel Trove, Johor Bahru, from September 15-18, 2022, under the Malaysian Powerlifting Association. Following this competition, we were praised for our handling, which was on par with the Asian level, and in December 2023, we were given the opportunity to be the venue host for the ASIAN CLASSIC CHAMPIONSHIP 2023 from December 10-18, 2023, at Hotel Trove, Johor Bahru. Following this year, we aim to bring more state, national, and international level competitions in the future.
        </p>
      </div>
    </LayoutPageSection>

    <!-- Certificates Section -->
    <LayoutPageSection>
      <div class="content-section">
        <h1>Certificates</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <NuxtImg provider="cloudinary" src="/kbs-cert.png" class="image-zoomable rounded-lg shadow-lg" />
          <NuxtImg provider="cloudinary" src="/map-cert.png" class="image-zoomable rounded-lg shadow-lg" />
          <NuxtImg provider="cloudinary" src="/map-jap-cert.png" class="image-zoomable rounded-lg shadow-lg" />
          <NuxtImg provider="cloudinary" src="/apf-cert.jpg" class="image-zoomable rounded-lg shadow-lg" />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })
</script>

<style scoped>
:root {
  --bg-hero-light: linear-gradient(to right, #ffffff, #e5e5e5);
  --bg-hero-dark: linear-gradient(to right, #000000, #2d2d2d);
  --bg-content-light: #f9f9f9;
  --bg-content-dark: #1e1e1e;
  --text-light: #000000;
  --text-dark: #ffffff;
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-dark: rgba(255, 255, 255, 0.1);
}

[data-theme="light"] {
  --bg-hero: var(--bg-hero-light);
  --bg-content: var(--bg-content-light);
  --text-color: var(--text-light);
  --shadow-color: var(--shadow-light);
}

[data-theme="dark"] {
  --bg-hero: var(--bg-hero-dark);
  --bg-content: var(--bg-content-dark);
  --text-color: var(--text-dark);
  --shadow-color: var(--shadow-dark);
}

.hero-section {
  background: var(--bg-hero);
  color: var(--text-color);
  padding: 4rem 0;
  text-align: center;
}

.content-section {
  padding: 2rem;
  background-color: var(--bg-content);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  color: var(--text-color);
  margin-bottom: 2rem;
}

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

.image-zoomable {
  transition: transform 0.3s ease;
}

.image-zoomable:hover {
  transform: scale(1.05);
}
</style>
