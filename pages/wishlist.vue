<template>
  <main id="wishlist" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>
      Wishlist
      <Pip v-if="wishlistCount > 0" title="Number of products in wishlist">
        {{ wishlistCount }}
      </Pip>
    </PageHeading>
    <ProductList v-if="products && products.length > 0" :products="products" />
    <EmptyMessage v-else :line="'Your wishlist is empty,'" />
    <ProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', {
      products: 'all',
    }),
    wishlistCount() {
      return this.products ? this.products.length : 0
    },
    productsSuggested() {
      return this.products.slice(16, 20)
    },
  },
}
</script>
