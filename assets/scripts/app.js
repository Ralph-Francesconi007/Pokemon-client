'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./sign-in/events')
const ui = require('./sign-in/ui')
// const ui = require('./sign-in/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-password').hide()
  $('#create-pokemon').hide()
  $('#pokemon-show-button').hide()
  $('#sign-out').hide()
  $('#update-pokemon').hide()
  $('#sign-up').on('submit', events.handleSignUp)
  $('#sign-in').on('submit', events.handleSignIn)
  $('#change-password').on('submit', events.handlePasswordChange)
  $('#create-pokemon').on('submit', events.handleCreatePokemon)
  $('#pokemon-show-button').on('click', events.handleShowPokemon)
  $('#show-pokemon').on('click', '.delete-button', events.handleDelete)
  $('#show-pokemon').on('click', '#edit-button', events.handleEdit)
  $('#show-pokemon').on('click', '#edit-button', ui.editPokemonShow)
  $('#update-pokemon').on('click', '.update', ui.editSuccess)
  $('#update-pokemon').on('submit', events.handleEditPokemon)
  $('#sign-out').on('submit', events.handleSignOut)
})
