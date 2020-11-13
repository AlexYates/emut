export const state = () => ({
  active: false,
})

export const getters = {
  active: (state) => {
    return state.active
  },
}

export const mutations = {
  activate: (state) => {
    state.active = true
  },
  deactivate: (state) => {
    state.active = false
  },
}

export const actions = {
  activate({ commit }) {
    commit('activate')
  },
  deactivate({ commit }) {
    commit('deactivate')
  },
  toggle({ commit, getters }) {
    if (getters.active) {
      commit('activate')
    } else {
      commit('deactivate')
    }
  },
}
