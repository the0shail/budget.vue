<template>
  <div>
    <div class="list__balance">
      <h4>Budget List</h4>
      <div class="item__budget">
        <h6 class="title">Зарплата</h6>
        <div class="info">
          <p class="number">100</p>
          <button class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listBudget',
    data: () => ({}),
  methods:{

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