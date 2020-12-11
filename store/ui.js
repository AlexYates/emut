export const state = () => ({
  cartActive: false,
  //
  navigationActive: false,
  //
  overlayActive: false,
  //
  searchActive: false,
})

export const getters = {
  cartActive: (state) => {
    return state.cartActive
  },
  //
  navigationActive: (state) => {
    return state.navigationActive
  },
  //
  overlayActive: (state) => {
    return state.overlayActive
  },
  //
  searchActive: (state) => {
    return state.searchActive
  },
}

export const mutations = {
  cartActivate: (state) => {
    state.cartActive = true
  },
  cartDeactivate: (state) => {
    state.cartActive = false
  },
  //
  navigationActivate: (state) => {
    state.navigationActive = true
  },
  navigationDeactivate: (state) => {
    state.navigationActive = false
  },
  //
  overlayActivate: (state) => {
    state.overlayActive = true
  },
  overlayDeactivate: (state) => {
    state.overlayActive = false
  },
  //
  searchActivate: (state) => {
    state.searchActive = true
  },
  searchDeactivate: (state) => {
    state.searchActive = false
  },
}

export const actions = {
  cartActivate({ commit }) {
    commit('cartActivate')
  },
  cartDeactivate({ commit }) {
    commit('cartDeactivate')
  },
  cartToggle({ commit, getters }) {
    if (getters.cartActive) {
      commit('cartActivate')
    } else {
      commit('cartDeactivate')
    }
  },
  //
  navigationActivate({ commit }) {
    commit('navigationActivate')
  },
  navigationDeactivate({ commit }) {
    commit('navigationDeactivate')
  },
  navigationToggle({ commit, getters }) {
    if (getters.navigationActive) {
      commit('navigationActivate')
    } else {
      commit('navigationDeactivate')
    }
  },
  //
  overlayActivate({ commit }) {
    commit('overlayActivate')
  },
  overlayDeactivate({ commit }) {
    commit('overlayDeactivate')
  },
  overlayToggle({ commit, getters }) {
    if (getters.overlayActive) {
      commit('overlayActivate')
    } else {
      commit('overlayDeactivate')
    }
  },
  //
  searchActivate({ commit }) {
    commit('searchActivate')
  },
  searchDeactivate({ commit }) {
    commit('searchDeactivate')
  },
  searchToggle({ commit, getters }) {
    if (getters.searchActive) {
      commit('searchActivate')
    } else {
      commit('searchDeactivate')
    }
  },
}

export const ui = {
  state,
  getters,
  mutations,
  actions,
}
