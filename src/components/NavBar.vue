<template>
  <div>

    <v-container>
      <v-row>
        <v-col  v-for="(t,index) in titles" :key="index" cols="4" md="4">
          <v-btn :style="{color: t.color}"  @click="$router.push({path:t.path}) "
                 class="ma-10 pa-5"
                 shaped
                 large
                 block
          >
            {{t.text}}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>


</template>

<script>
export default {
  name: 'NavBar',
  props: ['titles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
