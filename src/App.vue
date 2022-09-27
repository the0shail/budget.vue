<template>
  <div class="app">
    <inputBudget />
    <h3 class="balance">Balance: 50$</h3>
    <listBudget />
  </div>
</template>

<script>
import inputBudget from './components/inputBudget';
import listBudget from "./components/listBudget";


export default {
  name: 'App',
  components: {
    inputBudget, listBudget
  }
}
</script>

<style>
body{
  background: #c8c8c8;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 350px;
  margin: auto;
  background: #ffffff;
  padding: 30px 60px 80px 60px;
  border-radius: 10px;

}

.balance{
  text-transform: uppercase;
  text-align: center;
  margin: 30px 0 ;
}
</style>
