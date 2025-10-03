<template>
  <div>
    <h1>IronHealth - About Us</h1>
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from './views/AboutUs.vue'

export default {
  name: 'App',
  components: {
    AboutUs
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 2rem;
  background-color: #f5f5f5;
}
</style>
