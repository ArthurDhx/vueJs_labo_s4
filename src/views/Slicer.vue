<template>
  <div>
    <v-container fluid>

      <h2>Viruses</h2>

      <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="chosenViruses = $event" />

      <v-row>
        <v-col>
          <v-text-field label="part length:" id="cute" v-model.number="cutFactor"></v-text-field>
          <v-btn @click="cut()" :disabled="chosenViruses.length===0" class="mr-10 pa-5" shaped outlined>
            Cut
          </v-btn>
        </v-col>
        <v-col>
          <v-text-field label="Nb mutations" id="mute" v-model.number="nbMutation"></v-text-field>
          <v-btn @click="mutation()" :disabled="chosenViruses.length===0" class="mr-10 pa-5" shaped outlined>
            Mutation
          </v-btn>
        </v-col>
      </v-row>

      <hr/>

      <v-btn @click="$router.push({path:'/labo/mix'})" class="ma-10 pa-5" shaped large block>
        Go to mixer
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import CheckedList from '../components/CheckedList.vue'

export default {
  name: 'Slicer',
  computed: {
    samples() { return this.$store.getters["samples/samples"]}
  },
  data : () => {
    return {
      chosenViruses:[],
      cutFactor: 5,
      nbMutation : 10,
    }
  },
  components: {
    CheckedList
  },

  methods: {
    cut : function() {
      console.log(this.cutFactor)
      if (this.cutFactor === 0) return;
      this.chosenViruses.forEach(e => {
        let s = this.samples[e];
        for(let i=0;i<s.code.length;i+=this.cutFactor) {
          this.$store.commit("parts/addCodeToParts",{code : s.code.substring(i,i+this.cutFactor)})
        }
      });
      // remove chosen viruses
      for(let i=this.chosenViruses.length-1;i>=0;i--) {
        this.$store.commit("samples/removeSample",this.chosenViruses[i])
      }
      // unselect all
      this.chosenViruses.splice(0,this.chosenViruses.length)
    },
    mutation : function() {
      if (this.nbMutation === 0) return;

      this.chosenViruses.forEach(e => {
        let newCode;
        let s = this.samples[e];
        for(let i=0;i<this.nbMutation;i++) {
          let idx = Math.floor(Math.random() * s.code.length);
          let chr =  String.fromCharCode(Math.floor(Math.random() * 4)+ "A".charCodeAt(0));
          newCode = s.code.substring(0,idx) + chr + s.code.substring(idx+1);
          s.code = newCode;
          s.updateCaracs();
        }
      });
    }
  },
}
</script>

<style scoped>
</style>
