<template>
  <label
    class="border cursor-pointer flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    :class="styling.classes"
    for="toggle"
    title="Toggle in cart"
    @click.prevent="toggle(product)"
    @keypress.enter="toggle(product)"
  >
    <div
      class="h-6 w-6"
      style="fill: currentColor"
      :style="`${styling.styles}`"
      v-html="PhShoppingCart"
    />
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
            classes: 'bg-indigo-700',
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
