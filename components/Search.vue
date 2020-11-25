<template>
  <nav
    id="search"
    aria-live="assertive"
    class="bg-white flex flex-col items-center justify-center px-4 pb-2 pt-8"
  >
    <label class="container flex flex-col mx-auto w-full" for="search">
      <span class="flex mb-2 text-sm">Search product titles</span>
      <div class="flex items-center justify-center">
        <input
          id="search"
          v-model="search"
          class="bg-gray-100 border flex items-center justify-center p-2 rounded-lg w-full"
          name="search"
          placeholder="Enter a search term to find, e.g.: 'excepteur'"
          type="text"
          @keypress.enter="deactivate()"
        />
        <Spacer />
        <button
          class="bg-indigo-700 focus:bg-indigo-400 hover:bg-indigo-400 flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-white"
          @click.prevent="deactivate()"
        >
          <div
            class="h-6 w-6"
            style="fill: currentColor"
            v-html="PhMagnifyingGlass"
          />
          <Spacer />
          Search
        </button>
      </div>
    </label>
    <ol class="container flex flex-wrap mx-auto my-2 p-2">
      <li
        v-for="term in searchTerms"
        :key="term.uuid"
        class="bg-white focus:bg-indigo-400 hover:bg-indigo-400 border flex items-center justify-center mr-2 px-2 py-1 rounded-full focus:text-white hover:text-white text-sm"
      >
        <span class="cursor-pointer" @click="searchSet(term.title)">
          {{ term.title }}
        </span>
        <Spacer />
        <div
          class="cursor-pointer h-4 w-4"
          style="fill: currentColor"
          tabindex="0"
          @click="remove(term.uuid)"
          @keypress.enter="remove(term.uuid)"
          v-html="PhX"
        />
      </li>
    </ol>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhMagnifyingGlass from '../phosphor-icons/assets/duotone/magnifying-glass-duotone.svg?raw'
import PhX from '../phosphor-icons/assets/duotone/x-duotone.svg?raw'

export default {
  name: 'Search',
  data() {
    return {
      searchTerms: [
        {
          title: 'exceptur',
          uuid: 0,
        },
        {
          title: 'anim',
          uuid: 1,
        },
        {
          title: 'id',
          uuid: 2,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('search', {
      searchGet: 'search',
    }),
    search: {
      get() {
        return this.searchGet
      },
      set(value) {
        this.searchSet(value)
      },
    },
    PhMagnifyingGlass() {
      return PhMagnifyingGlass
    },
    PhX() {
      return PhX
    },
  },
  methods: {
    ...mapActions('ui', {
      overlayDeactivate: 'overlayDeactivate',
      searchDeactivate: 'searchDeactivate',
    }),
    ...mapActions('search', {
      searchSet: 'search',
    }),
    deactivate() {
      this.$router.push({
        path: '/products',
        query: {
          title: this.searchGet,
        },
      })
    },
    remove(uuid) {
      const index = this.searchTerms.findIndex((term) => term.uuid === uuid)
      if (index !== -1) {
        this.searchTerms.splice(index, 1)
      }
    },
  },
}
</script>
