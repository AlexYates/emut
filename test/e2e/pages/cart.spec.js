import { Selector } from 'testcafe'
import VueSelector from 'testcafe-vue-selectors'

fixture`Cart`.page`http://localhost:3000/cart`

test('H1 displays correctly', async (t) => {
  const actual = (await Selector('h1').textContent).trim()
  await t.expect(actual).eql('Cart')
})

test(`Empty message displays correctly when cart is empty`, async (t) => {
  const actual = (await VueSelector('EmptyMessage').textContent).trim()
  await t
    .expect(actual)
    .eql(
      'Your cart is empty,\n' +
        '    \n' +
        '    try\n' +
        '    \n' +
        '      browsing our products\n' +
        '     \n' +
        '    for more inspiration!'
    )
})

test('H2 for ProductSuggestionSection displays correctly', async (t) => {
  const actual = (
    await VueSelector('ProductSuggestionSection').find('h2').textContent
  ).trim()
  await t.expect(actual).eql(`Suggested products for you…`)
})

test('4 Products are shown in ProductSuggestionSection', async (t) => {
  const actual = await VueSelector('ProductSuggestionSection').find('figure')
    .count
  await t.expect(actual).eql(4)
})

test.only('Displays correct count in H1 Pip when products are added to cart', async (t) => {
  await t.click(
    await Selector(
      'li.p-2:nth-child(1) > figure:nth-child(1) > a:nth-child(1) > label:nth-child(3)'
    )
  )
  await t.click(
    await Selector(
      'li.p-2:nth-child(4) > figure:nth-child(1) > a:nth-child(1) > label:nth-child(3)'
    )
  )
  const actual = await (await VueSelector('PageHeading Pip').textContent).trim()
  await t.expect(actual).eql('2')
})

test.only('Displays CheckoutSection with correct text', async (t) => {
  await t.click(
    await Selector(
      'li.p-2:nth-child(1) > figure:nth-child(1) > a:nth-child(1) > label:nth-child(3)'
    )
  )
  await t.click(
    await Selector(
      'li.p-2:nth-child(4) > figure:nth-child(1) > a:nth-child(1) > label:nth-child(3)'
    )
  )
  const actualCheckout = await (
    await VueSelector('CheckoutSection').find('h2').textContent
  ).trim()
  await t.expect(actualCheckout).eql('Checkout')

  const actualNumber = await (
    await Selector('div.mb-1:nth-child(1) > div:nth-child(2)').textContent
  ).trim()
  await t.expect(actualNumber).eql('2')

  const actualSub = await (
    await Selector('div.mb-1:nth-child(2) > div:nth-child(2)').textContent
  ).trim()
  await t.expect(actualSub).notEql('0')

  const actualDelivery = await (
    await Selector('div.mb-1:nth-child(3) > div:nth-child(2)').textContent
  ).trim()
  await t.expect(actualDelivery).eql('£3.99')

  const actualTotal = await (
    await Selector('div.mb-1:nth-child(4) > div:nth-child(2)').textContent
  ).trim()
  await t.expect(actualTotal).notEql('0')
})
