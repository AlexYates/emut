<template>
  <div class="flex flex-col flex-grow justify-end mt-16">
    <Spacer />
    <h2 class="font-semibold mb-2 px-4 text-lg">
      Suggested products for you&hellip;
    </h2>
    <ProductList :products="products" />
  </div>
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
