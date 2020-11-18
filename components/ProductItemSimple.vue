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
    <div
      class="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full"
    >
      <h2 class="font-semibold">{{ product.title }}</h2>
      <LazySpacer />
      <p>{{ currencyFormat(product.price) }}</p>
    </div>
    <LazySpacer />
    <div class="flex items-center justify-end">
      <LazyWishlistToggleButton :product="product" />
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
