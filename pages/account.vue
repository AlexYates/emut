<template>
  <main id="account" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>Account</PageHeading>
    <div
      v-if="!signedIn"
      class="flex flex-col md:flex-row md:justify-between p-2"
    >
      <SignInForm class="md:w-1/2" />
      <Spacer />
      <RegisterForm class="md:w-1/2" />
    </div>
    <div v-else class="flex flex-col p-2 w-full md:w-1/2">
      <div
        class="bg-gray-100 border flex flex-col p-2 rounded-lg shadow-lg w-full"
      >
        <h2 class="font-semibold mb-2 text-lg">Account details</h2>
        <label class="mb-4" for="email">
          <div class="flex mb-2 text-sm">E-mail</div>
          <input
            class="border cursor-not-allowed flex p-2 pointer-events-none rounded-lg select-none text-gray-400 w-full"
            readonly
            type="text"
            :value="account.email"
          />
        </label>
        <label class="mb-4" for="password">
          <div class="flex mb-2 text-sm">Password</div>
          <input
            class="border cursor-not-allowed flex p-2 pointer-events-none rounded-lg select-none text-gray-400 w-full"
            readonly
            type="text"
            :value="account.password"
          />
        </label>
        <label class="mb-4" for="uuid">
          <div class="flex mb-2 text-sm">UUID</div>
          <input
            class="border cursor-not-allowed flex p-2 pointer-events-none rounded-lg select-none text-gray-400 w-full"
            readonly
            type="text"
            :value="account.uuid"
          />
        </label>
        <MotionToggleButton />
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhCheck from '../phosphor-icons/assets/duotone/check-duotone.svg?raw'
import PhX from '../phosphor-icons/assets/duotone/x-duotone.svg?raw'

export default {
  computed: {
    ...mapGetters('account', {
      account: 'account',
      signedIn: 'signedIn',
    }),
    PhCheck() {
      return PhCheck
    },
    PhX() {
      return PhX
    },
  },
  methods: {
    ...mapActions('account', {
      signIn: 'signIn',
    }),
  },
}
</script>
