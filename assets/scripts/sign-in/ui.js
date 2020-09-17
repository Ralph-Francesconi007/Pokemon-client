const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Could not Sign you up')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-message').text('You are Signed in ' + response.user.email)
  $('#message').html('')
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-pokemon').show()
  $('#sign-out-message').html('')
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function () {
  $('#sign-in-message').text('Could not sign in. Please try again')
  $('#sign-out-message').html('')
  $('#sign-in').trigger('reset')
}

const passwordChangeSuccess = function (response) {
  $('#change-password-message').text('You have succesfully changed the password.')
  $('#change-password').trigger('reset')
}

const passwordChangeFailure = function () {
  $('#change-password-message').text('Could not succesfully change the password. Please try again')
  $('#change-password').trigger('reset')
}

const createPokemonSuccess = function (response) {
  $('#create-pokemon-message').text('Pokemon added to list!')
}

const createPokemonFailure = function (response) {
  $('#create-pokemon-message').text('Pokemon could not be added!')
}

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Successfully logged out, Please Sign In')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-in-message').text('')
  $('#change-password').hide()
  $('#change-password-message').text('')
  $('#sign-out').hide()
}

const signOutFailed = function () {
  $('#sign-out-message').text('Could not sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  createPokemonSuccess,
  createPokemonFailure,
  signOutSuccess,
  signOutFailed
}
