<template>
  <button
    class="border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    :class="styling.classes"
    title="Toggle in cart"
    @click.prevent="toggle(product)"
  >
    <div
      class="h-6 w-6"
      style="fill: currentColor"
      :style="`${styling.styles}`"
      v-html="PhShoppingCart"
    />
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhShoppingCart from '../phosphor-icons/assets/duotone/shopping-cart-duotone.svg?raw'

export default {
  name: 'CartToggleButton',
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
    styling() {
      return this.exists(this.product.uuid)
        ? {
            classes: 'bg-indigo-700',
            styles: 'fill: white;',
          }
        : {
            classes: 'bg-gray-100',
            styles: '',
          }
    },
  },
  methods: {
    ...mapActions('cart', {
      toggle: 'toggle',
    }),
  },
}
</script>
