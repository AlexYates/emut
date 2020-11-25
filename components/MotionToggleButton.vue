<template>
  <label for="motion">
    <input
      id="motion"
      class="hidden"
      name="motion"
      :selected="motionActive"
      type="checkbox"
    />
    <span class="flex mb-2 text-sm">
      Toggle animations on or off, across the whole site.
    </span>
    <button
      class="focus:bg-indigo-400 hover:bg-indigo-400 border cursor-pointer inline-flex items-center justify-center p-2 rounded-full shadow-lg focus:text-white hover:text-white"
      :class="classes"
      @click.prevent="motionToggle"
      @keypress.enter="motionToggle"
    >
      <div
        class="h-6 w-6"
        style="fill: currentColor"
        v-html="motionActive ? PhCheck : PhX"
      />
    </button>
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
