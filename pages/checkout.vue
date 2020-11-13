<template>
  <main id="checkout" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>
      Checkout
      <Pip v-if="cartCount > 0" title="Number of products in checkout">
        {{ cartCount }}
      </Pip>
    </PageHeading>
    <div v-if="products && products.length > 0" class="flex">
      <div class="p-2 w-1/2">
        <FormulateForm ref="form" v-model="form" @input="validate">
          <h2 class="font-semibold mb-4 text-lg">Payment details</h2>
          <FormulateInput
            label="Name on card"
            name="name"
            placeholder="Name on card"
            type="text"
            validation="required"
          />
          <Spacer />
          <FormulateInput
            inputmode="numeric"
            label="Card number"
            name="number"
            pattern="[0-9]*"
            placeholder="Card number"
            type="text"
            validation="required"
          />
          <Spacer />
          <div class="flex">
            <FormulateInput
              class="w-1/2"
              label="Expiry date"
              max="2021-01-01"
              min="2018-12-01"
              name="expiry"
              placeholder="Expiry date"
              type="date"
              validation="required|after:2019-01-01"
            />
            <Spacer />
            <FormulateInput
              class="w-1/2"
              inputmode="numeric"
              label="CVC"
              name="cvc"
              pattern="[0-9]*"
              placeholder="CVC"
              type="text"
              validation="required"
            />
          </div>
          <Spacer />
          <FormulateInput
            :disabled="hasErrors"
            label="Purchase"
            type="submit"
            @click.prevent="purchase"
          />
        </FormulateForm>
      </div>
      <Spacer />
      <div class="w-1/2">
        <transition-group
          appear
          mode="out-in"
          name="fade-n-slide-from-bottom"
          tag="ol"
        >
          <li v-for="product in products" :key="product.uuid" class="p-2">
            <ProductItemSimple :product="product" />
          </li>
        </transition-group>
      </div>
    </div>
    <EmptyMessage v-else :line="'Your checkout is empty,'" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      form: null,
      hasErrors: true,
    }
  },
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    cartCount() {
      return this.products ? this.products.length : 0
    },
    subTotal() {
      return this.products.reduce(
        (accumulator, { price }) => (accumulator += Number(price)),
        0
      )
    },
    deliveryTotal() {
      return 3.99
    },
    total() {
      return this.subTotal + this.deliveryTotal
    },
  },
  methods: {
    ...mapActions('cart', {
      reset: 'reset',
    }),
    async validate() {
      this.hasErrors = await this.$refs.form.hasValidationErrors()
    },
    purchase() {
      if (!this.hasErrors) {
        this.reset()
        this.$router.push('/success')
      }
    },
  },
}
</script>
