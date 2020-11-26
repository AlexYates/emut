import {
  /* state, */ getters,
  mutations /* , actions */,
} from '@/store/overlay'

// Getters
describe('overlay - active', () => {
  it('returns states active status', () => {
    const state = { active: false }

    const actual = getters.active(state)

    expect(actual).toEqual(false)
  })
})

// Mutations
describe('overlay - activate', () => {
  it('set states active status to true', () => {
    const state = { active: false }

    mutations.activate(state)

    expect(state).toEqual({ active: true })
  })
})

describe('overlay - deactivate', () => {
  it('set states active status to false', () => {
    const state = { active: true }

    mutations.deactivate(state)

    expect(state).toEqual({ active: false })
  })
})
