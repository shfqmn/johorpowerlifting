<template>
  <b-row>
    <b-col md="12">
      <nav class="menu">
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand>
            <NuxtLink to="/" class="black-link">
              <img src="/jap_logo.jpg" alt="Johor Powerlifting Association" width="75" height="75" class="rounded-circle" />
            </NuxtLink>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <client-only>
              <b-navbar-nav class="ml-auto">
                <b-nav-item>
                  <NuxtLink to="/" class="black-link">Home</NuxtLink>
                </b-nav-item>
                <b-nav-item>
                  <NuxtLink to="aboutus" class="black-link">About us</NuxtLink>
                </b-nav-item>
                <b-nav-item>
                  <NuxtLink to="coaches" class="black-link">Coaches</NuxtLink>
                </b-nav-item>
                <b-nav-item>
                  <NuxtLink to="events" class="black-link">Events</NuxtLink>
                </b-nav-item>
                <b-nav-item>
                  <NuxtLink to="contactUs" class="black-link">Contact us</NuxtLink>
                </b-nav-item>
              </b-navbar-nav>
            </client-only>
          </b-collapse>
        </b-navbar>
      </nav>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.menu {
  margin-bottom: 20px;
}

.black-link {
  text-decoration: none;
  color: white;
}

.black-link:hover {
  text-decoration: none;
  font-style: italic;
}
</style>
