<template>
    <form @submit.prevent="handleSubmit" id="loanForm">
        <label>Valor do Empréstimo <span class="text-danger">*</span></label>
        <currency-input v-model="value" :options="{ currency: 'BRL' }" required/>

        <label>Instituição</label>
        <select multiple="true" id="institution" v-model="selectedInstitutions">
            <option v-for="item in institutions" v-bind:value="item.chave">{{ item.valor }}</option>
        </select>

        <label>Convênio</label>
        <select multiple="true" id="covenant" v-model="selectedCovenants">
            <option v-for="item in covenants" v-bind:value="item.chave">{{ item.valor }}</option>
        </select>

        <label>Parcelas</label>
        <select id="portion" v-model="selectedPortion" placeholder="Selecione as parcelas">
            <option disabled selected value="0">Selecione as parcelas</option>
            <option v-for="(item, index) in portions" :key="index">{{ item }}</option>
        </select>

        <div class="submit">
            <button>Calcular</button>
        </div>
    </form>
</template>

<script>
import CurrencyInput from './CurrencyInput';

export default {
    components: { CurrencyInput },
    data () {
        return {
            value: 0,
            selectedInstitutions: [],
            selectedCovenants: [],
            selectedPortion: 0
        }
    },
    computed: {
        institutions() {
            return this.$store.getters['api/getInstitutions'];
        },
        covenants() {
            return this.$store.getters['api/getCovenants'];
        },
        portions() {
            return this.$store.getters['api/getPortions'];
        }
    },
    created() {
        this.$store.dispatch('api/setInstitutions');
        this.$store.dispatch('api/setCovenants');
    },
    methods: {
        handleSubmit () {
            let data = {
                valor_emprestimo: this.value,
                instituicoes:     this.selectedInstitutions,
                convenios:        this.selectedCovenants,
                parcelas:         this.selectedPortion
            }

            this.$store.dispatch('api/simulate', {data});
        }
    }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: #fff;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .text-danger {
        color:red;
    }

    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    button {
        background: #0A2540;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }

    .submit {
        text-align: center;
    }
</style>