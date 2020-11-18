<template>
  <RouterLink
    class="bg-indigo-700 border flex items-center justify-center px-4 py-2 rounded-lg text-lg text-white"
    to="/checkout"
  >
    <div class="h-6 w-6" style="fill: currentColor" v-html="PhCreditCard" />
    <LazySpacer />
    Checkout
  </RouterLink>
</template>

<script>
import PhCreditCard from '../phosphor-icons/assets/duotone/credit-card-duotone.svg?raw'

export default {
  name: 'CheckoutLinkLarge',
  computed: {
    PhCreditCard() {
      return PhCreditCard
    },
  },
}
</script>
