<template>
  <RouterLink
    class="bg-indigo-700 focus:bg-indigo-400 hover:bg-indigo-400 border flex items-center justify-center px-4 py-2 rounded-lg text-lg text-white focus:bg-indigo-400 hover:bg-indigo-400"
    to="/checkout"
  >
    <div class="h-6 w-6" style="fill: currentColor" v-html="PhCreditCard" />
    <Spacer />
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
