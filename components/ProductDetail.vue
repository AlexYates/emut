<template>
  <figure
    class="bg-gray-100 border flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg"
  >
    <div class="relative w-full md:w-1/2">
      <PictureImages
        v-if="imageCurrent && imageCurrent.large"
        :images="imageCurrent"
      />
      <ol
        class="absolute bottom-0 flex items-center justify-center left-0 m-2 right-0"
      >
        <li
          v-for="(image, imageIndex) in product.images"
          :key="imageIndex"
          class="m-2"
        >
          <PictureImages
            class="border cursor-pointer flex h-16 overflow-hidden rounded-lg shadow-lg w-16"
            :images="image"
          />
        </li>
      </ol>
      <WishlistToggleButton
        class="absolute m-2 right-0 top-0"
        :product="product"
      />
    </div>
    <figcaption class="flex flex-col items-start p-4 w-full md:w-1/2">
      <div class="flex items-start justify-between mb-2 p-4 w-full">
        <h2 class="font-semibold text-xl">{{ product.title }}</h2>
        <p>{{ price }}</p>
      </div>
      <div class="flex justify-end w-full">
        <CartToggleButtonLarge class="mb-4" :product="product" />
      </div>
      <Expander />
      <ol class="flex flex-wrap items-end mb-2" title="List of ingredients">
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
import { currencyFormat } from '@/helpers'

export default {
  name: 'ProductDetail',
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      imageCurrent: null,
    }
  },
  computed: {
    price() {
      return currencyFormat(this.product.price)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.imageCurrent = this.product.images[0]
    })
  },
}
</script>
