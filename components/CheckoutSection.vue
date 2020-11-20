<template>
  <div
    class="bg-gray-100 border flex flex-col justify-start p-2 rounded-lg shadow-lg w-full"
  >
    <h2 class="font-semibold mb-4 text-lg">Checkout</h2>
    <CheckoutTotalSection />
    <Spacer />
    <CheckoutLinkLarge />
    <template v-if="products && products.length >= 8">
      <Spacer />
      <Expander />
      <div class="hidden md:flex">
        <CheckoutLinkLarge class="w-full" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
  },
}
</script>
