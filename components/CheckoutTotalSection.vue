<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center mb-1 w-full">
      <div class="flex w-1/2">Number of items</div>
      <div class="flex justify-end w-1/2">{{ cartCount }}</div>
    </div>
    <div class="flex items-center mb-1 w-full">
      <div class="flex w-1/2">Sub-total</div>
      <div class="flex justify-end w-1/2">
        {{ currencyFormat(subTotal) }}
      </div>
    </div>
    <div class="flex items-center mb-1 w-full">
      <div class="flex w-1/2">Delivery</div>
      <div class="flex justify-end w-1/2">
        {{ currencyFormat(deliveryTotal) }}
      </div>
    </div>
    <div class="flex font-semibold items-center mb-1 text-lg w-full">
      <div class="flex w-1/2">Total</div>
      <div class="flex justify-end w-1/2">
        {{ currencyFormat(subTotal + deliveryTotal) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { currencyFormat } from '@/helpers'

export default {
  name: 'CheckoutTotalSection',
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    cartCount() {
      return this.products ? this.products.length : 0
    },
    subTotal() {
      return this.products.reduce(
        (accumulator, { price }) => (accumulator += Number(price)),
        0
      )
    },
    deliveryTotal() {
      return 3.99
    },
  },
  methods: {
    currencyFormat(value) {
      return currencyFormat(value)
    },
  },
}
</script>
