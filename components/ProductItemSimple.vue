<template>
  <figure
    class="bg-white border flex items-center justify-between p-2 rounded-lg shadow-lg"
  >
    <RouterLink :to="`/product/${product.uuid}`">
      <LazyPictureImages
        :classes="'bg-gray-100 h-auto overflow-hidden rounded-lg w-20'"
        :images="product.images"
      />
    </RouterLink>
    <LazySpacer />
    <div class="flex items-center justify-start w-3/5">
      <h2>{{ product.title }}</h2>
    </div>
    <div class="flex items-center justify-end w-2/5">
      <LazySpacer />
      <p>{{ currencyFormat(product.price) }}</p>
      <LazySpacer />
      <LazyWishlistToggleButton :product="product" />
      <LazySpacer />
      <LazyCartToggleButton :product="product" />
    </div>
  </figure>
</template>

<script>
import { currencyFormat } from '@/helpers'

export default {
  name: 'ProductItemSimple',
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  methods: {
    currencyFormat(value) {
      return currencyFormat(value)
    },
  },
}
</script>
