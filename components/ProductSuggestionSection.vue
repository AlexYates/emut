<template>
  <div class="flex flex-col flex-grow justify-end mt-16">
    <LazySpacer />
    <h2 class="font-semibold mb-2 px-4 text-lg">
      Suggested products for you&hellip;
    </h2>
    <LazyProductList :products="products" />
  </div>
</template>

<script>
export default {
  name: 'ProductSuggestionSection',
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
}
</script>
