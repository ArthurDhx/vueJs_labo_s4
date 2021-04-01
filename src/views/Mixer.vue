<template>
  <div>
    <table border="0">
      <tr>
        <td><h1>Parts</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['code']" :entries="parts" @chosen-changed="chosenParts = $event" />
        </td>
      </tr>
    </table>
    <v-btn @click="mix()" :disabled="chosenParts.length===0" class="mr-10 pa-5" shaped outlined>
      Mixing
    </v-btn>

    <hr/>
    <v-btn @click="$router.push({path:'/labo/slice'})" class="ma-10 pa-5" shaped large block>
      Go to slicer
    </v-btn>

    <hr/>

    <v-simple-table v-if="newVirus != null" style="margin-top: 20px">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">

          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Input
          </th>
          <th class="text-left">
            Code
          </th>
          <th class="text-left">
            Mortality
          </th>
          <th class="text-left">

          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>New virus:</td>
          <td><v-text-field v-model.number="newVirus.name"></v-text-field></td>
          <td>{{newVirus.code}}</td>
          <td>{{newVirus.mortalite}}</td>
          <td>
            <v-btn @click="sendToLibrary" class="mr-10 pa-5" shaped outlined>
            Send to Library
          </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>


  </div>
</template>

<script>
import {Virus} from '@/model'
import CheckedList from '../components/CheckedList.vue'

export default {
  name: 'Mixer',
  computed: {
    parts(){return this.$store.getters["parts/parts"]},
    viruses(){return this.$store.getters["viruses/viruses"]}
  },
  data : () => {
    return {
      chosenParts:[],
      newVirus : null
    }
  },
  components: {
    CheckedList
  },
  methods: {
    mix : function() {
      let newCode="";

      let chosen = [...this.chosenParts]; // real copy so that we can splice on the copy
      let nb = chosen.length;
      for(let i=0;i<nb;i++) {
        // choose randomly a part among the selected ones
        let idx = Math.floor(Math.random() * chosen.length);
        let p = this.parts[chosen[idx]];
        newCode = newCode+p.code;
        chosen.splice(idx,1);
      }
      this.newVirus = new Virus(this.viruses.length,'mixedvirus',newCode);
      // remove chosen parts
      for(let i=this.chosenParts.length-1;i>=0;i--) {
        this.$store.commit("parts/removePart",this.chosenParts[i])
      }
      // unselect all
      this.chosenParts.splice(0,this.chosenParts.length)
    },
    sendToLibrary : function() {
      this.$store.commit("viruses/storeViruses",this.newVirus)
      this.newVirus = null;
    }
  }
}
</script>

<style scoped>
</style>
