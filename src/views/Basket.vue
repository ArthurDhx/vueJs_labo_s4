<template>
  <div>
    <h2>In my basket :</h2>
    <v-container>
      <v-data-table
          v-model="selected"
          :headers="titres"
          :items="basket"
          :items-per-page="5"
          class="elevation-4"
          show-select
          item-key="id"
      >
      </v-data-table>
      moyenne sélection: {{average}}
      <v-btn @click="sendToLab()"
             class="ma-10 pa-5"
             shaped
             large
             block
      >Send to lab
      </v-btn>
    </v-container>

  </div>
</template>

<script>

  import {Virus} from "@/model";

  export default {
    name: 'Basket',
    computed: {
      basket(){return this.$store.getters["basket/basket"]},
      samples(){ return this.$store.getters["samples/samples"]},
      titres(){return this.$store.getters["viruses/titres"]},
      average() {return this.$store.getters["basket/average"]}
    },
    methods: {
      sendToLab : function() {
        let basket = this.basket
        basket.forEach(v => this.$store.commit('samples/addSample',v))
        this.$store.commit("basket/cleanBasket")
      },
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
