import { state, getters, mutations, actions } from '@/store/wishlist'

const productA = { uuid: 'ac25d5b6-bd6d-494f-9dc5-676b4390dd63"' }
const productB = { uuid: 'd5b56ac2-6ddc-9db5-944f-66b47d6390d3"' }

// State
describe('wishlist - state', () => {
  it('is initialsed with expected values', () => {
    const expectations = { products: [] }
    const actual = state()
    expect(actual).toEqual(expectations)
  })
})

// Getters
describe('wishlist - all', () => {
  it('returns all states products', () => {
    const state = { products: [productA, productB] }

    const actual = getters.all(state)

    expect(actual).toEqual([productA, productB])
  })
})

describe('wishlist - exists', () => {
  it('returns true, when product uuid is in states products', () => {
    const state = { products: [productA, productB] }

    const actual = getters.exists(state)(productA.uuid)

    expect(actual).toEqual(true)
  })
})

describe('wishlist - find', () => {
  it('returns product from states products, when given uuid', () => {
    const state = { products: [productA, productB] }

    const actual = getters.find(state)(productB.uuid)

    expect(actual).toEqual(productB)
  })
})

describe('wishlist - index', () => {
  it('returns index of product from states products, when given uuid', () => {
    const state = { products: [productA, productB] }

    const actual = getters.index(state)(productB.uuid)

    expect(actual).toEqual(1)
  })
})

// Mutations
describe('wishlist - add', () => {
  it('adds a product to the states products', () => {
    const state = { products: [productA] }

    mutations.add(state, productB)

    expect(state).toEqual({ products: [productA, productB] })
  })
})

describe('wishlist - remove', () => {
  it('removes a product from the states products', () => {
    const state = { products: [productA, productB] }

    mutations.remove(state, 1)

    expect(state).toEqual({ products: [productA] })
  })
})

describe('wishlist - reset', () => {
  it('resets the states products', () => {
    const state = { products: [productA, productB] }

    mutations.reset(state)

    expect(state).toEqual({ products: [] })
  })
})

// Acions
describe('wishlist - actions - add', () => {
  it('calls the expected mutation/s for add', () => {
    const commit = jest.fn()

    actions.add({ commit }, productA)
    expect(commit).toHaveBeenCalledWith('add', productA)
  })
})

describe('wishlist - actions - remove', () => {
  it('calls the expected mutation/s for remove', () => {
    const commit = jest.fn()

    actions.remove({ commit }, 0)
    expect(commit).toHaveBeenCalledWith('remove', 0)
  })
})

describe('wishlist - actions - reset', () => {
  it('calls the expected mutation/s for reset', () => {
    const commit = jest.fn()

    actions.reset({ commit })
    expect(commit).toHaveBeenCalledWith('reset')
  })
})
