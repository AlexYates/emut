<template>
  <main id="product" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>Product</LazyPageHeading>
    <transition-group
      v-if="product"
      appear
      class="flex flex-col mb-4"
      name="slide-from-bottom"
      tag="ol"
    >
      <li :key="product.uuid" class="p-2">
        <LazyProductDetail :product="product" />
      </li>
    </transition-group>
    <LazyEmptyMessage v-else :line="`That product doesn't exist,`" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData({ params: { uuid } }) {
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
  validate({ params: { uuid } }) {
    // TODO: Check this uuid exists in the list of products from store.
    return uuid && uuid.length === 36
  },
}
</script>
