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
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    RegisterForm: () => import('@/components/RegisterForm.vue'),
    SignInForm: () => import('@/components/SignInForm.vue'),
    Spacer: () => import('@/components/Spacer.vue'),
  },
  computed: {
    ...mapGetters('account', {
      signedIn: 'signedIn',
    }),
  },
}
</script>
