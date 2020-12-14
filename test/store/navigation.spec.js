import { getters, mutations } from '@/store/navigation'

// Getters
describe('navigation - active', () => {
  it('returns states active status', () => {
    const state = { active: false }

    const actual = getters.active(state)

    expect(actual).toEqual(false)
  })
})

// Mutations
describe('navigation - activate', () => {
  it('set states active status to true', () => {
    const state = { active: false }

    mutations.activate(state)

    expect(state).toEqual({ active: true })
  })
})

describe('navigation - deactivate', () => {
  it('set states active status to false', () => {
    const state = { active: true }

    mutations.deactivate(state)

    expect(state).toEqual({ active: false })
  })
})
