<template>
  <transition appear mode="out-in" name="slide-from-left">
    <aside
      class="bg-white border p-4 rounded-lg shadow-lg w-1/4"
      :class="{
        ' bottom-0 fixed m-4 right-0 z-10': true,
      }"
      role="dialog"
    >
      <h2 class="font-semibold mb-2 text-lg" v-text="title" />
      <slot name="default" />
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    title: {
      required: false,
      type: String,
    },
  },
}
</script>
