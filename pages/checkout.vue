<template>
  <main id="checkout" class="container flex flex-col flex-grow mx-auto">
    <LazyPageHeading>
      Checkout
      <LazyPip v-if="cartCount > 0" title="Number of products in checkout">
        {{ cartCount }}
      </LazyPip>
    </LazyPageHeading>
    <div
      v-if="products && products.length > 0"
      class="flex flex-col md:flex-row"
    >
      <div class="p-2 w-full md:w-1/2">
        <form
          class="bg-gray-100 border flex flex-col items-start p-2 rounded-lg shadow-lg"
          @submit.prevent="submit"
        >
          <h2 class="font-semibold mb-4 text-lg">Payment details</h2>
          <label class="flex flex-col mb-4 w-full" for="email">
            <span class="flex mb-1 text-sm">Name on card</span>
            <input
              id="name"
              v-model="nameField"
              autofocus
              class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
              placeholder="Name on card"
              name="name"
              required
              type="text"
              @input="setName($event.target.value)"
            />
            <div v-if="this.$v.nameField.$dirty" class="text-red-500 text-sm">
              <div v-if="!$v.nameField.required" class="mb-1">
                Name is required
              </div>
            </div>
          </label>
          <label class="flex flex-col mb-4 w-full" for="email">
            <span class="flex mb-1 text-sm">Card number</span>
            <input
              id="number"
              v-model="numberField"
              autofocus
              class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
              inputmode="numeric"
              placeholder="Card number"
              name="number"
              required
              type="text"
              @input="setNumber($event.target.value)"
            />
            <div v-if="this.$v.numberField.$dirty" class="text-red-500 text-sm">
              <div
                v-if="!$v.numberField.maxLength || !$v.numberField.minLength"
                class="mb-1"
              >
                Card number must be
                {{ $v.numberField.$params.maxLength.max }} digits
              </div>
              <div v-if="!$v.numberField.numeric" class="mb-1">
                Card number can only be numbers
              </div>
              <div v-if="!$v.numberField.required" class="mb-1">
                Card number is required
              </div>
            </div>
          </label>
          <div class="flex w-full">
            <label class="flex flex-col mb-4 w-1/2" for="email">
              <span class="flex mb-1 text-sm">Card expiry</span>
              <input
                id="expiry"
                v-model="expiryField"
                autofocus
                class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
                inputmode="numeric"
                placeholder="Card expiry"
                name="number"
                required
                type="text"
                @input="setExpiry($event.target.value)"
              />
              <div
                v-if="this.$v.expiryField.$dirty"
                class="text-red-500 text-sm"
              >
                <div
                  v-if="!$v.expiryField.maxLength || !$v.expiryField.minLength"
                  class="mb-1"
                >
                  Expiry must be
                  {{ $v.expiryField.$params.maxLength.max }} digits
                </div>
                <div v-if="!$v.expiryField.numeric" class="mb-1">
                  Expiry can only be numbers
                </div>
                <div v-if="!$v.expiryField.required" class="mb-1">
                  Expiry is required
                </div>
              </div>
            </label>
            <Spacer />
            <label class="flex flex-col mb-4 w-1/2" for="email">
              <span class="flex mb-1 text-sm">CVC</span>
              <input
                id="cvc"
                v-model="cvcField"
                autofocus
                class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
                inputmode="numeric"
                placeholder="CVC"
                name="number"
                required
                type="text"
                @input="setCVC($event.target.value)"
              />
              <div v-if="this.$v.cvcField.$dirty" class="text-red-500 text-sm">
                <div v-if="!$v.cvcField.required" class="mb-1">
                  Expiry is required
                </div>
                <div
                  v-if="!$v.cvcField.maxLength || !$v.cvcField.minLength"
                  class="mb-1"
                >
                  CVC must be {{ $v.cvcField.$params.maxLength.max }} digits
                </div>
                <div v-if="!$v.cvcField.numeric" class="mb-1">
                  CVC can only be numbers
                </div>
                <div v-if="!$v.cvcField.required" class="mb-1">
                  CVC is required
                </div>
              </div>
            </label>
          </div>
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
      </div>
      <Spacer />
      <div class="w-full md:w-1/2">
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
    <LazyEmptyMessage v-else :line="'Your checkout is empty,'" />
    <LazyProductSuggestionSection :products="productsSuggested" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import {
  maxLength,
  minLength,
  numeric,
  required,
} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      cvcField: '',
      expiryField: '',
      nameField: '',
      numberField: '',
    }
  },
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    ...mapGetters('products', {
      productsAll: 'all',
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
      return Number(2 + Math.random() * 2).toFixed(2)
    },
    total() {
      return this.subTotal + this.deliveryTotal
    },
    isInvalid() {
      return (
        this.$v.cvcField.$invalid ||
        this.$v.expiryField.$invalid ||
        this.$v.nameField.$invalid ||
        this.$v.numberField.$invalid
      )
    },
    productsSuggested() {
      return this.productsAll.slice(16, 20)
    },
  },
  methods: {
    ...mapActions('cart', {
      reset: 'reset',
    }),
    setCVC(value) {
      this.cvcField = value
      this.$v.cvcField.$touch()
    },
    setName(value) {
      this.nameField = value
      this.$v.nameField.$touch()
    },
    setNumber(value) {
      this.numberField = value
      this.$v.numberField.$touch()
    },
    setExpiry(value) {
      this.expiryField = value
      this.$v.expiryField.$touch()
    },
    submit(event) {
      if (!this.isInvalid) {
        const cvc = this.cvcField
        const expiry = this.expiryField
        const name = this.nameField
        const number = this.numberField
        /* eslint-disable-next-line */
        console.log(`this.purchase({
          ${cvc},
          ${expiry},
          ${name},
          ${number},
        })`)
        this.$router.push('/success')
        this.reset()
      }
    },
  },
  validations: {
    cvcField: {
      maxLength: maxLength(3),
      minLength: minLength(3),
      numeric,
      required,
    },
    expiryField: {
      maxLength: maxLength(8),
      minLength: minLength(8),
      numeric,
      required,
    },
    nameField: {
      required,
    },
    numberField: {
      maxLength: maxLength(16),
      minLength: minLength(16),
      numeric,
      required,
    },
  },
}
</script>
