<template>
    <div class="row">
        <div class="card-panel clearfix">
            <h1>Portfolio</h1>
            <p v-if="stockPortfolio.length <=0">You have no stocks right now.</p>
            <transition-group name="fade">
                <app-stock v-for="(stock, index) in stockPortfolio" :key="index" :stock="stock"></app-stock>
            </transition-group>

        </div>
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
    .clearfix:after {
        content: " "; /* Older browser do not support empty content */
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }

    .fade-enter-active {
        animation: fade-in 2s forwards;
    }
    .fade-leave-active {
        animation: fade-out 2s forwards;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>