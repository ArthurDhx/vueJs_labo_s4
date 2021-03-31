export default {
  namespaced : true,
  state: () => ({
    parts:[]
  }),
  mutations: {
    addCodeToParts(state,code){
      state.parts.push(code)
      console.log(state.parts)
    },
    removePart(state,part){
      state.parts.splice(part,1)
    }
  },
  getters: {
    parts(state){return state.parts},
  }
}
