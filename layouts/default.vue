<template>
  <div
    id="app"
    class="bg-white flex flex-col min-h-screen text-indigo-800"
    :class="{ 'motion-active': motionActive }"
  >
    <transition appear mode="out-in" name="slide-from-top">
      <Heading />
    </transition>
    <transition appear mode="out-in" name="pages">
      <Nuxt class="pb-16" />
    </transition>
    <transition appear mode="out-in" name="fade-fast">
      <NewsletterBannerSection />
    </transition>
    <transition appear mode="out-in" name="slide-from-bottom">
      <Footing />
    </transition>
    <transition appear mode="out-in" name="fade-fast">
      <Overlay
        v-if="overlayActive"
        class="z-10"
        @click.native="allDeactivate"
      />
    </transition>
    <transition appear mode="out-in" name="slide-from-left">
      <Navigation
        v-if="navigationActive"
        class="bottom-0 fixed left-0 shadow-lg top-0 w-3/4 md:w-1/3 lg:w-1/5 z-10"
      />
    </transition>
    <transition appear mode="out-in" name="slide-from-right">
      <Navigation
        v-if="cartActive"
        class="bottom-0 fixed right-0 shadow-lg top-0 w-3/4 md:w-1/3 lg:w-1/5 z-10"
      />
    </transition>
    <transition appear mode="out-in" name="slide-from-top">
      <Search
        v-if="searchActive"
        class="fixed left-0 right-0 shadow-lg top-0 w-full z-10"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('account', {
      motionActive: 'motionActive',
    }),
    ...mapGetters('navigation', {
      navigationActive: 'active',
    }),
    ...mapGetters('overlay', {
      overlayActive: 'active',
    }),
    ...mapGetters('ui', {
      cartActive: 'cartActive',
      searchActive: 'searchActive',
    }),
  },
  methods: {
    ...mapActions('overlay', {
      overlayActivate: 'activate',
      overlayDeactivate: 'deactivate',
    }),
    ...mapActions('navigation', {
      navigationDeactivate: 'deactivate',
    }),
    ...mapActions('ui', {
      cartDeactivate: 'cartDeactivate',
      searchDeactivate: 'searchDeactivate',
    }),
    allDeactivate() {
      this.overlayDeactivate()
      this.navigationDeactivate()
      this.cartDeactivate()
      this.searchDeactivate()
    },
  },
}
</script>
