const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
  event.preventDefault()
  const form = event.target
  const pokemon = getFormFields(form)
  api.createPokemon(pokemon)
    .then(ui.createPokemonSuccess)
    .catch(ui.createPokemonFailure)
}

const handleShowPokemon = function (event) {
  event.preventDefault()
  api.showAllPokemon()
    .then(ui.showPokemonSuccess)
    .catch(ui.showPokemonFailure)
}

const handleEdit = function (event) {
  event.preventDefault()
  store.pokemonid = event.target.value
}

const handleEditPokemon = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.editPokemon(formData)
    .then(ui.editPokemonSuccess)
    .catch(ui.editPokemonFailure)
}

const handleDelete = function (event) {
  event.preventDefault()
  store.pokemonid = event.target.value
  api.deletePokemon()
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
  handleEdit: handleEdit,
  handleEditPokemon: handleEditPokemon,
  handleDelete: handleDelete,
  handleSignOut: handleSignOut
}
