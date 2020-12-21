<template>
  <aside class="bg-indigo-900" role="banner">
    <div
      class="container flex flex-col md:flex-row items-end justify-center mx-auto p-4"
    >
      <div class="w-full lg:w-1/3">
        <h2 class="font-semibold mb-2 text-lg text-white">
          Sign up to our Newsletter
        </h2>
        <p class="text-white">
          Read all about our exciting new product ranges, and get early access
          to our best deals!
        </p>
      </div>
      <Spacer />
      <div class="w-full lg:w-1/3">
        <label class="flex flex-col w-full" for="current-email">
          <span class="flex mb-1 text-sm text-white">E-mail</span>
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
        </label>
      </div>
    </div>
  </aside>
</template>

<script>
import PhEnvelope from '../phosphor-icons/assets/duotone/envelope-duotone.svg?raw'

export default {
  name: 'NewsletterBannerSection',
  data() {
    return {
      emailField: '',
    }
  },
  computed: {
    PhEnvelope() {
      return PhEnvelope
    },
  },
  methods: {
    newsletter() {
      console.log('newsletter', this.emailField)
    },
  },
}
</script>
