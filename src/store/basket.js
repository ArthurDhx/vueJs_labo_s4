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
    average(state) {
      if (state.basket.length === 0) {
        return 0
      }
      let avg = 0
      state.basket.forEach(e => { avg += e.mortalite})
      return avg/state.basket.length
    }
  }
}
