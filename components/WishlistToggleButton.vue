<template>
  <button
    class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    :class="styling.classes"
    title="Toggle in wishlist"
    @click.prevent="toggle(product)"
  >
    <div
      class="h-6 w-6"
      style="fill: currentColor"
      :style="`${styling.styles}`"
      v-html="PhHeart"
    />
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhHeart from '../phosphor-icons/assets/duotone/heart-duotone.svg?raw'

export default {
  name: 'WishlistToggleButton',
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters('wishlist', {
      exists: 'exists',
    }),
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
    PhHeart() {
      return PhHeart
    },
  },
  methods: {
    ...mapActions('wishlist', {
      toggle: 'toggle',
    }),
  },
}
</script>
