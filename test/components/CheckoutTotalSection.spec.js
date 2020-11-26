import { mount /* , shallowMount */ } from '@vue/test-utils'
import CheckoutTotalSection from '@/components/CheckoutTotalSection'

describe('CheckoutTotalSection - html', () => {
  it('html matches expectations', () => {
    const expectations = ``

    const wrapper = mount(CheckoutTotalSection)
    const actual = wrapper.html()

    expect(actual).toBe(expectations)
  })
})
