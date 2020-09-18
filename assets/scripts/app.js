'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./sign-in/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-password').hide()
  $('#create-pokemon').hide()
  $('#pokemon-show-button').hide()
  $('#pokemon-show-one-button').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', events.handleSignUp)
  $('#sign-in').on('submit', events.handleSignIn)
  $('#change-password').on('submit', events.handlePasswordChange)
  $('#pokemon-create').on('click', events.handleCreatePokemon)
  $('#show-pokemon').on('click', events.handleShowPokemon)
  $('#show-pokemon-one').on('click', events.handleShowOne)
  $('#sign-out').on('submit', events.handleSignOut)
})
