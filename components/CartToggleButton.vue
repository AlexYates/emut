<template>
  <button
    class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg"
    title="Toggle in cart"
    @click.prevent="toggle(product)"
  >
    <PhShoppingCart :weight="weight" />
  </button>
</template>

<script>
import { PhShoppingCart } from 'phosphor-vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    PhShoppingCart,
  },
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
