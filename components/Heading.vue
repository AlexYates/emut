<template>
  <header class="bg-gray-100 shadow-lg sticky top-0 z-10">
    <div class="container flex items-center justify-between mx-auto p-4">
      <div class="flex items-center justify-start w-1/3">
        <button
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 rounded-full shadow-lg focus:text-white hover:text-white"
          title="Show navigation menu"
          @click="
            overlayActivate()
            navigationActivate()
          "
        >
          <div class="h-6 w-6" style="fill: currentColor" v-html="PhList" />
        </button>
        <LazySpacer />
        <RouterLink
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 rounded-full shadow-lg focus:text-white hover:text-white"
          title="View all our products"
          to="/products"
        >
          <div class="h-6 w-6" style="fill: currentColor" v-html="PhGift" />
        </RouterLink>
        <LazySpacer />
        <button
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 rounded-full shadow-lg focus:text-white hover:text-white"
          title="Search all our products"
          @click="
            overlayActivate()
            searchActivate()
          "
        >
          <div
            class="h-6 w-6"
            style="fill: currentColor"
            v-html="PhMagnifyingGlass"
          />
        </button>
      </div>
      <div class="flex items-center justify-center w-1/3">
        <RouterLink to="/">Emut</RouterLink>
      </div>
      <div class="flex items-center justify-end w-1/3">
        <RouterLink
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 relative rounded-full shadow-lg focus:text-white hover:text-white"
          title="View and update products in your wishlist"
          to="/wishlist"
        >
          <div class="h-6 w-6" style="fill: currentColor" v-html="PhHeart" />
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
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 relative rounded-full shadow-lg focus:text-white hover:text-white"
          title="View and update products in your cart"
          to="/cart"
        >
          <div
            class="h-6 w-6"
            style="fill: currentColor"
            v-html="PhShoppingCart"
          />
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
          class="bg-gray-100 focus:bg-indigo-700 hover:bg-indigo-700 border flex items-center justify-center p-2 rounded-full shadow-lg focus:text-white hover:text-white"
          title="View and edit your account details"
          to="/account"
        >
          <div class="h-6 w-6" style="fill: currentColor" v-html="PhUser" />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhGift from '../phosphor-icons/assets/duotone/gift-duotone.svg?raw'
import PhHeart from '../phosphor-icons/assets/duotone/heart-duotone.svg?raw'
import PhList from '../phosphor-icons/assets/duotone/list-duotone.svg?raw'
import PhMagnifyingGlass from '../phosphor-icons/assets/duotone/magnifying-glass-duotone.svg?raw'
import PhShoppingCart from '../phosphor-icons/assets/duotone/shopping-cart-duotone.svg?raw'
import PhUser from '../phosphor-icons/assets/duotone/user-duotone.svg?raw'

export default {
  name: 'Heading',
  computed: {
    ...mapGetters('wishlist', {
      wishlistAll: 'all',
    }),
    ...mapGetters('cart', {
      cartAll: 'all',
    }),
    wishlistCount() {
      return this.wishlistAll ? this.wishlistAll.length : 0
    },
    cartCount() {
      return this.cartAll ? this.cartAll.length : 0
    },
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
