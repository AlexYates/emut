<template>
  <figure
    class="bg-gray-100 border flex items-center justify-between p-2 rounded-lg shadow-lg"
  >
    <RouterLink :to="`/product/${product.uuid}`">
      <PictureImages
        :classes="'bg-gray-100 h-auto overflow-hidden rounded-lg w-20'"
        :images="product.images"
      />
    </RouterLink>
    <Spacer />
    <div
      class="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full"
    >
      <h2 class="font-semibold">{{ product.title }}</h2>
      <Spacer />
      <p>{{ currencyFormat(product.price) }}</p>
    </div>
    <Spacer />
    <div class="flex items-center justify-end">
      <WishlistToggleButton :product="product" />
      <CartToggleButton :product="product" />
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
