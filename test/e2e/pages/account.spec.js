import { Selector } from 'testcafe'

fixture`Account`.page`http://localhost:3000/account`

test('Displays correct h1', async (t) => {
  await t.expect(Selector('h1').textContent).eql(`Account`)
})

test('Text typing basics', async (t) => {
  await t
    .typeText(`#current-email`, 'example@example.com')
    .typeText(`#current-email`, 'example@.com', { replace: true })
    .typeText(`#current-email`, 'example', { caretPos: 8 })
    .expect(Selector(`#current-email`).value)
    .eql('example@example.com')

  await t
    .typeText(`#current-password`, 'P455w0rD!')
    .expect(Selector(`#current-password`).value)
    .eql('P455w0rD!')

  await t.click(`#account > div > form:nth-child(1) > button`)

  await t
    .expect(
      (await Selector('#account > section > div:nth-child(5) > button').textContent).trim()
    )
    .eql('Sign out')
})
