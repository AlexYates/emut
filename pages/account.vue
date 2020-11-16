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
    <div v-else class="flex">
      <div
        class="bg-gray-100 border flex flex-col p-2 rounded-lg shadow-lg w-full"
      >
        <h2 class="font-semibold mb-2 text-lg">Account details</h2>
        <p>E-mail: {{ account.email }}</p>
        <p>Password: {{ account.password }}</p>
        <p>UUID: {{ account.uuid }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('account', {
      account: 'account',
      signedIn: 'signedIn',
    }),
  },
  methods: {
    ...mapActions('account', {
      signIn: 'signIn',
    }),
  },
}
</script>
