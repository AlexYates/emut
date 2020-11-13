<template>
  <main id="notfound" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Not found</PageHeading>
    <transition appear mode="out-in" name="slide-from-bottom">
      <EmptyMessage :line="`The page you visited doesn't exist,`" />
    </transition>
  </main>
</template>
