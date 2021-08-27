/* 模块moduleA 示例，请自行调整 */

const moduleA = {
  state: {
    num: 1
  },
  mutations: {
    mutationAddNum (state, n = 0) {
      return (state.num += n)
    }
  },

  actions: {
    actionAddNum ({ commit }, n = 0) {
      commit('mutationAddNum', n)
    }
  },

  getters: {
    getText (state) {
      return state.num + '!'
    }
  }
}

export default moduleA
