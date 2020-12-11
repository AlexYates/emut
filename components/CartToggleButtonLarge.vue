<template>
  <label
    class="border cursor-pointer flex items-center justify-center p-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-400 rounded-lg shadow-lg text-lg"
    :class="styling.classes"
    for="toggle"
    @click.prevent="toggle(product)"
    @keypress.enter="toggle(product)"
  >
    <div
      class="h-6 w-6"
      style="fill: currentColor"
      :style="`${styling.styles}`"
      v-html="PhShoppingCart"
    />
    <Spacer />
    Toggle in cart
    <input
      id="toggle"
      class="hidden"
      name="toggle"
      :selected="exists(product.uuid)"
      type="checkbox"
    />
  </label>
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
            classes: 'bg-indigo-700 text-white',
            styles: 'fill: white;',
          }
        : {
            classes: 'bg-white',
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
