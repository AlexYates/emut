import { mount } from '@vue/test-utils'

import ProductItem from '@/components/ProductItem'

const product = {
  price: 123.45,
  title: 'Test',
  uuid: 'abcd-1234',
}

describe('ProductItem - html', () => {
  it('html matches expectations', () => {
    const expectations = `<figure class="bg-gray-100 border flex flex-col flex-grow min-h-full overflow-hidden rounded-lg shadow-lg">
  <routerlink-stub to="/product/${product.uuid}" class="relative">
    <pictureimages-stub></pictureimages-stub>
    <wishlisttogglebutton-stub product="[object Object]" class="absolute left-0 top-0"></wishlisttogglebutton-stub>
    <carttogglebutton-stub product="[object Object]" class="absolute right-0 top-0"></carttogglebutton-stub>
  </routerlink-stub>
  <figcaption class="flex flex-col flex-grow justify-between p-2">
    <h2 class="font-semibold mb-2 text-lg">${product.title}</h2>
    <p>£${product.price}</p>
  </figcaption>
</figure>`

    const wrapper = mount(ProductItem, {
      stubs: {
        RouterLink: true,
        PictureImages: true,
        WishlistToggleButton: true,
        CartToggleButton: true,
      },
      propsData: {
        product,
      },
    })
    const actual = wrapper.html()

    expect(actual).toBe(expectations)
  })
})

describe('ProductItem - price', () => {
  it('it renders price as a formatted currency', () => {
    expect(ProductItem.computed.price.call({ product })).toBe(
      `£${product.price}`
    )
  })
})
