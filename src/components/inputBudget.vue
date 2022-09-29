<template>
  <div>
    <div class="input__info">
      <form class="form__info">
        <div class="input_div">
          <label><span>*</span> Type</label>
          <select class="input" v-model="select">
            <option value="positive">Plus</option>
            <option value="negative">Minus</option>
          </select>
        </div>
        <div class="input_div">
          <label><span>*</span> Comments</label>
          <input class="input" type="text" placeholder="Something" v-model="title" >
        </div>
        <div class="input_div">
          <label><span>*</span> Value</label>
          <input class="input" type="number" placeholder="100" v-model="value" >
        </div>
        <button class="btnSubmit" type="submit" @click="submitButton">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'inputBudget',
  data:() => ({
    select: 'positive',
    title: '',
    value: '',
  }),
  methods:{
    ...mapActions('budget', ['addNewRep']),
    submitButton(e){
      e.preventDefault()
      let num = this.value;

      // Проверка на пустые строки
      if (this.title === '' || this.value === '') {
        alert("Вы не ввели данные\nПовторите попытку")
      }
      else {
        // Проверка минуса в value
        if ((this.select === 'negative' && Math.sign(this.value) === 1) ||
            (this.select === 'positive' && Math.sign(this.value) === -1) ){
          num = -this.value;
        }

        let newRep = {
          title: this.title,
          value: num,
        }
        this.title = '';
        this.value = '';

        this.addNewRep(newRep)
      }

    }
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
.input__info .input_div label{
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