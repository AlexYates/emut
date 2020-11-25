<template>
  <transition appear mode="out-in" name="pop">
    <sup
      class="bg-indigo-700 border inline-flex h-6 items-center justify-center overflow-hidden rounded-full text-sm text-white w-6"
    >
      <slot name="default" />
    </sup>
  </transition>
</template>

<script>
export default {
  name: 'Pip',
}
</script>
