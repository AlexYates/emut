<template>
  <nav class="bg-white flex flex-col p-2">
    <RouterLink
      v-for="link in links"
      :key="link.uuid"
      :to="link.path"
      class="bg-gray-100 border flex items-center mb-2 p-2 rounded-lg"
    >
      <component :is="link.component" />
      <LazySpacer />
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script>
import { createLink } from '@/helpers'
import {
  PhGift,
  PhHeart,
  PhHouseSimple,
  PhMagnifyingGlass,
  PhShoppingCart,
  PhUser,
} from 'phosphor-vue'

export default {
  components: {
    PhGift,
    PhHeart,
    PhHouseSimple,
    PhMagnifyingGlass,
    PhShoppingCart,
    PhUser,
  },
  computed: {
    links() {
      return Object.freeze([
        createLink('Home', '/', 'PhHouseSimple'),
        createLink('Products', '/products', 'PhGift'),
        createLink('Search', '/products?search', 'PhMagnifyingGlass'),
        createLink('Wishlist', '/wishlist', 'PhHeart'),
        createLink('Cart', '/cart', 'PhShoppingCart'),
        createLink('Account', '/account', 'PhUser'),
      ])
    },
  },
}
</script>
