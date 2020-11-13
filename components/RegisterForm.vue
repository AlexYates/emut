<template>
  <FormulateForm ref="form" v-model="form" @input="validate">
    <h2 class="font-semibold mb-4 text-lg">Register</h2>
    <FormulateInput
      label="Email address"
      name="email"
      placeholder="Email address"
      type="email"
      validation="required|email"
    />
    <div class="flex">
      <FormulateInput
        class="w-1/2"
        label="Password"
        name="password"
        placeholder="Your password"
        type="password"
        validation="required"
      />
      <Spacer />
      <FormulateInput
        class="w-1/2"
        label="Confirm your password"
        name="password_confirm"
        placeholder="Confirm password"
        type="password"
        validation="required|confirm"
        validation-name="Confirmation"
      />
    </div>
    <FormulateInput :disabled="hasErrors" label="Register" type="submit" />
  </FormulateForm>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Spacer: () => import('@/components/Spacer.vue'),
  },
  data() {
    return {
      form: null,
      hasErrors: true,
    }
  },
  computed: {
    ...mapGetters('account', {
      inProgress: 'inProgress',
    }),
  },
  methods: {
    async validate() {
      this.hasErrors = await this.$refs.form.hasValidationErrors()
    },
  },
}
</script>
