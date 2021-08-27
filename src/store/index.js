/** 做了全局和模块内的vuex区分 */
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import { mutations } from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleA
  },
  mutations,
  actions,
  state: {
    groups: [1]
  },
  getters: {
    getGroups (state) {
      return state.groups
    }
  }
})
