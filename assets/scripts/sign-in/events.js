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
  event.preventDefault()
  const form = event.target
  const pokemon = getFormFields(form)
  console.log('form is', form)
  console.log('pokemon is', pokemon)
  api.createPokemon(pokemon)
    .then(ui.createPokemonSuccess)
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

const handleShowOne = function (event) {
  event.preventDefault()
  const form = event.target
  const pokemonId = getFormFields(form)
  api.showOnePokemon(pokemonId.pokemon._id)
    .then(ui.showOneSuccess)
    .catch(ui.showOneFailure)
}

const handleEditPokemon = function (event) {
  event.preventDefault()
  const pokemonUpdate = $(event.target).data('id')
  const form = event.target
  const pokemonId = getFormFields(form)
  api.editPokemon(pokemonId, pokemonUpdate)
    .then(ui.editPokemonSuccess)
    .catch(ui.editPokemonFailure)
}

const handleDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const pokemonId = getFormFields(form)
  api.deletePokemon(pokemonId.pokemon._id)
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
  handleShowOne: handleShowOne,
  handleEditPokemon: handleEditPokemon,
  handleDelete: handleDelete,
  handleSignOut: handleSignOut
}
