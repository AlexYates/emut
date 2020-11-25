<template>
  <main id="checkout" class="container flex flex-col flex-grow mx-auto">
    <PageHeading>
      Checkout
      <Pip v-if="cartCount > 0" title="Number of products in checkout">
        {{ cartCount }}
      </Pip>
    </PageHeading>
    <div
      v-if="products && products.length > 0"
      class="flex flex-col md:flex-row"
    >
      <div class="flex flex-col p-2 w-full md:w-1/2">
        <div
          class="bg-gray-100 border flex flex-col items-start p-2 rounded-lg shadow-lg"
        >
          <h2 class="font-semibold mb-4 text-lg">Checkout total</h2>
          <CheckoutTotalSection />
        </div>
        <Spacer />
        <Spacer />
        <form
          class="bg-gray-100 border flex flex-col items-start p-2 rounded-lg shadow-lg"
          @submit.prevent="submit"
        >
          <h2 class="font-semibold mb-4 text-lg">Payment details</h2>
          <label class="flex flex-col mb-4 w-full" for="email">
            <span class="flex mb-1 text-sm">Name on card</span>
            <input
              id="name"
              v-model="name"
              autofocus
              class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
              placeholder="Name on card"
              name="name"
              required
              type="text"
              @input="nameInput($event.target.value)"
            />
            <div v-if="this.$v.name.$dirty" class="text-red-500 text-sm">
              <div v-if="!$v.name.required" class="mb-1">Name is required</div>
            </div>
          </label>
          <label class="flex flex-col mb-4 w-full" for="email">
            <span class="flex mb-1 text-sm">Card number</span>
            <input
              id="number"
              v-model="number"
              autofocus
              class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
              inputmode="numeric"
              placeholder="Card number"
              name="number"
              required
              type="text"
              @input="numberInput($event.target.value)"
            />
            <div v-if="this.$v.number.$dirty" class="text-red-500 text-sm">
              <div
                v-if="!$v.number.maxLength || !$v.number.minLength"
                class="mb-1"
              >
                Card number must be
                {{ $v.number.$params.maxLength.max }} digits
              </div>
              <div v-if="!$v.number.numeric" class="mb-1">
                Card number can only be numbers
              </div>
              <div v-if="!$v.number.required" class="mb-1">
                Card number is required
              </div>
            </div>
          </label>
          <div class="flex w-full">
            <label class="flex flex-col mb-4 w-1/2" for="email">
              <span class="flex mb-1 text-sm">Card expiry</span>
              <input
                id="expiry"
                v-model="expiry"
                autofocus
                class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
                inputmode="numeric"
                placeholder="Card expiry"
                name="number"
                required
                type="text"
                @input="expiryInput($event.target.value)"
              />
              <div v-if="this.$v.expiry.$dirty" class="text-red-500 text-sm">
                <div
                  v-if="!$v.expiry.maxLength || !$v.expiry.minLength"
                  class="mb-1"
                >
                  Expiry must be
                  {{ $v.expiry.$params.maxLength.max }} digits
                </div>
                <div v-if="!$v.expiry.numeric" class="mb-1">
                  Expiry can only be numbers
                </div>
                <div v-if="!$v.expiry.required" class="mb-1">
                  Expiry is required
                </div>
              </div>
            </label>
            <Spacer />
            <label class="flex flex-col mb-4 w-1/2" for="email">
              <span class="flex mb-1 text-sm">CVC</span>
              <input
                id="cvc"
                v-model="cvc"
                autofocus
                class="bg-white border flex items-center justify-center p-2 rounded-lg w-full"
                inputmode="numeric"
                placeholder="CVC"
                name="number"
                required
                type="text"
                @input="cvcInput($event.target.value)"
              />
              <div v-if="this.$v.cvc.$dirty" class="text-red-500 text-sm">
                <div v-if="!$v.cvc.required" class="mb-1">
                  Expiry is required
                </div>
                <div v-if="!$v.cvc.maxLength || !$v.cvc.minLength" class="mb-1">
                  CVC must be {{ $v.cvc.$params.maxLength.max }} digits
                </div>
                <div v-if="!$v.cvc.numeric" class="mb-1">
                  CVC can only be numbers
                </div>
                <div v-if="!$v.cvc.required" class="mb-1">CVC is required</div>
              </div>
            </label>
          </div>
          <button
            class="bg-indigo-700 border flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-lg text-white w-full"
            :class="{
              'cursor-not-allowed opacity-25 pointer-events-none': isInvalid,
            }"
            :disabled="isInvalid"
            type="submit"
          >
            <div
              class="h-6 w-6"
              style="fill: currentColor"
              v-html="PhCreditCard"
            />
            <Spacer />
            Purchase
          </button>
        </form>
      </div>
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
    <EmptyMessage v-else :line="'Your checkout is empty,'" />
    <ProductSuggestionSection />
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
import PhCreditCard from '../phosphor-icons/assets/duotone/credit-card-duotone.svg?raw'

export default {
  mixins: [validationMixin],
  computed: {
    ...mapGetters('cart', {
      products: 'all',
    }),
    ...mapGetters('payment', {
      cvcGet: 'cvc',
      expiryGet: 'expiry',
      nameGet: 'name',
      numberGet: 'number',
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
        this.$v.cvc.$invalid ||
        this.$v.expiry.$invalid ||
        this.$v.name.$invalid ||
        this.$v.number.$invalid
      )
    },
    PhCreditCard() {
      return PhCreditCard
    },
    cvc: {
      get() {
        return this.cvcGet
      },
      set(value) {
        this.cvcSet(value)
      },
    },
    expiry: {
      get() {
        return this.expiryGet
      },
      set(value) {
        this.expirySet(value)
      },
    },
    name: {
      get() {
        return this.nameGet
      },
      set(value) {
        this.nameSet(value)
      },
    },
    number: {
      get() {
        return this.numberGet
      },
      set(value) {
        this.numberSet(value)
      },
    },
  },
  methods: {
    ...mapActions('cart', {
      reset: 'reset',
    }),
    ...mapActions('payment', {
      cvcSet: 'cvc',
      expirySet: 'expiry',
      nameSet: 'name',
      numberSet: 'number',
    }),
    cvcInput(value) {
      this.cvcSet(value)
      this.$v.cvc.$touch()
    },
    expiryInput(value) {
      this.expirySet(value)
      this.$v.expiry.$touch()
    },
    nameInput(value) {
      this.nameSet(value)
      this.$v.name.$touch()
    },
    numberInput(value) {
      this.numberSet(value)
      this.$v.number.$touch()
    },
    submit(event) {
      if (!this.isInvalid) {
        setTimeout(() => {
          this.expirySet(this.expiry)
          this.nameSet(this.name)
          this.numberSet(this.number)
          this.$router.push('/success')
          this.reset()
        }, 125)
      }
    },
  },
  validations: {
    cvc: {
      maxLength: maxLength(3),
      minLength: minLength(3),
      numeric,
      required,
    },
    expiry: {
      maxLength: maxLength(8),
      minLength: minLength(8),
      numeric,
      required,
    },
    name: {
      required,
    },
    number: {
      maxLength: maxLength(16),
      minLength: minLength(16),
      numeric,
      required,
    },
  },
}
</script>
