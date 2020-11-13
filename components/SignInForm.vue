<template>
  <FormulateForm ref="form" v-model="form" @input="validate">
    <h2 class="font-semibold mb-4 text-lg">Sign in</h2>
    <FormulateInput
      label="Email address"
      name="email"
      placeholder="Email address"
      type="email"
      validation="required|email"
    />
    <FormulateInput
      label="Password"
      name="password"
      placeholder="Your password"
      type="password"
      validation="required"
    />
    <FormulateInput :disabled="hasErrors" label="Sign in" type="submit" />
  </FormulateForm>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
