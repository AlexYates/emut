<template>
  <main id="index" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Welcome</PageHeading>
    <div class="p-4">
      <h2 class="mt-16 text-center">
        Note that for this demo,
        <br />
        all
        <RouterLink class="underline" to="/products">our products</RouterLink>
        are generated and stored client-side
        <br />
        along with all
        <RouterLink class="underline" to="/account">user account</RouterLink>
        data,
        <br />
        therefore everything will be
        <br />
        cleared &amp; reset upon page refresh.
        <br />
      </h2>
    </div>
  </main>
</template>
