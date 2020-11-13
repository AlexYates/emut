<template>
  <figure
    class="bg-white border flex items-center justify-between p-2 rounded-lg shadow-lg"
  >
    <RouterLink :to="`/product/${product.uuid}`">
      <PictureImages
        :classes="'bg-gray-100 h-auto overflow-hidden rounded-lg w-20'"
        :images="product.images"
      />
    </RouterLink>
    <Spacer />
    <div class="flex items-center justify-start w-3/5">
      <h2>{{ product.title }}</h2>
    </div>
    <div class="flex items-center justify-end w-2/5">
      <Spacer />
      <p>{{ currencyFormat(product.price) }}</p>
      <Spacer />
      <WishlistToggleButton :product="product" />
      <Spacer />
      <CartToggleButton :product="product" />
    </div>
  </figure>
</template>

<script>
import { currencyFormat } from '@/helpers'

export default {
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
