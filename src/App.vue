<template>
  <h1>Empréstimo</h1>
  <LoanForm/>
</template>

<script>
import LoanForm from './components/LoanForm.vue';

export default {
  name: 'App',
  components: {
    LoanForm
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
