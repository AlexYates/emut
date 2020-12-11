const isTrue = true

const signIn = ({ email, password }) => {
  /* eslint-disable-next-line */
  console.debug('Signing in with: ', { email, password })
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve({ status: 200 })
    } else {
      reject(new Error('Something failed'))
    }
  })
}

const signOut = ({ email, password }) => {
  /* eslint-disable-next-line */
  console.debug('Signing out with: ', { email, password })
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve({ status: 200 })
    } else {
      reject(new Error('Something failed'))
    }
  })
}

module.exports = {
  signIn,
  signOut,
}
