export default {
  namespaced : true,
  state: () => ({
    samples : []
  }),
  mutations: {
    removeSample(state,sample){
      state.samples.splice(sample,1)
    },
    addSample(state,sample){
      state.samples.push(sample)
    },
  },
  getters: {
    samples(state){return state.samples},
  }
}
