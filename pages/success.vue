<template>
  <main id="index" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>Success</LazyPageHeading>
    <LazyEmptyMessage :line="`Fantastic! Your order has been successfull,`" />
    <LazyProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData({ from, redirect }) {
    if (!from || from.name !== 'checkout') redirect(302, '/products') // TODO: Move to middleware?
  },
  computed: {
    ...mapGetters('products', {
      products: 'all',
    }),
    productsSuggested() {
      return this.products.slice(16, 20)
    },
  },
}
</script>
