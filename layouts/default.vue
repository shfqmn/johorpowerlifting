<template>
  <div>
    <header>
      <Menu></Menu>
    </header>

    <main>
      <b-container fluid style="min-height: 100% !important; ">
        <b-row style="flex-grow: 1;">
          <b-col md="12">
            <Nuxt />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <footer class="footer">
      <span>Johor Powerlifting Association </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped>
.wrapper {

  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  background-color: #000000;
  margin-top: 100px;
  padding: 1rem;
  text-align: center;
  color: white;
}
</style>
