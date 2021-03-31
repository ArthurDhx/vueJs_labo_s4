export default {
  namespaced : true,
  state: () => ({
    basket:[]
  }),
  mutations: {
    cleanBasket(state){
      state.basket.splice(0,state.basket.length)
    },
    addVirus(state,virus){
      state.basket.push(virus)
    }
  },
  getters: {
    basket(state){return state.basket},
  }
}
