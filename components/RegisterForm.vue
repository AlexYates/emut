<template>
  <form
    class="bg-gray-100 border flex flex-col items-start p-2 rounded-lg shadow-lg"
    @submit.prevent="submit"
  >
    <h2 class="font-semibold mb-6 text-lg">Register</h2>
    <label class="flex flex-col mb-4 w-full" for="email">
      <span class="flex mb-1 text-sm">E-mail</span>
      <input
        id="email"
        v-model="emailField"
        autofocus="new-email"
        class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
        placeholder="Accounts e-mail address"
        name="email"
        required
        type="email"
        @input="setEmail($event.target.value)"
      />
      <div v-if="this.$v.emailField.$dirty" class="text-red-500 text-sm">
        <div v-if="!$v.emailField.email" class="mb-1">
          Please ensure your email address is correct
        </div>
        <div v-if="!$v.emailField.required" class="mb-1">
          E-mail is required
        </div>
      </div>
    </label>
    <label class="flex flex-col mb-4 w-full" for="password">
      <span class="flex mb-1 text-sm">Password</span>
      <input
        id="password"
        v-model="passwordField"
        autocomplete="new-password"
        class="bg-white border flex p-2 rounded-lg w-full"
        placeholder="Accounts password"
        name="password"
        required
        type="password"
        @input="setPassword($event.target.value)"
      />
      <div v-if="this.$v.passwordField.$dirty" class="text-red-500 text-sm">
        <div v-if="!$v.passwordField.required" class="mb-1">
          Password is required
        </div>
        <div v-if="!$v.passwordField.minLength" class="mb-1">
          Password must be at least
          {{ $v.passwordField.$params.minLength.min }} letters
        </div>
      </div>
    </label>
    <Expander />
    <button
      class="bg-indigo-700 border flex items-center justfy-center px-4 py-2 rounded-lg shadow-lg text-lg text-white"
      :class="{
        'cursor-not-allowed opacity-25 pointer-events-none': isInvalid,
      }"
      :disabled="isInvalid"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { email, minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterForm',
  mixins: [validationMixin],
  data() {
    return {
      emailField: '',
      passwordField: '',
    }
  },
  computed: {
    ...mapGetters('account', {
      inProgress: 'inProgress',
    }),
    isInvalid() {
      return this.$v.emailField.$invalid || this.$v.passwordField.$invalid
    },
  },
  methods: {
    ...mapActions('account', {
      signIn: 'signIn',
    }),
    setEmail(value) {
      this.emailField = value
      this.$v.emailField.$touch()
    },
    setPassword(value) {
      this.passwordField = value
      this.$v.passwordField.$touch()
    },
    submit(event) {
      const email = this.emailField
      const password = this.passwordField
      this.signIn({
        email,
        password,
      })
    },
  },
  validations: {
    emailField: {
      email,
      required,
    },
    passwordField: {
      minLength: minLength(8),
      required,
    },
  },
}
</script>
