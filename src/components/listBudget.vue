<template>
  <div>
    <div class="list__balance">
      <h4>Budget List</h4>
      <div class="item__budget" v-for="budgetItem in this.budgetList" :key="budgetItem.title" :id="budgetItem.id">
        <h6 class="title">{{ budgetItem.title }}</h6>
        <div class="info">
          <p class="number">{{ budgetItem.value }}$</p>
          <button class="delete" @click="itemClickDelete">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'listBudget',
    data: () => ({}),
  computed: {
    ...mapGetters('budget', ['budgetList'])
  },
  methods:{
    ...mapActions('budget', ['itemDelete']),
    itemClickDelete(e){
      let keyBudgetList = Object.keys(this.budgetList);
      let clickId = e.path[2].id;

      keyBudgetList.forEach(item => {
        if (item === clickId){
          this.itemDelete(clickId);
        }
      });

    }
  }

}
</script>




<style scoped>

.list__balance{
  box-shadow: #b7b7b7 0px 0px 10px;
  padding: 20px 10px 5px 10px;
  border-radius: 7px;
}
.list__balance h4{
  font-size: 14px;
  margin: 0 0 25px 0;
}

.item__budget{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 20px 10px;

}
.item__budget h6{
  margin: 0;
  font-size: 14px;
  font-weight: normal;
}
.item__budget .info{
  display: flex;
  align-items: center;
}
.item__budget .info p{
  margin: 0;
  font-weight: bold;
}
.delete {
  background: #ff7a6b;
  color: #fff;
  border: #ff7a6b 1px solid;
  padding: 6px 10px;
  border-radius: 5px;
  margin-left: 10px;
}
</style>