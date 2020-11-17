<template functional>
  <img :alt="alt" :height="size" :width="size" />
</template>

<script>
export default {
  props: {
    alt: {
      default: '',
      type: String,
    },
    size: {
      default: 24,
      type: Number,
    },
  },
}
</script>
