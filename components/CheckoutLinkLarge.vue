<template>
  <RouterLink
    class="bg-gray-900 border flex items-center justify-center px-4 py-2 rounded-lg text-lg text-white"
    to="/checkout"
  >
    <PhCreditCard />
    <LazySpacer />
    Checkout
  </RouterLink>
</template>

<script>
import { PhCreditCard } from 'phosphor-vue'

export default {
  components: {
    PhCreditCard,
  },
}
</script>
