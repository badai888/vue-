import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import code from './code'
import address from './address'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    code,
    address
  }
})
