import axios from 'axios'
import env from '@/env.js'

export default {
    namespaced: true,
    state: {
        value: 0,
        institutions: [],
        covenants: [],
        portions: [36, 48, 60, 72, 84],
        simulation: null,
    },
    mutations: {
        setInstitutions(state, value) {
            state.institutions = value;
        },
        setCovenants(state, value) {
            state.covenants = value;
        },
        setSimulation(state, value) {
            state.simulation = value;
        },
        setValue(state, value) {
            state.value = value;
        }
    },
    actions: {
        setInstitutions({commit}) {
            axios.get(`${env.host}/instituicao`).then(response => {
                commit('setInstitutions', response.data);
            });
        },
        setCovenants({commit}) {
            axios.get(`${env.host}/convenio`).then(response => {
                commit('setCovenants', response.data);
            });
        },
        simulate({commit}, data) {
            axios.post(`${env.host}/simular`, data.data).then(response => {
                commit('setSimulation', response.data);
                commit('setValue', data.data.valor_emprestimo);
            });
        }
    },
    getters: {
        getInstitutions: state => {
            return state.institutions;
        },
        getCovenants: state => {
            return state.covenants;
        },
        getPortions: state => {
            return state.portions;
        },
        getSimulation: state => {
            return state.simulation;
        },
        getValue: state => {
            return state.value;
        }
    }
}
