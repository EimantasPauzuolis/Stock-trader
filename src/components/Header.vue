<template>
    <nav class="nav-extended teal lighten-5">
        <div class="nav-wrapper teal lighten-5">
            <div class="row">
                <div class="col s12">
                    <a href="#!" class="brand-logo black-text" :class="{center: windowWidth > 992, left: windowWidth < 992}"><img src="../assets/logo.png" height="32px" alt="">Stock trader</a>
                </div>
                <div class="col s12">
                    <ul id="nav-mobile" class="right">
                        <li><a class="dropdown-button btn" data-activates='dropdown1'>Save / Load</a></li>
                        <ul id='dropdown1' class='dropdown-content'>
                            <li><a href="#!" @click="saveData">Save</a></li>
                            <li><a href="#!" @click="loadData">Load</a></li>
                        </ul>
                        <li><a class="btn" @click="endDay">End day</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav-content">
            <ul class="tabs tabs-transparent cyan lighten-4">
                <router-link tag="li" to="/" class="tab" activeClass="active" exact><a class="black-text">Home</a></router-link>
                <router-link tag="li" to="/portfolio" class="tab" activeClass="active"><a class="black-text">Portfolio</a></router-link>
                <router-link tag="li" to="/stocks" class="tab" activeClass="active"><a class="black-text">Stocks</a></router-link>
                <li class="right tab valign-wrapper"><span class="chip teal lighten-2 white-text">Credits:  ${{ funds }} </span></li>
            </ul>
        </div>
        <div v-if="loading" class="spinner">

        </div>
    </nav>
</template>

<script>
    import axios from 'axios'
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                windowWidth: 0,
                windowsHeight: 0,
                loading: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.getWindowWidth);
                //Init
                this.getWindowWidth();
            })
        },
        computed: {
            ...mapGetters([
                'funds'
            ]),
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData : 'loadData'
            }),
            getWindowWidth (event) {
                this.windowWidth = document.documentElement.clientWidth;
            },
            endDay () {
                this.randomizeStocks();
            },
            saveData () {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$axios.put('data.json', data);
            },
            loadData () {
                this.loading = true;

                setTimeout(() => {
                    this.fetchData()
                        .then(() => {
                            this.loading = false;
                        });
                },1000);

            }
        },
        created () {
            $(".dropdown-button").dropdown();
            $('ul.tabs').tabs();

        },

    }
</script>

<style scoped>
    .nav-wrapper {
        padding: 0 40px;
    }

    .brand-logo {
        font-family: monospace;
    }

    .tabs.tabs-transparent .indicator {
        background-color: none;
    }

    @media(max-width: 992px) {
        .logoContainer {
            display: block;
            width: 100%;
        }
    }
    i {
        display: inline;
    }

    li span {
        margin-right: 20px;
        font-size: 20px;
    }

    .spinner {
        position: fixed;
        top: calc(50% - 100px);
        left: calc(50% - 100px);
        height: 200px;
        width: 200px;
        border-radius: 50%;
        border: 10px solid #b2ebf2;
        border-top: 10px solid #26a69a;
        background-color: transparent;
        animation: spin 2s infinite;
    }
    .spinner:before {
        content: '';
        width: 300px;
        height: 300px;
        background-color: black;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>