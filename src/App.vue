<template>
  <div class="app">
    <inputBudget />
    <h3 class="balance">Balance: {{ amountCount }}$</h3>
    <listBudget />
  </div>
</template>

<script>
import inputBudget from './components/inputBudget';
import listBudget from "./components/listBudget";
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    inputBudget, listBudget
  },
  computed:{
    ...mapGetters('budget', ['budgetList']),
    amountCount(){
      let amount = 0;
      let valueBudgetList = Object.values(this.budgetList);

      valueBudgetList.forEach(item => {
        amount += item.value;
      });

      return amount;
    }

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
