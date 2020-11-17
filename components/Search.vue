<template>
  <nav
    id="search"
    aria-live="assertive"
    class="bg-white flex items-center justify-center"
  >
    <label
      class="container flex flex-col mx-auto px-4 py-8 w-full"
      for="search"
    >
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
        <LazySpacer />
        <button
          class="bg-gray-800 flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-white"
          @click.prevent="deactivate()"
        >
          Search
        </button>
      </div>
    </label>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
  },
}
</script>
