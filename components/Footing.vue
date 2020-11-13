<template>
  <footer class="bg-gray-800 text-white z-10">
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
        <a
          class="bg-gray-100 border flex items-center justify-center m-2 p-2 rounded-full shadow-lg text-gray-900"
          href="mailto:yates.alex@gmail.com"
          title="Get in contact and e-mail the author, Alex Yates"
        >
          <PhEnvelope />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { PhEnvelope } from 'phosphor-vue'
import { createLink } from '@/helpers'

export default {
  components: {
    PhEnvelope,
  },
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
