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
    // .then(handleShowPokemon)
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
  event.preventDefault()
  const form = event.target
  const pokemon = getFormFields(form)
  api.createPokemon(pokemon)
    .then(ui.createPokemonSuccess)
    // .then(handleShowPokemon)
    .catch(ui.createPokemonFailure)
}

const handleShowPokemon = function (event) {
  event.preventDefault()
  const form = event.target
  const pokemon = getFormFields(form)
  api.showAllPokemon(pokemon)
    .then(ui.showPokemonSuccess)
    .catch(ui.showPokemonFailure)
}

const handleEditPokemon = function (event) {
  event.preventDefault()
  const pokemonUpdate = $(event.target).attr('data-cell-index')
  const form = event.target
  const pokemon = getFormFields(form)
  api.editPokemon(pokemon, pokemonUpdate)
    .then(ui.editPokemonSuccess)
    // .then(handleShowPokemon)
    .catch(ui.editPokemonFailure)
}

const handleDelete = function (event) {
  event.preventDefault()
  const pokemon = $(event.target).attr('data-cell-index')
  api.deletePokemon(pokemon)
    // .then(handleShowPokemon)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
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
  handleEditPokemon: handleEditPokemon,
  handleDelete: handleDelete,
  handleSignOut: handleSignOut
}
