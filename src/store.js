import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: null
  },
  mutations: {
    setIndex(state, index) {
      state.index = index;
    }
  },
  actions: {
    setIndex({ commit }, index) {
      commit("setIndex", index);
    },
  }
})
