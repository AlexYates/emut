<template>
  <button
    class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    title="Toggle in wishlist"
    @click.prevent="toggle(product)"
  >
    <ImageSVG :src="PhHeart" />
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const PhHeart = require('../phosphor-icons/assets/duotone/heart-duotone.svg')

export default {
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
    PhHeart() {
      return PhHeart
    },
    weight() {
      return this.exists(this.product.uuid) ? 'fill' : 'duotone'
    },
  },
  methods: {
    ...mapActions('wishlist', {
      toggle: 'toggle',
    }),
  },
}
</script>
