import {viruses} from "@/model";
export default {
  namespaced : true,
  state: () => ({
    viruses,
    titres: [
      {text: 'Names', value: 'name'},
      {text: 'Codes', value: 'code'},
      {text: 'Mortalites', value: 'mortalite'},
      { text: "", value: "controls", sortable: false }
    ]
  }),
  mutations: {
    storeViruses(state,virus){
      state.viruses.push(virus)
    }
  },
  getters: {
    viruses(state){return state.viruses},
    titres(state){return state.titres}
  },
}


