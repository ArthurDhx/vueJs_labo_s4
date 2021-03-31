import {viruses} from "@/model";
export default {
  namespaced : true,
  state: () => ({
    viruses
  }),
  mutations: {
    storeViruses(state,virus){
      state.viruses.push(virus)
    }

  },
  getters: {
    viruses(state){return state.viruses},
  },
}


