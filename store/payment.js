export const state = () => ({
  cvc: '',
  expiry: '',
  name: '',
  number: '',
})

export const getters = {
  cvc: (state) => {
    return state.cvc
  },
  expiry: (state) => {
    return state.expiry
  },
  name: (state) => {
    return state.name
  },
  number: (state) => {
    return state.number
  },
}

export const mutations = {
  cvc: (state, cvc) => {
    state.cvc = cvc
  },
  expiry: (state, expiry) => {
    state.expiry = expiry
  },
  name: (state, name) => {
    state.name = name
  },
  number: (state, number) => {
    state.number = number
  },
}

export const actions = {
  cvc({ commit }, cvc) {
    commit('cvc', cvc)
  },
  expiry({ commit }, expiry) {
    commit('expiry', expiry)
  },
  name({ commit }, name) {
    commit('name', name)
  },
  number({ commit }, number) {
    commit('number', number)
  },
}
