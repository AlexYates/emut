<template>
  <footer class="bg-indigo-700 text-white z-10">
    <div class="container flex mx-auto px-2 py-8">
      <div class="flex w-1/2">
        <ol class="flex flex-col w-1/3">
          <li
            v-for="link in links.slice(0, 2)"
            :key="link.uuid"
            class="flex w-full"
          >
            <RouterLink class="flex p-2 underline w-full" :to="link.path">
              {{ link.title }}
            </RouterLink>
          </li>
        </ol>
        <ol class="flex flex-col w-1/3">
          <li
            v-for="link in links.slice(2, 4)"
            :key="link.uuid"
            class="flex w-full"
          >
            <RouterLink class="flex p-2 underline w-full" :to="link.path">
              {{ link.title }}
            </RouterLink>
          </li>
        </ol>
        <ol class="flex flex-col w-1/3">
          <li
            v-for="link in links.slice(4)"
            :key="link.uuid"
            class="flex w-full"
          >
            <RouterLink class="flex p-2 underline w-full" :to="link.path">
              {{ link.title }}
            </RouterLink>
          </li>
        </ol>
      </div>
      <div class="flex items-end justify-end w-1/2">
        <ol class="flex flex-col">
          <li class="flex w-full">
            <a
              class="flex p-2 underline w-full"
              href="mailto:yates.alex@gmail.com"
            >
              E-mail
            </a>
          </li>
          <li class="flex w-full">
            <a
              class="flex p-2 underline w-full"
              href="https://github.com/AlexYates/emut"
              rel="noopener noreferrer"
              target="_blank"
              >GitHub</a
            >
          </li>
        </ol>
      </div>
    </div>
  </footer>
</template>

<script>
import { createLink } from '@/helpers'

export default {
  name: 'Footing',
  computed: {
    links() {
      return Object.freeze([
        createLink('Home', '/', null),
        createLink('Products', '/products', null),
        createLink('Search', '/products?search', 'PhMagnifyingGlass'),
        createLink('Wishlist', '/wishlist', null),
        createLink('Cart', '/cart', null),
        createLink('Account', '/account', null),
      ])
    },
  },
}
</script>
