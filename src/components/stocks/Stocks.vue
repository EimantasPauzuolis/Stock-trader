<template>
    <div class="row">
        <div class="card-panel clearfix">
            <h1>Stocks</h1>
            <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
        </div>
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
    .card-panel {
        clear:both;
    }
    .clearfix:after {
        content: " "; /* Older browser do not support empty content */
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }
</style>