import { signIn, signOut } from '@/database/account'

export const state = () => ({
  account: {},
  hasError: false,
  inProgress: false,
  motionActive: false,
  signedIn: false,
})

export const getters = {
  account: (state) => {
    return state.account
  },
  hasError: (state) => {
    return state.hasError
  },
  inProgress: (state) => {
    return state.inProgress
  },
  motionActive: (state) => {
    return state.motionActive
  },
  signedIn: (state) => {
    return state.signedIn
  },
}

export const mutations = {
  account(state, { email, password }) {
    state.account = { email, password }
  },
  hasError(state, bool) {
    state.hasError = bool
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
    commit('hasError', false)
    commit('inProgress', true)
    signIn({ email, password })
      .then(({ status }) => {
        if (status === 200) {
          commit('account', { email, password })
          commit('signIn')
          commit('inProgress', false)
        } else {
          commit('hasError', true)
          commit('inProgress', false)
        }
      })
      .catch((error) => {
        /* eslint-disable-next-line */
        console.error('Error', error)
      })
  },
  signOut({ commit }, { email, password }) {
    commit('hasError', false)
    commit('inProgress', true)
    signOut({ email, password })
      .then(({ status }) => {
        if (status === 200) {
          commit('signOut')
          commit('inProgress', false)
        } else {
          commit('hasError', true)
          commit('inProgress', false)
        }
      })
      .catch((error) => {
        /* eslint-disable-next-line */
        console.error('Error', error)
      })
  },
}

export const account = {
  state,
  getters,
  mutations,
  actions,
}
