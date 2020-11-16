<template>
  <button
    class="bg-gray-900 border flex items-center justify-center p-2 rounded-lg shadow-lg text-lg text-white"
    @click.prevent="toggle(product)"
  >
    <PhShoppingCart :weight="weight" />
    <Spacer />
    Toggle in cart
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
