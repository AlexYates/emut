import { products } from '../database'

// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
const generate = {
  routes() {
    const routes = products.map((product) => {
      return {
        route: '/product/' + product.uuid,
        payload: product,
      }
    })
    return routes
  },
}

export default generate
