import { state, getters, mutations, actions } from '@/store/cart'

const productA = { uuid: 'ac25d5b6-bd6d-494f-9dc5-676b4390dd63"' }
const productB = { uuid: 'd5b56ac2-6ddc-9db5-944f-66b47d6390d3"' }

// State
describe('cart - state', () => {
  it('is initialsed with expected values', () => {
    const expectations = { products: [] }
    const actual = state()
    expect(actual).toEqual(expectations)
  })
})

// Getters
describe('cart - all', () => {
  it('returns all states products', () => {
    const state = { products: [productA, productB] }

    const actual = getters.all(state)

    expect(actual).toEqual([productA, productB])
  })
})

describe('cart - exists', () => {
  it('returns true, when product uuid is in states products', () => {
    const state = { products: [productA, productB] }

    const actual = getters.exists(state)(productA.uuid)

    expect(actual).toEqual(true)
  })
})

describe('cart - find', () => {
  it('returns product from states products, when given uuid', () => {
    const state = { products: [productA, productB] }

    const actual = getters.find(state)(productB.uuid)

    expect(actual).toEqual(productB)
  })
})

describe('cart - index', () => {
  it('returns index of product from states products, when given uuid', () => {
    const state = { products: [productA, productB] }

    const actual = getters.index(state)(productB.uuid)

    expect(actual).toEqual(1)
  })
})

// Mutations
describe('cart - add', () => {
  it('adds a product to the states products', () => {
    const state = { products: [productA] }

    mutations.add(state, productB)

    expect(state).toEqual({ products: [productA, productB] })
  })
})

describe('cart - remove', () => {
  it('removes a product from the states products', () => {
    const state = { products: [productA, productB] }

    mutations.remove(state, 1)

    expect(state).toEqual({ products: [productA] })
  })
})

describe('cart - reset', () => {
  it('resets the states products', () => {
    const state = { products: [productA, productB] }

    mutations.reset(state)

    expect(state).toEqual({ products: [] })
  })
})

// Acions
describe('cart - actions - add', () => {
  it('calls the expected mutation/s for add', () => {
    const commit = jest.fn()

    actions.add({ commit }, productA)
    expect(commit).toHaveBeenCalledWith('add', productA)
  })
})

describe('cart - actions - remove', () => {
  it('calls the expected mutation/s for remove', () => {
    const commit = jest.fn()

    actions.remove({ commit }, 0)
    expect(commit).toHaveBeenCalledWith('remove', 0)
  })
})

describe('cart - actions - reset', () => {
  it('calls the expected mutation/s for reset', () => {
    const commit = jest.fn()

    actions.reset({ commit })
    expect(commit).toHaveBeenCalledWith('reset')
  })
})
