import { products as productsImported } from '../database'

export const state = () => ({
  products: productsImported,
})

export const getters = {
  all: (state) => {
    return state.products
  },
  exists: (state) => (uuid) => {
    return state.products.some((product) => product.uuid === uuid)
  },
  find: (state) => (uuid) => {
    return state.products.find((product) => product.uuid === uuid)
  },
  index: (state) => (uuid) => {
    return state.products.findIndex((product) => product.uuid === uuid)
  },
}

export const mutations = {
  add: (state, product) => {
    state.products.push(product)
  },
  remove: (state, index) => {
    state.products.splice(index, 1)
  },
}

export const actions = {
  add({ commit }, product) {
    commit('add', product)
  },
  remove({ commit }, index) {
    commit('remove', index)
  },
  toggle({ commit, getters }, product) {
    const index = getters.index(product.uuid)
    if (index === -1) {
      commit('add', product)
    } else {
      commit('remove', index)
    }
  },
}
