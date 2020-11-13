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
          <PhList />
        </button>
        <Spacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="View all our products"
          to="/products"
        >
          <PhGift />
        </RouterLink>
        <Spacer />
        <button
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="Search all our products"
          @click="
            overlayActivate()
            searchActivate()
          "
        >
          <PhMagnifyingGlass />
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
          <PhHeart />
          <Pip
            v-if="wishlistCount > 0"
            class="absolute -m-2 right-0 top-0"
            title="Number of products in wishlist"
          >
            {{ wishlistCount }}
          </Pip>
        </RouterLink>
        <Spacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 relative rounded-full shadow-lg"
          title="View and update products in your cart"
          to="/cart"
        >
          <PhShoppingCart />
          <Pip
            v-if="cartCount > 0"
            class="absolute -m-2 right-0 top-0"
            title="Number of products in cart"
          >
            {{ cartCount }}
          </Pip>
        </RouterLink>
        <Spacer />
        <RouterLink
          class="bg-gray-100 focus:bg-white border flex items-center justify-center p-2 rounded-full shadow-lg"
          title="View and edit your account details"
          to="/account"
        >
          <PhUser />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  PhGift,
  PhHeart,
  PhList,
  PhMagnifyingGlass,
  PhShoppingCart,
  PhUser,
} from 'phosphor-vue'

export default {
  components: {
    PhGift,
    PhHeart,
    PhList,
    PhMagnifyingGlass,
    PhShoppingCart,
    PhUser,
    Pip: () => import('@/components/Pip.vue'),
    Spacer: () => import('@/components/Spacer.vue'),
  },
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
