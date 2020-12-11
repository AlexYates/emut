export const state = () => ({
  search: '',
})

export const getters = {
  search: (state) => {
    return state.search
  },
}

export const mutations = {
  search: (state, term) => {
    state.search = term
  },
}

export const actions = {
  search({ commit }, term) {
    commit('search', term)
  },
}

export const search = {
  state,
  getters,
  mutations,
  actions,
}
