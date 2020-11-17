<template>
  <main id="wishlist" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>
      Wishlist
      <LazyPip v-if="wishlistCount > 0" title="Number of products in wishlist">
        {{ wishlistCount }}
      </LazyPip>
    </LazyPageHeading>
    <LazyProductList
      v-if="products && products.length > 0"
      :products="products"
    />
    <LazyEmptyMessage v-else :line="'Your wishlist is empty,'" />
    <LazyProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('wishlist', {
      products: 'all',
    }),
    ...mapGetters('products', {
      productsAll: 'all',
    }),
    wishlistCount() {
      return this.products ? this.products.length : 0
    },
    productsSuggested() {
      return this.productsAll.slice(16, 20)
    },
  },
}
</script>
