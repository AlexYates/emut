<template>
  <main id="notfound" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>Not found</LazyPageHeading>
    <LazyEmptyMessage :line="`The page you visited doesn't exist,`" />
    <LazyProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
