import { /* state, */ getters, mutations, actions } from '@/store/account'
import { signIn, signOut } from '@/database/account'

const payload = {
  email: 'test.test@test.com',
  password: '1234abcd',
}

// Getters
describe('account - getters - account', () => {
  it('returns the account key with expected inital values', () => {
    const state = { account: {} }

    const actual = getters.account(state)

    expect(actual).toEqual({})
  })
})

describe('account - getters - hasError', () => {
  it('returns the hasError key with expected inital values', () => {
    const state = { hasError: false }

    const actual = getters.hasError(state)

    expect(actual).toEqual(false)
  })
})

describe('account - getters - inProgress', () => {
  it('returns the inProgress key with expected inital values', () => {
    const state = { inProgress: false }

    const actual = getters.inProgress(state)

    expect(actual).toEqual(false)
  })
})

describe('account - getters - motionActive', () => {
  it('returns the motionActive key with expected inital values', () => {
    const state = { motionActive: false }

    const actual = getters.motionActive(state)

    expect(actual).toEqual(false)
  })
})

describe('account - getters - signedIn', () => {
  it('returns the signedIn key with expected inital values', () => {
    const state = { signedIn: false }

    const actual = getters.signedIn(state)

    expect(actual).toEqual(false)
  })
})

// Mutations
describe('account - mutations - account', () => {
  it('returns the account key with expected values', () => {
    const state = { account: payload }

    mutations.account(state, payload)

    expect(state).toEqual({ account: payload })
  })
})

describe('account - mutations - inProgress', () => {
  it('returns the inProgress boolean as expected', () => {
    const state = { inProgress: false }

    mutations.inProgress(state, true)

    expect(state).toEqual({ inProgress: true })
  })
})

describe('account - mutations - hasError', () => {
  it('returns the hasError boolean as expected', () => {
    const state = { hasError: false }

    mutations.hasError(state, true)

    expect(state).toEqual({ hasError: true })
  })
})

describe('account - mutations - motionActivate', () => {
  it('returns the motionActive boolean as true', () => {
    const state = { motionActive: false }

    mutations.motionActivate(state)

    expect(state).toEqual({ motionActive: true })
  })
})

describe('account - mutations - motionDeactivate', () => {
  it('returns the motionActive boolean as false', () => {
    const state = { motionActive: true }

    mutations.motionDeactivate(state)

    expect(state).toEqual({ motionActive: false })
  })
})

describe('account - mutations - signIn', () => {
  it('returns the signedIn boolean as true', () => {
    const state = { signedIn: false }

    mutations.signIn(state)

    expect(state).toEqual({ signedIn: true })
  })
})

describe('account - mutations - signOut', () => {
  it('returns the signedIn boolean as false', () => {
    const state = { signedIn: true }

    mutations.signOut(state)

    expect(state).toEqual({ signedIn: false })
  })
})

// Actions
describe('account - actions - motionToggle (motionDeactivate)', () => {
  it('calls the expected mutation for motionActive', () => {
    const commit = jest.fn()
    actions.motionToggle({ commit, getters })
    expect(commit).toHaveBeenCalledWith('motionDeactivate')
  })
})

describe('account - actions - motionToggle (not motionActivate)', () => {
  it('calls the expected mutation for motionActive', () => {
    const commit = jest.fn()
    actions.motionToggle({ commit, getters })
    expect(commit).not.toHaveBeenCalledWith('motionActivate')
  })
})

describe('account - actions - signIn', () => {
  it('calls the expected mutation/s for signIn and receives a 200 status', async () => {
    const commit = jest.fn()

    actions.signIn({ commit }, payload)

    const response = await signIn(payload)
    expect(response).toEqual({ status: 200 })

    expect(commit).toHaveBeenCalledWith('hasError', false)
    expect(commit).toHaveBeenCalledWith('inProgress', true)
    expect(commit).toHaveBeenCalledWith('account', payload)
    expect(commit).toHaveBeenCalledWith('signIn')
    expect(commit).toHaveBeenCalledWith('inProgress', false)
  })
})

describe('account - actions - signOut', () => {
  it('calls the expected mutation/s for signOut and receives a 200 status', async () => {
    const commit = jest.fn()

    actions.signOut({ commit }, payload)

    const response = await signOut(payload)
    expect(response).toEqual({ status: 200 })

    expect(commit).toHaveBeenCalledWith('hasError', false)
    expect(commit).toHaveBeenCalledWith('inProgress', true)
    expect(commit).toHaveBeenCalledWith('signOut')
    expect(commit).toHaveBeenCalledWith('inProgress', false)
  })
})
