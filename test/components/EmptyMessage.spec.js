import { mount /* , shallowMount */ } from '@vue/test-utils'

import EmptyMessage from '@/components/EmptyMessage'

describe('EmptyMessage - html', () => {
  it('html matches expectations', () => {
    const line = 'Test'
    const expectations = `<div class="p-4">
  <h2 class="mt-16 text-center">
    ${line}
    <br>
    try
    <routerlink-stub to="/products" class="underline">
      browsing our products
    </routerlink-stub> <br>
    for more inspiration!
  </h2>
</div>`

    const wrapper = mount(EmptyMessage, {
      propsData: {
        line,
      },
      stubs: {
        RouterLink: true,
      },
    })
    const actual = wrapper.html()

    expect(actual).toBe(expectations)
  })
})
