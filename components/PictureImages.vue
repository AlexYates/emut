<template>
  <picture>
    <source
      media="(min-width: 400px)"
      :srcset="require(`~/assets/${images.large}`)"
    />
    <img
      :alt="images.description"
      :class="classes"
      :height="images.height"
      :src="require(`~/assets/${images.small}`)"
      :width="images.width"
    />
  </picture>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
      type: Object,
    },
    classes: {
      default: 'bg-gray-100 w-full',
      required: false,
      type: String,
    },
  },
}
</script>
