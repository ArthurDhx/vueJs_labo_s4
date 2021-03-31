import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import viruses from './viruses.js'
import samples from './samples.js'
import parts from './parts.js'
import basket from './basket.js'


export default new Vuex.Store({
  modules: {
    viruses,
    samples,
    parts,
    basket
  }
})

