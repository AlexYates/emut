<template>
  <label for="motion">
    <span class="flex mb-2 text-sm">
      Toggle animations on or off, across the whole site.
    </span>
    <div
      :aria-checked="motionActive"
      class="focus:bg-indigo-400 hover:bg-indigo-400 border cursor-pointer inline-flex items-center justify-center p-2 pr-4 rounded-full shadow-lg focus:text-white hover:text-white"
      :class="classes"
      role="checkbox"
      tabindex="0"
      @click.prevent="motionToggle"
      @keypress.enter="motionToggle"
    >
      <div
        class="h-6 w-6"
        style="fill: currentColor"
        v-html="motionActive ? PhCheck : PhX"
      />
      <Spacer />
      {{ motionActive ? 'Motion enabled' : 'Motion disabled' }}
    </div>
  </label>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhCheck from '../phosphor-icons/assets/duotone/check-duotone.svg?raw'
import PhX from '../phosphor-icons/assets/duotone/x-duotone.svg?raw'

export default {
  name: 'MotionToggleButton',
  computed: {
    ...mapGetters('account', {
      motionActive: 'motionActive',
    }),
    PhCheck() {
      return PhCheck
    },
    PhX() {
      return PhX
    },
    classes() {
      return this.motionActive ? 'bg-indigo-700 text-white' : 'bg-white'
    },
  },
  methods: {
    ...mapActions('account', {
      motionToggle: 'motionToggle',
    }),
  },
}
</script>
