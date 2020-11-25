<template>
  <main id="products" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>
      Products
      <sup v-if="$route.query.title">({{ $route.query.title }})</sup>
    </PageHeading>
    <ProductList
      v-if="productsFiltered && productsFiltered.length > 0"
      :products="productsFiltered.slice(0, 16)"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', {
      products: 'all',
    }),
    productsFiltered() {
      const { title, ingredient } = this.$route.query
      const titleFiltered =
        title && title.length > 0
          ? this.products.filter((product) => product.title.includes(title))
          : this.products
      const ingredientFiltered =
        ingredient && ingredient.length > 0
          ? titleFiltered.filter((product) =>
              product.ingredients.some(
                (productIngredient) => productIngredient.title === ingredient
              )
            )
          : titleFiltered
      const productsFiltered = ingredientFiltered
      return productsFiltered && productsFiltered.length > 0
        ? productsFiltered
        : this.products
    },
  },
  watch: {
    $route(to, from) {
      const state = to !== from
      return state
    },
  },
}
</script>
