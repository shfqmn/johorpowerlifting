<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
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
    <LayoutPageSection>
      <div>
        <h1>Classes and Categories</h1>
        <h3>Men</h3>
        <p>
          Up to 53kg (Sub-Junior/Junior), 59 kg, 66 kg, 74 kg, 83 kg, 93 kg, 105
          kg, 120 kg, 120 kg+
        </p>
        <h3>Women</h3>
        <p>
          Up to 43kg (Sub-Junior/Junior), 47 kg, 52 kg, 57 kg, 63 kg, 69 kg, 76
          kg, 84 kg, 84 kg+
        </p>
        <h3>Age Categories</h3>
        <p>
          sub-junior (18 and under), junior (18-23), open (any age), masters 1
          (39-49), masters 2 (49-59), masters 3 (59-69), masters 4 (69+)
        </p>
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
