<template>
    <v-card elevation="7">Teste</v-card>
    <button>a</button>
</template>

<script>
export default {
    computed: {
        simulations() {
            return this.$store.getters['api/getSimulation'];
        }
    },
}
</script>

<style>
    
</style>