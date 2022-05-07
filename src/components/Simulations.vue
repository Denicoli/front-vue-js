<template>
    <div v-for="(simulation, institution) in simulations" class="container">
        <h2>Instituição: {{institution}}</h2>
        <div v-for="item in simulation" class="institution">
            <li>Valor Solicitado: R${{value}}</li>
            <br>
            <span class="test">{{item.parcelas}} parcelas de {{item.valor_parcela}} </span>
            <br>
            <li>Taxa de juros ao mês: {{item.taxa}}</li>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        simulations() {
            return this.$store.getters['api/getSimulation'];
        },
        value() {
            return this.$store.getters['api/getValue'];
        }
    },
}
</script>

<style>
    .institution {
        max-width: 420px;
        margin: 30px auto;
        background: #fff;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    .container {
        max-width: 420px;
        margin: 30px auto;
        background: rgba(239, 108, 0, 1);
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    h2 {
        color: white;
    }

    li {
        list-style-type: none;
    }
</style>