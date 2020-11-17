<template>
  <nav class="bg-white flex flex-col p-2">
    <RouterLink
      v-for="link in links"
      :key="link.uuid"
      :to="link.path"
      class="bg-gray-100 border flex items-center mb-2 p-2 rounded-lg"
    >
      <ImageSVG :src="link.icon" />
      <LazySpacer />
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script>
import { createLink } from '@/helpers'

const PhHouseSimple = require('../phosphor-icons/assets/duotone/house-simple-duotone.svg')
const PhGift = require('../phosphor-icons/assets/duotone/gift-duotone.svg')
const PhHeart = require('../phosphor-icons/assets/duotone/heart-duotone.svg')
const PhMagnifyingGlass = require('../phosphor-icons/assets/duotone/magnifying-glass-duotone.svg')
const PhShoppingCart = require('../phosphor-icons/assets/duotone/shopping-cart-duotone.svg')
const PhUser = require('../phosphor-icons/assets/duotone/user-duotone.svg')

export default {
  computed: {
    links() {
      return Object.freeze([
        createLink('Home', '/', PhHouseSimple),
        createLink('Products', '/products', PhGift),
        createLink('Search', '/products?search', PhMagnifyingGlass),
        createLink('Wishlist', '/wishlist', PhHeart),
        createLink('Cart', '/cart', PhShoppingCart),
        createLink('Account', '/account', PhUser),
      ])
    },
  },
}
</script>
