<template>
  <label
    class="focus:bg-indigo-400 hover:bg-indigo-400 border cursor-pointer flex items-center justify-center m-2 p-2 rounded-full shadow-lg focus:text-white hover:text-white"
    :class="styling.classes"
    for="toggle"
    title="Toggle in wishlist"
    @click.prevent="toggle(product)"
    @keypress.enter="toggle(product)"
  >
    <div
      class="h-6 w-6"
      style="fill: currentColor"
      :style="`${styling.styles}`"
      v-html="PhHeart"
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
            classes: 'bg-indigo-700 text-white',
            styles: 'fill: white;',
          }
        : {
            classes: 'bg-white',
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
