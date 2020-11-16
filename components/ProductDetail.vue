<template>
  <figure
    class="bg-gray-100 border flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg"
  >
    <div class="relative w-full md:w-1/2">
      <PictureImages :images="product.images" />
      <WishlistToggleButton
        class="absolute m-2 right-0 top-0"
        :product="product"
      />
    </div>
    <figcaption class="flex flex-col items-start p-2 w-full md:w-1/2">
      <div class="flex items-start justify-between mb-2 p-2 w-full">
        <h2 class="font-semibold text-xl">{{ product.title }}</h2>
        <p>{{ price }}</p>
      </div>
      <div class="flex justify-end w-full">
        <CartToggleButtonLarge class="mb-4" :product="product" />
      </div>
      <ol class="flex flex-wrap items-end" title="List of ingredients">
        <li
          v-for="ingredient in product.ingredients"
          :key="ingredient.uuid"
          class="mb-2"
        >
          <IngredientItem :ingredient="ingredient" />
        </li>
      </ol>
      <div class="flex flex-col">
        <p
          v-for="(description, descriptionIndex) in product.description"
          :key="descriptionIndex"
          class="inline-flex mb-2"
        >
          {{ description }}
        </p>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {
    price() {
      return this.formatCurrency(this.product.price)
    },
  },
  methods: {
    formatCurrency(value) {
      return Intl.NumberFormat('en-GB', {
        currency: 'EUR',
        style: 'currency',
      }).format(value)
    },
  },
}
</script>
