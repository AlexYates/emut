<template>
  <RouterLink
    class="bg-gray-900 border flex items-center justify-center px-4 py-2 rounded-lg text-lg text-white"
    to="/checkout"
  >
    <ImageSVG :src="PhCreditCard" />
    <LazySpacer />
    Checkout
  </RouterLink>
</template>

<script>
const PhCreditCard = require('../phosphor-icons/assets/duotone/credit-card-duotone.svg')

export default {
  computed: {
    PhCreditCard() {
      return PhCreditCard
    },
  },
}
</script>
