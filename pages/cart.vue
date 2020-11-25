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
        <CheckoutSection />
      </div>
    </div>
    <EmptyMessage v-else :line="'Your cart is empty,'" />
    <ProductSuggestionSection />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    cartCount() {
      return this.products ? this.products.length : 0
    },
  },
}
</script>
