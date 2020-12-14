import { shallowMount } from '@vue/test-utils'

import ProductList from '@/components/ProductList'

describe('ProductList - html', () => {
  it('html matches expectations', () => {
    const expectations =
      '<transition-group-stub tag="ol" name="fade-n-slide-from-bottom" appear="true" class="flex flex-wrap mb-4"></transition-group-stub>'

    const wrapper = shallowMount(ProductList, {
      propsData: {
        products: [],
      },
    })
    const actual = wrapper.html()

    expect(actual).toBe(expectations)
  })
})
