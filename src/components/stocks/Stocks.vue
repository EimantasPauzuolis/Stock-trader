<template>
    <div class="row">
        <h1>Stocks</h1>
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        data () {
            return {
            }
        },
        components: {
            appStock: Stock
        },
        computed: {
            stocks () {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style>

</style>