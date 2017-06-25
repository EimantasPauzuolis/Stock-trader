<template>
    <span>
        <!-- Modal Trigger -->
        <button :data-target="settings.id" class="btn">{{ settings.action }}</button>
        <!-- Modal Structure -->
        <div :id="settings.id" class="modal">
            <div class="modal-content">
                <h5>{{ settings.message}}</h5>
            </div>
            <div class="modal-footer center-align">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn" @click="confirm">Yes</a>
                <a href="#" class="modal-action modal-close waves-effect waves-green btn" @click="cancel">Cancel</a>
            </div>
        </div>
    </span>
</template>

<script>
    export default {
        props: ['settings'],
        data () {
            return {
            }
        },
        mounted () {
            $('.modal').modal();
        },
        methods: {
            confirm () {
                const confirmation = true;
                this.$emit('confirmed', confirmation);
            },
            cancel () {
                this.$emit('cancel')
            }
        }
    }
</script>

<style>
    .modal {
        width: 30%;
    }
</style>