import { v4 as uuidv4 } from 'uuid'

const account = {
  locale: 'en-GB',
  currency: 'GBP',
}

const createLink = (title, path, component) => ({
  component,
  path,
  title,
  uuid: uuidv4(),
})

const currencyFormat = (value) => {
  return Intl.NumberFormat(account.locale, {
    currency: account.currency,
    style: 'currency',
  }).format(value)
}

export { createLink, currencyFormat }
