<template>
  <div class="flex flex-col flex-grow justify-end mt-16">
    <Spacer />
    <h2 class="font-semibold mb-2 px-4 text-lg">
      Suggested products for you&hellip;
    </h2>
    <ProductList :products="productsSuggested" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductSuggestionSection',
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
