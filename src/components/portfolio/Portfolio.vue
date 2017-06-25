<template>
    <div class="row">
        <h1>Portfolio</h1>
        <p v-if="stockPortfolio.length <=0">You have no stocks right now.</p>
        <app-stock v-for="(stock, index) in stockPortfolio" :key="index" :stock="stock"></app-stock>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from '../../components/Portfolio/Stock.vue'
    export default {
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters([
              'stockPortfolio'
            ]),
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style>

</style>