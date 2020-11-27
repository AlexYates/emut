const isTest = process.env.NODE_ENV === 'test'

const signIn = async ({ email, password }) => {
  if (isTest) console.debug('Signing in with: ', { email, password })
  return { status: 200 }
}

const signOut = async ({ email, password }) => {
  if (isTest) console.debug('Signing out with: ', { email, password })
  return { status: 200 }
}

module.exports = {
  signIn,
  signOut,
}
