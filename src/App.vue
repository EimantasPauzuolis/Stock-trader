<template>
  <div>
    <app-header></app-header>
   <main class="container">
       <section class="section">
           <router-view></router-view>
       </section>
   </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
      appHeader: Header,
      appFooter: Footer
  },
  created () {
      this.$store.dispatch('initStocks');
  }
}
</script>

<style>

    #app {
        height: 100vh;
    }
</style>
