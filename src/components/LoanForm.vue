<template>
    <form @submit.prevent="handleSubmit" id="loanForm">
        <label>Valor do Empréstimo <span class="text-danger">*</span></label>
        <currency-input v-model="value" :options="{ currency: 'BRL' }" required/>

        <label>Instituição</label>
        <select multiple id="institution" v-model="selectedInstitutions">
            <option v-for="item in institutions" v-bind:value="{chave: item.chave}">{{ item }}</option>
        </select>

        <label>Convênio</label>
        <select multiple id="covenant" v-model="selectedCovenants">
            <option v-for="(item, index) in covenants" :value="item.value" :key="index">{{ item }}</option>
        </select>

        <label>Parcelas</label>
        <select id="portion">
            <option v-for="(item, index) in portions" :value="item.value" :key="index">{{ item }}</option>
        </select>

        <div class="submit">
            <button>Calcular</button>
        </div>
    </form>
</template>

<script>
import CurrencyInput from './CurrencyInput';
import axios from 'axios';
import env from '@/env.js'
// import Api from '@/api/Api' 

export default {
    components: { CurrencyInput },
    data () {
        return {
            value: 0,
            institutions: [],
            selectedInstitutions: [],
            covenants: [],
            selectedCovenants: [],
            portions: [36, 48, 60, 72, 84]
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        handleSubmit () {
            let loanForm = document.getElementById("loanForm");
            
            loanForm.querySelector('select[id=institution]');


            let data = {
                valor_emprestimo: this.value,
                instituicoes: this.institutions,
                convenios: this.covenants,
                parcelas: this.portions
            }

            axios.post(`${env.host}/simular`, data).then(response => {
                console.log(response)
            });
        },
        loadData() {
            // Getting institutions
            axios.get(`${env.host}/instituicao`).then(response => {
                for(let institution of Object.values(response.data)) {
                    this.institutions.push(institution.chave);
                }
            });

            // Getting covenants
            axios.get(`${env.host}/convenio`).then(response => {
                for(let covenant of Object.values(response.data)) {
                    this.covenants.push(covenant.chave);
                }
            });
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