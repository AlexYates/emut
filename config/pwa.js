// https://pwa.nuxtjs.org/
const pwa = {
  meta: {
    theme_color: '#4c51bf',
  },
  workbox: {
    // https://pwa.nuxtjs.org/modules/workbox.html#config
    config: {
      debug: false,
    },
    // https://pwa.nuxtjs.org/modules/workbox.html#offline
    offline: true,
  },
}

export default pwa
