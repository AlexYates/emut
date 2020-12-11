<template>
  <div :class="classes" />
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    size: {
      default: 1,
      type: Number,
    },
  },
  computed: {
    classes() {
      switch (this.size) {
        default:
        case 1:
          return 'm-1'
        case 2:
          return 'm-2'
        case 3:
          return 'm-3'
        case 4:
          return 'm-4'
        case 5:
          return 'm-5'
        case 6:
          return 'm-6'
        case 7:
          return 'm-7'
        case 8:
          return 'm-8'
      }
    },
  },
}
</script>
