<template>
  <header class="bg-white shadow-lg sticky top-0 z-10">
    <div class="container flex items-center justify-between mx-auto p-4">
      <div class="flex items-center justify-start w-1/3">
        <button
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="Show navigation menu"
          @click="
            overlayActivate()
            navigationActivate()
          "
        >
          <ImageSVG :src="PhList" />
        </button>
        <LazySpacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="View all our products"
          to="/products"
        >
          <ImageSVG :src="PhGift" />
        </RouterLink>
        <LazySpacer />
        <button
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="Search all our products"
          @click="
            overlayActivate()
            searchActivate()
          "
        >
          <ImageSVG :src="PhMagnifyingGlass" />
        </button>
      </div>
      <div class="flex items-center justify-center w-1/3">
        <RouterLink to="/">Emut</RouterLink>
      </div>
      <div class="flex items-center justify-end w-1/3">
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 relative rounded-full shadow-lg"
          title="View and update products in your wishlist"
          to="/wishlist"
        >
          <ImageSVG :src="PhHeart" />
          <LazyPip
            v-if="wishlistCount > 0"
            class="absolute -m-2 right-0 top-0"
            title="Number of products in wishlist"
          >
            {{ wishlistCount }}
          </LazyPip>
        </RouterLink>
        <LazySpacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 relative rounded-full shadow-lg"
          title="View and update products in your cart"
          to="/cart"
        >
          <ImageSVG :src="PhShoppingCart" />
          <LazyPip
            v-if="cartCount > 0"
            class="absolute -m-2 right-0 top-0"
            title="Number of products in cart"
          >
            {{ cartCount }}
          </LazyPip>
        </RouterLink>
        <LazySpacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="View and edit your account details"
          to="/account"
        >
          <ImageSVG :src="PhUser" />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const PhGift = require('../phosphor-icons/assets/duotone/gift-duotone.svg')
const PhHeart = require('../phosphor-icons/assets/duotone/heart-duotone.svg')
const PhList = require('../phosphor-icons/assets/duotone/list-duotone.svg')
const PhMagnifyingGlass = require('../phosphor-icons/assets/duotone/magnifying-glass-duotone.svg')
const PhShoppingCart = require('../phosphor-icons/assets/duotone/shopping-cart-duotone.svg')
const PhUser = require('../phosphor-icons/assets/duotone/user-duotone.svg')

export default {
  computed: {
    ...mapGetters('wishlist', {
      wishlistAll: 'all',
    }),
    ...mapGetters('cart', {
      cartAll: 'all',
    }),
    PhGift() {
      return PhGift
    },
    PhHeart() {
      return PhHeart
    },
    PhList() {
      return PhList
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
    wishlistCount() {
      return this.wishlistAll ? this.wishlistAll.length : 0
    },
    cartCount() {
      return this.cartAll ? this.cartAll.length : 0
    },
  },
  methods: {
    ...mapActions('ui', {
      cartActivate: 'cartActivate',
      searchActivate: 'searchActivate',
    }),
    ...mapActions('navigation', {
      navigationActivate: 'activate',
    }),
    ...mapActions('overlay', {
      overlayActivate: 'activate',
    }),
  },
}
</script>
