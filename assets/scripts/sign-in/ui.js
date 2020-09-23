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
  $('#sign-in-message').text('You are signed in ' + response.user.email)
  $('#sign-up-message').html('')
  $('#change-password').show()
  $('#pokemon-show-button').show()
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
  $('#create-pokemon').trigger('reset')
}

const createPokemonFailure = function (response) {
  $('#create-pokemon-message').text('Pokemon could not be added!')
}

const showPokemonSuccess = function (response) {
  $('#pokemon-show').text('Here is your pokedex!')
  $('#create-pokemon-message').html('')
  response.pokemon.forEach(pokemon => {
    const pokemonHTML = (`
      <div class="all-pokemon">
      <p>Pokemon: ${pokemon.name}</p>
      <p>Type: ${pokemon.type}</p>
      <p>Move: ${pokemon.move}</p>
      <form class="update-pokemon">
        <legend>Edit Pokemon!</legend>

        <label for="Pokemon-Name">Pokemon Name</label>
        <input name="pokemon[name]" type="text" value="${pokemon.name}">

        <label for="Pokemon-Type">Type</label>
        <input name="pokemon[type]" type="text" value="${pokemon.type}">

        <label for="Pokemon-Move">Move</label>
        <input name="pokemonmove]" type="text" value="${pokemon.move}">
      </form>
      <button class="delete-button" data-cell-index="${pokemon._id}">Delete Pokemon!</button>
      <button class="update-button" data-cell-index="${pokemon._id}">Update Pokemon!</button>
      </div>
      <br>
    `)
    $('#show-pokemon').prepend(pokemonHTML)
  })
  // $('#pokemon-show-button').hide()
}

const showPokemonFailure = function () {
  $('#pokemon-show').text('Could not show pokemon succesfully')
}

const editPokemonHandle = function () {
  $('.update-button').show()
}

const editPokemonSuccess = function (response) {
  $('#edit-pokemon-message').html('Pokemon has been updated!')
}

const editPokemonFailure = function () {
  $('#edit-pokemon-message').html('Pokemon could not be updated!')
}

const deleteSuccess = function (response) {
  $('#pokemon-delete-message').html('You have successfully deleted the Pokemon!')
  $('#pokemon-delete').trigger('reset')
}

const deleteFailure = function () {
  $('#pokemon-delete-message').html('Pokemon could not be deleted!')
}

// const handleShow = function (event) {
//   const updateForm = $(event.target).attr('data-cell-index')
//   $('#' + updateForm).show()
//   $('.' + updateForm).hide()
//   $('.' + updateForm).hide()
// }

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Successfully logged out, Please Sign In')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#create-pokemon').hide()
  $('#show-pokemon').hide()
  $('#pokemon-show').html('')
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
  showPokemonSuccess,
  showPokemonFailure,
  editPokemonHandle,
  editPokemonSuccess,
  editPokemonFailure,
  deleteSuccess,
  deleteFailure,
  // handleShow,
  signOutSuccess,
  signOutFailed
}
