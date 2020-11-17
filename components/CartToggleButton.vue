<template>
  <button
    class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    title="Toggle in cart"
    @click.prevent="toggle(product)"
  >
    <ImageSVG :src="PhShoppingCart" />
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const PhShoppingCart = require('../phosphor-icons/assets/duotone/shopping-cart-duotone.svg')

export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters('cart', {
      exists: 'exists',
    }),
    PhShoppingCart() {
      return PhShoppingCart
    },
    weight() {
      return this.exists(this.product.uuid) ? 'fill' : 'duotone'
    },
  },
  methods: {
    ...mapActions('cart', {
      toggle: 'toggle',
    }),
  },
}
</script>
