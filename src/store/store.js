import Vuex from 'vuex'
import {SOME_MUTATION} from './mutation-type';

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [SOME_MUTATION] (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
