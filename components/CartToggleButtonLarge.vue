<template>
  <button
    class="bg-gray-900 border flex items-center justify-center p-2 rounded-lg shadow-lg text-lg text-white"
    @click.prevent="toggle(product)"
  >
    <ImageSVG :src="PhShoppingCart" />
    <LazySpacer />
    Toggle in cart
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
