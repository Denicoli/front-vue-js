<template>
  <h1>Empréstimo</h1>
  <LoanForm/>
  <Simulations v-if="simulations != null"/>
</template>

<script>
import LoanForm from './components/LoanForm.vue';
import Simulations from './components/Simulations.vue';

export default {
  name: 'App',
  components: {
    LoanForm,
    Simulations
  },
  computed: {
    simulations() {
        return this.$store.getters['api/getSimulation'];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}

h1 {
  color: #EF6C00;
}
</style>
