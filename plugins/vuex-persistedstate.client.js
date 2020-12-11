import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      fetchBeforeUse: true,
      key: 'emut',
      overwrite: true,
      paths: [
        'account',
        'cart',
        'navigation',
        'overlay',
        'payment',
        'search',
        'ui',
        'wishlist',
      ],
    })(store)
  })
}
