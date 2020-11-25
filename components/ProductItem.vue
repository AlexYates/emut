<template>
  <figure
    class="bg-gray-100 border flex flex-col flex-grow min-h-full overflow-hidden rounded-lg shadow-lg"
  >
    <RouterLink class="relative" :to="`/product/${product.uuid}`">
      <PictureImages :images="product.images" />
      <WishlistToggleButton class="absolute left-0 top-0" :product="product" />
      <CartToggleButton class="absolute right-0 top-0" :product="product" />
    </RouterLink>
    <figcaption class="flex flex-col flex-grow justify-between p-2">
      <h2 class="font-semibold mb-2 text-lg">{{ product.title }}</h2>
      <p>{{ price }}</p>
    </figcaption>
  </figure>
</template>

<script>
import { currencyFormat } from '@/helpers'

export default {
  name: 'ProductItem',
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {
    price() {
      return currencyFormat(this.product.price)
    },
  },
}
</script>
