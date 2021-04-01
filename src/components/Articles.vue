<template>
  <div>
    <v-data-table
        :headers="titres"
        :items="collec"
        :items-per-page="5"
        class="elevation-1"
        show-select
        item-key="id"

    >
      <template v-slot:item.mortalite="{ item }">
        <v-chip :style="{background : getColor(item.mortalite)}" dark>
          {{ item.mortalite }}
        </v-chip>
      </template>

      <template v-slot:item.controls="props">
        <v-btn @click="sendToBasket(props.item)"
               class="ma-10 pa-5"
               shaped
               large
               outlined
        >Clone virus for the lab
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  computed: {
    collec() { return this.$store.getters["viruses/viruses"] },
    titres() {return this.$store.getters["viruses/titres"]}
  },
  methods:{
    sendToBasket: function(virus) {
      this.$store.commit('basket/addVirus',virus)
    },
    getColor (mortalite) {
      if (mortalite > 10) return 'red'
      else if (mortalite> 5) return 'orange'
      else return 'green'
    },
  }
}
</script>

<style scoped>
</style>
