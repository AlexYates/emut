<template>
  <nav class="bg-gray-100 flex flex-col p-2">
    <RouterLink
      v-for="link in links"
      :key="link.uuid"
      :to="link.path"
      class="bg-white focus:bg-indigo-400 hover:bg-indigo-400 border flex items-center mb-2 p-2 rounded-lg focus:text-white hover:text-white"
    >
      <div class="h-6 w-6" style="fill: currentColor" v-html="link.svg" />
      <Spacer />
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<script>
import { createLink } from '@/helpers'
import PhHouseSimple from '../phosphor-icons/assets/duotone/house-simple-duotone.svg?raw'
import PhGift from '../phosphor-icons/assets/duotone/gift-duotone.svg?raw'
import PhHeart from '../phosphor-icons/assets/duotone/heart-duotone.svg?raw'
import PhMagnifyingGlass from '../phosphor-icons/assets/duotone/magnifying-glass-duotone.svg?raw'
import PhShoppingCart from '../phosphor-icons/assets/duotone/shopping-cart-duotone.svg?raw'
import PhUser from '../phosphor-icons/assets/duotone/user-duotone.svg?raw'

export default {
  name: 'Navigation',
  computed: {
    PhHouseSimple() {
      return PhHouseSimple
    },
    PhGift() {
      return PhGift
    },
    PhHeart() {
      return PhHeart
    },
    PhMagnifyingGlass() {
      return PhMagnifyingGlass
    },
    PhShoppingCart() {
      return PhShoppingCart
    },
    PhUser() {
      return PhUser
    },
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
