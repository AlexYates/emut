<template>
  <main id="index" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Success</PageHeading>
    <EmptyMessage :line="`Fantastic! Your order has been successfull,`" />
    <ProductSuggestionSection :products="productsSuggested" />
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
