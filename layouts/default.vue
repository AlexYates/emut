<template>
  <div id="app" class="bg-white flex flex-col min-h-screen text-indigo-800">
    <style v-if="motionActive">
      /* Fade Fast */
      .fade-fast-enter-active,
      .fade-fast-leave-active {
        transition: opacity 0.25s ease-in-out;
      }
      .fade-fast-enter,
      .fade-fast-leave-to {
        opacity: 0;
      }

      /* Fade Slow */
      .fade-slow-enter-active,
      .fade-slow-leave-active {
        transition: opacity 0.75s ease-in-out;
      }
      .fade-slow-enter,
      .fade-slow-leave-to {
        opacity: 0;
      }

      /* Pages */
      .pages-enter-active,
      .pages-leave-active {
        transition: opacity 0.5s ease-in-out;
      }
      .pages-enter,
      .pages-leave-to {
        opacity: 0;
      }

      /* Slide From Bottom */
      .slide-from-bottom-enter-active,
      .slide-from-bottom-leave-active {
        transition: transform 0.5s ease-in-out;
      }
      .slide-from-bottom-enter,
      .slide-from-bottom-leave-to {
        transform: translateY(100%);
      }

      /* Slide From Left */
      .slide-from-left-enter-active,
      .slide-from-left-leave-active {
        transition: transform 0.5s ease-in-out;
      }
      .slide-from-left-enter,
      .slide-from-left-leave-to {
        transform: translateX(-100%);
      }

      /* Slide From Right */
      .slide-from-right-enter-active,
      .slide-from-right-leave-active {
        transition: transform 0.5s ease-in-out;
      }
      .slide-from-right-enter,
      .slide-from-right-leave-to {
        transform: translateX(100%);
      }

      /* Slide From Top */
      .slide-from-top-enter-active,
      .slide-from-top-leave-active {
        transition: transform 0.5s ease-in-out;
      }
      .slide-from-top-enter,
      .slide-from-top-leave-to {
        transform: translateY(-100%);
      }

      /* Fade N Slide From Bottom */
      .fade-n-slide-from-bottom-enter-active,
      .fade-n-slide-from-bottom-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
      }
      .fade-n-slide-from-bottom-enter,
      .fade-n-slide-from-bottom-leave-to {
        opacity: 0;
        transform: translateY(100%);
      }

      /* Fade N Slide From Left */
      .fade-n-slide-from-left-enter-active,
      .fade-n-slide-from-left-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
      }
      .fade-n-slide-from-left-enter,
      .fade-n-slide-from-left-leave-to {
        opacity: 0;
        transform: translateX(-100%);
      }

      /* Fade N Slide From Right */
      .fade-n-slide-from-right-enter-active,
      .fade-n-slide-from-right-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
      }
      .fade-n-slide-from-right-enter,
      .fade-n-slide-from-right-leave-to {
        opacity: 0;
        transform: translateX(100%);
      }

      /* Fade N Slide From Top */
      .fade-n-slide-from-top-enter-active,
      .fade-n-slide-from-top-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
      }
      .fade-n-slide-from-top-enter,
      .fade-n-slide-from-top-leave-to {
        opacity: 0;
        transform: translateY(-100%);
      }
    </style>
    <transition appear mode="out-in" name="slide-from-top">
      <Heading />
    </transition>
    <transition appear mode="out-in" name="pages">
      <Nuxt class="pb-16" />
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
  provide: {
    size: 24,
    weight: 'duotone',
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
