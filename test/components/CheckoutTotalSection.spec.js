import { createLocalVue, /* mount, */ shallowMount } from '@vue/test-utils'
import CheckoutTotalSection from '@/components/CheckoutTotalSection'
import Vuex from 'vuex'
import { state, getters, mutations, actions } from '@/store/cart'

const productA = { price: 123.45 }
const productB = { price: 67.89 }

describe('CheckoutTotalSection - html', () => {
  it('html matches expectations', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: state,
          getters: getters,
          mutations: mutations,
          actions: actions,
        },
      },
    })

    const d = shallowMount(CheckoutTotalSection, {
      localVue,
      store,
    })

    const expectations = `<div class="flex flex-col w-full">
  <div class="flex items-center mb-1 w-full">
    <div class="flex w-1/2">Number of items</div>
    <div class="flex justify-end w-1/2">0</div>
  </div>
  <div class="flex items-center mb-1 w-full">
    <div class="flex w-1/2">Sub-total</div>
    <div class="flex justify-end w-1/2">
      £0.00
    </div>
  </div>
  <div class="flex items-center mb-1 w-full">
    <div class="flex w-1/2">Delivery</div>
    <div class="flex justify-end w-1/2">
      £3.99
    </div>
  </div>
  <div class="flex font-semibold items-center mb-1 text-lg w-full">
    <div class="flex w-1/2">Total</div>
    <div class="flex justify-end w-1/2">
      £3.99
    </div>
  </div>
</div>`

    expect(d.html()).toBe(expectations)
  })
})

describe('CheckoutTotalSection - cartCount', () => {
  it('cartCount matches expectation', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: state,
          getters: getters,
          mutations: mutations,
          actions: actions,
        },
      },
    })

    const localThis = { products: [productA, productB] }
    expect(CheckoutTotalSection.computed.cartCount.call(localThis)).toBe(2)
  })
})

describe('CheckoutTotalSection - subTotal', () => {
  it('subTotal matches expectation', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: state,
          getters: getters,
          mutations: mutations,
          actions: actions,
        },
      },
    })

    const localThis = { products: [productA, productB] }
    expect(CheckoutTotalSection.computed.subTotal.call(localThis)).toBe(
      productA.price + productB.price
    )
  })
})

describe('CheckoutTotalSection - deliveryTotal', () => {
  it('deliveryTotal matches expectation', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          state: state,
          getters: getters,
          mutations: mutations,
          actions: actions,
        },
      },
    })

    expect(CheckoutTotalSection.computed.deliveryTotal.call()).toBe(3.99)
  })
})
