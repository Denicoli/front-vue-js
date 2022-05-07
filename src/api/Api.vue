<script>
import axios from 'axios';
import env from '@/env.js'

export default {
    name: 'Api',
    data() {
        return {
            covenants: [],
            institutions: [],
        }
    },
    created() {
        this.getInstitutions();
        this.getCovenants();
    },
    methods: {
        getInstitutions() {
            axios.get(`${env.host}/instituicao`).then(response => {
                for(let institution of Object.values(response.data)) {
                    this.institutions.push(institution.chave);
                }
            });
        },
        getCovenants() {
            axios.get(`${env.host}/convenio`).then(response => {
                for(let covenant of Object.values(response.data)) {
                    this.covenants.push(covenant.chave);
                }
            });
        }
    },
}
</script>