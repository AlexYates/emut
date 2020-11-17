<template>
  <transition-group
    appear
    class="flex flex-wrap mb-4"
    name="fade-n-slide-from-bottom"
    tag="ol"
  >
    <li
      v-for="product in products"
      :key="product.uuid"
      class="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <LazyProductItem :product="product" />
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
}
</script>
