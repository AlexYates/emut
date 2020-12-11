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
    <Bubble :title="`Register for a chance to win!`">
      <div class="flex flex-col">
        <p class="mb-4">
          You've an exclusive chance to win £100 worth of vouchers, simply
          register to our newsletter to be entered into the prize-draw.
        </p>
        <div class="relative">
          <input
            id="current-email"
            v-model="emailField"
            autocomplete="email"
            class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
            placeholder="Subscribe to our monthly newsletter"
            name="current-email"
            required
            type="email"
          />
          <button
            class="absolute border border-transparent flex items-center justify-center p-2 rounded-full right-0 top-0"
          >
            <div
              class="h-6 w-6"
              style="fill: currentColor"
              @click="newsletter"
              @keypress.enter="newsletter"
              v-html="PhEnvelope"
            />
          </button>
        </div>
      </div>
    </Bubble>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhEnvelope from '../phosphor-icons/assets/duotone/envelope-duotone.svg?raw'

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
    PhEnvelope() {
      return PhEnvelope
    },
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
