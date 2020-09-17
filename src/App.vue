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

<style>

</style>
