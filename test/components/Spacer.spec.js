import { /* mount, */ shallowMount } from '@vue/test-utils'

import Spacer from '@/components/Spacer'

describe('Spacer - html', () => {
  it('html matches expectations', () => {
    const expectations = '<div class="m-1"></div>'

    const shallowWrapper = shallowMount(Spacer)
    const actual = shallowWrapper.html()

    expect(actual).toBe(expectations)
  })
})
