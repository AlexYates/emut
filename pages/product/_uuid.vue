<template>
  <main id="product" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Product</PageHeading>
    <transition-group
      v-if="product"
      appear
      class="flex flex-col mb-4"
      name="slide-from-bottom"
      tag="ol"
    >
      <li :key="product.uuid" class="p-2">
        <ProductDetail :product="product" />
      </li>
    </transition-group>
    <EmptyMessage v-else :line="`That product doesn't exist,`" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

const moveToHistory = async (store, uuid) => {
  console.debug('moveToHistory')
  // Attempt to get Product index and object from Cart sore
  const cartIndex = await store.getters['cart/index'](uuid)
  const cartProduct = await store.getters['cart/find'](uuid)
  if (cartIndex && cartIndex !== -1)
    await store.dispatch('cart/remove', cartIndex)
  // Attempt to get Product index and object from Wishlist store
  const wishlistIndex = await store.getters['wishlist/index'](uuid)
  const wishlistProduct = await store.getters['wishlist/find'](uuid)
  if (wishlistIndex && wishlistIndex !== -1)
    await store.dispatch('wishlist/remove', wishlistIndex)
  // Create new Product object from Cart and Wishlist Product objects
  const product = {
    ...cartProduct,
    ...wishlistProduct,
  }
  // Move new Product to History
  if (product && product.length) await store.dispatch('history/toggle')(product)
}

export default {
  validate({ params: { uuid }, store }) {
    return uuid && uuid.length === 36
  },
  async asyncData({ params: { uuid }, store }) {
    await moveToHistory(store, uuid)
    return {
      uuid,
    }
  },
  computed: {
    ...mapGetters('products', {
      find: 'find',
    }),
    product() {
      return this.find(this.$route.params.uuid)
    },
  },
}
</script>
