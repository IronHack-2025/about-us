<template>
  <div id="app">
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from './views/AboutUs.vue'

export default {
  components: {
    AboutUs
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
#app {
  background-color: white;
  min-height: 100vh;
}
</style>
