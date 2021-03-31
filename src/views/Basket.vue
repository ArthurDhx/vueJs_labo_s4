<template>
  <div>
    <h2>In my basket :</h2>
    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in basket" :key="index">
        <td>{{v.name}}</td>
        <td>{{v.code}}</td>
        <td>{{v.mortalite}}</td>
      </tr>
    </table>
    <button @click="sendToLab()">Send to the lab</button>
  </div>
</template>

<script>

  import {Virus} from "@/model";

  export default {
    name: 'Basket',
    computed: {
      basket(){return this.$store.getters["basket/basket"]},
      samples(){ return this.$store.getters["samples/samples"]}
    },
    methods: {
      sendToLab : function() {
        let basket = this.basket
        basket.forEach(v => this.$store.commit('samples/addSample',v))
        this.$store.commit("basket/cleanBasket")
      }
    },
    /*
    watch: {
      operation(to, from) {
        if (to === 'addbasket') {
          this.$store.commit("basket/addVirus",new Virus(0,this.name, this.code))
          this.$router.push({path:'/library/view'})
        }
      }
      }
     */
  }
</script>

<style scoped>
</style>
