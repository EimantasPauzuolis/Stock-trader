<template>
    <div class="col m6 s12 l3">
        <div class="card-panel green lighten-5">
            <h4 class="center-align flow-text"> {{ stock.name }}</h4>
        <div class="tag-outlined center-align">Price: ${{stock.price}} | Quantity: {{ stock.quantity }}</div>
            <div class="center-align">
                <div class="chip red accent-1" :class="{ 'visible-chip' : insufficientQuantity }">
                    <span class="white-text">Not enough stocks</span>
                </div>
            </div>
            <div class="input-field">
                <input id="quantity" type="number" :class="{invalid: insufficientQuantity}" v-model="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <div class="center-align">
                <button class="btn"
                        @click="beginSellStock"
                        :disabled="insufficientQuantity || quantityInt <= 0 || !Number.isInteger(quantityInt)">Sell</button>
                <app-modal :settings="settings" @confirmed="beginSellStock($event)"></app-modal>
            </div>
        </div>
    </div>
</template>

<script>
    import Modal from '../../components/Modal.vue'
    import { mapActions } from 'vuex'
    export default {
        props: ['stock'],
        data () {
            return {
                quantity: null,
                settings: {
                    id: this.stock.id,
                    action: 'Sell all',
                    quantity: this.stock.quantity
                }
            }
        },
        components: {
          appModal: Modal
        },
        methods: {
            ...mapActions([
                'sellStock'
            ]),
            beginSellStock (confirmation = false) {
                const order = {
                    stockID: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                if(confirmation === true){
                    console.log(confirmation);
                    order.quantity = this.stock.quantity;
                    this.sellStock(order);
                    this.quantity = null;
                    return;
                }
                this.sellStock(order);
                this.quantity = null;
                this.settings.quantity -= order.quantity;
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
            funds () {

            },
            insufficientQuantity () {
                return this.quantity > this.stock.quantity;
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