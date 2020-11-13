import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  account: null,
  inProgress: false,
  signedIn: false,
})

export const getters = {
  account: (state) => {
    return state.account
  },
  signedIn: (state) => {
    return state.signedIn
  },
}

export const mutations = {
  account(state, { email, password, uuid }) {
    state.account = { email, password, uuid }
  },
  inProgress(state, bool) {
    state.inProgress = bool
  },
  signIn: (state) => {
    state.signedIn = true
  },
  signOut: (state) => {
    state.signedIn = false
  },
}

export const actions = {
  signIn({ commit }, { email, password }) {
    commit('inProgress', true)
    setTimeout(() => {
      commit('account', { email, password, uuid: uuidv4() })
      commit('signIn')
      commit('inProgress', false)
    }, 125)
  },
  signOut({ commit }) {
    commit('signOut')
  },
}
