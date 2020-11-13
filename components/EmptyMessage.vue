<template>
  <div class="p-4">
    <h2 class="mt-16 text-center">
      {{ line }}
      <br />
      try
      <RouterLink class="underline" to="/products">
        browsing our products
      </RouterLink>
      <br />
      for inspiration!
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    line: {
      required: true,
      type: String,
    },
  },
}
</script>
