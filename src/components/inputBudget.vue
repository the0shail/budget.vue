<template>
  <div>
    <div class="input__info">
      <form class="form__info">
        <div class="input_div">
          <p><span>*</span> Type</p>
          <select class="input">
            <option value="positive">Прибавить</option>
            <option value="negative">Минусовать</option>
          </select>
        </div>
        <div class="input_div">
          <p><span>*</span> Comments</p>
          <input class="input" type="text" >
        </div>
        <div class="input_div">
          <p><span>*</span> Value</p>
          <input class="input" type="number">
        </div>
        <button class="btnSubmit" >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputBudget',
  data:() => ({}),
  methods:{

  }
}
</script>

<style scoped>



.input__info{
  box-shadow: #b7b7b7 0px 0px 10px;
  /*padding: 10px;*/
  width: auto;
  border-radius: 7px;
}

.input__info .input_div{
  margin-bottom: 10px ;
}
.input__info .input_div p{
  margin:0 0 10px 0;
  font-size: 14px;
}
.input__info .form__info{
  padding: 20px 10px;
}
.input__info .input_div span{
  color: #ff7a6b;
  font-size: 18px;
}
.input__info .input_div .input{
  display: flex;
  width: 100%;

  height: 30px;
  border: #b7b7b7 1px solid;
  border-radius: 3px;
  padding: 6px;
  font-size: 12px;
  box-sizing: border-box;
}
.btnSubmit{
  background: #379bff;
  color: #fff;
  border: #379bff 1px solid;
  padding: 6px 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>