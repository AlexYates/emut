// import { products } from '../database'
import axios from 'axios'

// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
const generate = {
  async routes() {
    const API =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://gentle-stream-10329.herokuapp.com'
    return await axios.get(`${API}/products`).then(({ data: { products } }) => {
      return products.map((product) => {
        return {
          route: '/product/' + product.uuid,
          payload: product,
        }
      })
    })
  },
}

export default generate
