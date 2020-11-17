<template>
  <main id="index" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>Welcome</LazyPageHeading>
    <div class="p-4">
      <h2 class="mt-16 text-center">
        Note that for demonstration purposes
        <br />
        all
        <RouterLink class="underline" to="/products">our products</RouterLink>
        are generated client-side,
        <br />
        therefore they'll differ upon refresh.
      </h2>
    </div>
  </main>
</template>
