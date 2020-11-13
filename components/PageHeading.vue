<template>
  <header class="p-4 pt-6">
    <transition appear mode="out-in" name="slide-from-top">
      <h1 class="font-semibold text-lg">
        <slot name="default" />
      </h1>
    </transition>
  </header>
</template>
