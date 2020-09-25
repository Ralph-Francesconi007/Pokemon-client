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
  $('#create-pokemon-message').text('Pokemon added to list! Hit the show all pokemon button to see your pokedex!')
  $('#create-pokemon').trigger('reset')
}

const createPokemonFailure = function (response) {
  $('#create-pokemon-message').text('Pokemon could not be added!')
}

const showPokemonSuccess = function (response) {
  $('#show-pokemon-message').text('Here is your pokedex!')
  $('#create-pokemon-message').html('')
  $('#edit-pokemon-message').html('')
  $('#pokemon-delete-message').html('')
  $('#pokemon-showAll').empty()
  for (let i = 0; i < response.pokemon.length; i++) {
    $('#pokemon-showAll').append(`
      <div class="all-pokemon">
      <p>Pokemon: ${response.pokemon[i].name}</p>
      <p>Type: ${response.pokemon[i].type}</p>
      <p>Move: ${response.pokemon[i].move}</p>
      </div>
    `)
    $('#pokemon-showAll').append(`
        <button id="edit-button" class="update" type="submit" value="${response.pokemon[i]._id}">Edit Pokemon!</button>
        <button class="delete-button" type="button" value="${response.pokemon[i]._id}">Delete Button</button>
    `)
  }
}

const showPokemonFailure = function () {
  $('#show-pokemon-message').text('Could not show pokemon succesfully')
}

const editPokemonShow = function () {
  $('#update-pokemon').show()
}

const editSuccess = function () {
  $('#update-pokemon').hide()
}

const editPokemonHandle = function () {
  $('.update-button').show()
}

const editPokemonSuccess = function (response) {
  $('#edit-pokemon-message').html('Pokemon has been updated! Hit the show all pokemon button to see your new pokemon!')
  $('#update-pokemon').trigger('reset')
}

const editPokemonFailure = function () {
  $('#edit-pokemon-message').html('Pokemon could not be updated!')
}

const deleteSuccess = function (response) {
  $('#pokemon-delete-message').html('You have successfully deleted the Pokemon! Hit the show all pokemon button to see the updated list!')
}

const deleteFailure = function () {
  $('#pokemon-delete-message').html('Pokemon could not be deleted!')
}

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Successfully logged out, Please Sign In')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#create-pokemon').hide()
  $('#pokemon-show-button').hide()
  $('#show-pokemon').hide()
  $('#update-pokemon').hide()
  $('#show-pokemon-message').html('')
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
  editPokemonShow,
  editSuccess,
  deleteSuccess,
  deleteFailure,
  signOutSuccess,
  signOutFailed
}
