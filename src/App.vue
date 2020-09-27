<template>
  <div id="app">
    <app-header></app-header>
    <app-hero></app-hero>
    <app-form></app-form>
    <app-statistics></app-statistics>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Form from './components/Form.vue'
import Statistics from './components/Statistics.vue'
import Footer from './components/Footer.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-hero': Hero,
    'app-form': Form,
    'app-statistics': Statistics,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

// COLORS
:root {
  --color-primary: hsl(180, 66%, 49%);
  --color-secondary: hsl(257, 27%, 26%);
  --color-red: hsl(0, 87%, 67%);
  --color-gray: hsl(0, 0%, 75%);
  --color-gray-1: hsl(257, 7%, 63%);
  --color-darkBlue: hsl(255, 11%, 22%);
  --color-darkViolet: hsl(260, 8%, 14%);
  --color-white: rgba(255, 255, 255, 9.6);
}

body {
  background-color: var(--color-white);
  font-family: 'Poppins', sans-serif;
  color: var(--color-gray-1);
  width: 100%;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4 {
  color: var(--color-darkViolet);
}

</style>
