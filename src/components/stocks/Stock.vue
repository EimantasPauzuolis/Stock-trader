<template>
    <div class="col m6 s12 l3">
        <div class="card-panel">
            <h4 class="center-align flow-text"> {{ stock.name }}</h4>
            <div class="tag-outlined center-align">Price: ${{stock.price}}</div>
            <div class="center-align">
                <div class="chip red accent-1" :class="{ 'visible-chip' : insufficientFunds }">
                    <span class="white-text">Insufficient funds</span>
                </div>
            </div>
            <div class="input-field">
                <input id="quantity" type="number" :class="{invalid: insufficientFunds}" v-model="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <div class="center-align">
                <button class="btn"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantityInt <= 0 || !Number.isInteger(quantityInt)">Buy</button>
                <!---->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data () {
            return {
                quantity: null
            }
        },
        methods: {
            buyStock (event) {
                const order = {
                    stockID: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantityInt
                };
                console.log(order);
                this.quantity = null;
                this.$store.dispatch('buyStock', order);
                let inputFields = document.querySelectorAll('label.active, input.active');
                for(let i = 0; i < inputFields.length; i++){
                    inputFields[i].classList.remove('active');
                }

            }
        },
        computed: {
            quantityInt () {
                return parseInt(this.quantity);
            },
            insufficientFunds () {
                return this.quantity * this.stock.price > this.funds
            },
            funds () {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>
    .chip {
        visibility: hidden;
    }

    .visible-chip {
        visibility: visible;
    }

</style>