<template>
  <main id="index" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Success</PageHeading>
    <EmptyMessage :line="`Fantastic! Your order has been successfull,`" />
  </main>
</template>

<script>
export default {
  asyncData({ from, redirect }) {
    if (!from || from.name !== 'checkout') redirect(302, '/products') // TODO: Move to middleware?
  },
}
</script>
