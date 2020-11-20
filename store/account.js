import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  account: null,
  inProgress: false,
  motionActive: false,
  signedIn: false,
})

export const getters = {
  account: (state) => {
    return state.account
  },
  motionActive: (state) => {
    return state.motionActive
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
  motionActivate(state) {
    state.motionActive = true
  },
  motionDeactivate(state) {
    state.motionActive = false
  },
  signIn: (state) => {
    state.signedIn = true
  },
  signOut: (state) => {
    state.signedIn = false
  },
}

export const actions = {
  motionToggle({ commit, getters }) {
    if (getters.motionActive) {
      commit('motionDeactivate')
    } else {
      commit('motionActivate')
    }
  },
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
