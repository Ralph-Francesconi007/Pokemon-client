const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const handleSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const handleSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const handlePasswordChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}

const handleCreatePokemon = function (event) {
  const form = event.target
  const pokemon = getFormFields(form)
  api.createPokemon(pokemon)
    .then(ui.createPokemonSuccess)
    .catch(ui.createPokemonFailure)
}

const handleShowPokemon = function (event) {
  const form = event.target
  const pokemon = getFormFields(form)
  api.showAllPokemon(pokemon)
    .then(ui.showPokemonSuccess)
    .catch(ui.showPokemonFailure)
}

const handleShowOne = function (event) {
  const form = event.target
  const pokemon = getFormFields(form)
  api.showOnePokemon(pokemon)
    .then(ui.showOneSuccess)
    .catch(ui.showOneFailure)
}

const handleSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailed)
}

module.exports = {
  handleSignIn: handleSignIn,
  handleSignUp: handleSignUp,
  handlePasswordChange: handlePasswordChange,
  handleCreatePokemon: handleCreatePokemon,
  handleShowPokemon: handleShowPokemon,
  handleShowOne: handleShowOne,
  handleSignOut: handleSignOut
}
