export const actions = {
  async nuxtServerInit({ dispatch }) {
    const API =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://gentle-stream-10329.herokuapp.com'
    const { products } = await this.$axios.$get(`${API}/products`)
    dispatch('products/load', products)
  },
}
