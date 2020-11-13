<template>
  <button
    class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    title="Toggle in wishlist"
    @click.prevent="toggle(product)"
  >
    <PhHeart :weight="weight" />
  </button>
</template>

<script>
import { PhHeart } from 'phosphor-vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    PhHeart,
  },
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
