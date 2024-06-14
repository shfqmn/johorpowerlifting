<template>
  <div>
    <header>
      <Menu></Menu>
    </header>
    <main class="content">
      <b-container fluid>
        <b-row>
          <b-col>
            <Nuxt />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped></style>
