<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div>
        <h1>Johor State Athletes</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div v-for="athlete in athletes" :key="athlete.name" class="athlete-card">
            <div>
              <NuxtLink :to="`/athletes/${athlete.link}`">
                <img :src="athlete.image" :alt="athlete.name" class="athlete-image" />
                <h2>{{ athlete.name }}</h2>
                <p>{{ athlete.title }}</p>
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

const athletes = [
  {
    name: "Muhammad Zul Eirfan",
    title: "U66 Male Open",
    image: "/athletes/eirfan.jpg",
    link: "eirfan"
  },
  {
    name: "Ryze Syean Sylvester",
    title: "U53 Men Sub Junior",
    image: "/athletes/ryze.jpg",
    link: "ryze"
  },
  {
    name: "Chong Jun Long",
    title: "U59 Men Sub Junior",
    image: "/athletes/junlong.jpg",
    link: "junlong"
  },
  {
    name: "Lee Cheng Zhe",
    title: "U74 Men Sub Junior",
    image: "/athletes/chengzhe.jpg",
    link: "chengzhe"
  },
  {
    name: "Carmen Kuan",
    title: "U76/U69 Women Open",
    image: "/athletes/carmen.jpg",
    link: "carmen"
  },
  {
    name: "Muhammad Shafiq Aiman bin Zaharuddin",
    title: "U120/120+ Men Open",
    image: "/athletes/aiman.jpg",
    link: "aiman"
  }
]
</script>

<style scoped>
.container {
  text-align: center;
}

.athlete-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.athlete-image {
  width: 600px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1em;
  color: #666;
}
</style>
