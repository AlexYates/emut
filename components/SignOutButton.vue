<template>
  <button
    class="bg-indigo-700 focus:bg-indigo-400 hover:bg-indigo-400 border flex items-center justify-center p-2 rounded-lg shadow-lg text-lg text-white"
    @click.prevent="signOut"
    @keypress.enter="signOut"
  >
    <div class="h-6 w-6" style="fill: currentColor" v-html="PhSignOut" />
    <Spacer />
    Sign out
  </button>
</template>

<script>
import { mapActions } from 'vuex'
import PhSignOut from '../phosphor-icons/assets/duotone/sign-out-duotone.svg?raw'

export default {
  name: 'SignOutButton',
  computed: {
    PhSignOut() {
      return PhSignOut
    },
  },
  methods: {
    ...mapActions('account', {
      signOut: 'signOut',
    }),
  },
}
</script>
