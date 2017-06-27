<template>
  <div>
    <app-header></app-header>
   <main class="container">
       <section class="section">
           <transition name="slide" mode="out-in">
               <router-view></router-view>
           </transition>
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

    .slide-enter-active {
        animation: 0.2s slide-in forwards;
    }
    .slide-leave-active {
        animation: 0.2s slide-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity:0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity:1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
