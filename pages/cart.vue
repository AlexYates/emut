<template>
  <main id="cart" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>
      Cart
      <Pip v-if="cartCount > 0" title="Number of products in cart">
        {{ cartCount }}
      </Pip>
    </PageHeading>
    <div
      v-if="products && products.length > 0"
      class="flex flex-col-reverse md:flex-row flex-grow"
    >
      <div class="flex flex-col md:w-3/4">
        <ProductList :products="products" />
      </div>
      <Spacer />
      <div
        class="flex p-2 w-full md:w-1/4"
        :class="{ 'items-start': products && products.length < 8 }"
      >
        <div
          class="bg-gray-100 border flex flex-col justify-start p-2 rounded-lg shadow-lg w-full"
        >
          <h2 class="font-semibold mb-4 text-lg">Checkout</h2>
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
                {{ currencyFormat(total) }}
              </div>
            </div>
          </div>
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
      </div>
    </div>
    <EmptyMessage v-else :line="'Your cart is empty,'" />
    <ProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { currencyFormat } from '@/helpers'

export default {
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    ...mapGetters('products', {
      productsAll: 'all',
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
    total() {
      return this.subTotal + this.deliveryTotal
    },
    productsSuggested() {
      return this.productsAll.slice(16, 20)
    },
  },
  methods: {
    currencyFormat(value) {
      return currencyFormat(value)
    },
  },
}
</script>
