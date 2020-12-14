import { Selector } from 'testcafe'

fixture`Home`.page`http://localhost:3000/`

test('Displays correct h1', async (t) => {
  await t.expect(Selector('h1').innerText).eql(`Welcome`)
})
