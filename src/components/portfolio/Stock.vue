<template>
    <div class="col m6 s12 l3">
        <div class="card-panel green lighten-5">
            <h4 class="center-align flow-text"> {{ stock.name }}</h4>
        <div class="tag-outlined center-align">Price: {{stock.price}} <span class="icon"><i class="fa fa-usd"></i></span> | Quantity: {{ stock.quantity }}</div>
            <div class="input-field">
                <input id="quantity" type="number" class="validate" v-model="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <div class="center-align">
                <button class="btn"
                        @click="beginSellStock"
                        :disabled="quantityInt <= 0 || !Number.isInteger(quantityInt)">Sell</button>
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
                    message: 'Are you sure you want to sell all ' + this.stock.quantity + ' stocks?'
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
            beginSellStock (val) {
                const order = {
                    stockID: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                if(val == true){
                    console.log(val);
                    order.quantity = this.stock.quantity;
                    this.sellStock(order);
                    this.quantity = null;
                    return;
                }
                this.sellStock(order);
                this.quantity = null;
                let inputFields = event.target.parentNode.previousSibling.previousSibling.childNodes;
                console.log(event);
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