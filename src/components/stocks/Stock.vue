<template>
    <div class="col m6 s12 l3">
        <div class="card-panel">
            <h4 class="center-align flow-text"> {{ stock.name }}</h4>
            <div class="tag-outlined center-align">Price: {{stock.price}} <span class="icon"><i class="fa fa-usd"></i></span></div>
            <div class="input-field">
                <input id="quantity" type="number" class="validate" v-model="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <div class="center-align">
                <button class="btn"
                        @click="buyStock"
                        :disabled="quantityInt <= 0 || !Number.isInteger(quantityInt)">Buy</button>
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
                let inputFields = event.target.parentNode.previousSibling.previousSibling.childNodes;
                //input field
                inputFields[2].classList.remove('active');
                //label
                inputFields[0].classList.remove('validate', 'valid');

            }
        },
        computed: {
            quantityInt () {
                return parseInt(this.quantity);
            }
        }
    }
</script>

<style scoped>


</style>