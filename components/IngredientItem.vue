<template>
  <div
    class="bg-white border inline-flex items-center justify-between mr-2 px-2 py-1 rounded-full shadow-lg text-xs"
  >
    {{ ingredient.title }}
  </div>
</template>

<script>
export default {
  props: {
    ingredient: {
      required: true,
      type: Object,
    },
  },
}
</script>
