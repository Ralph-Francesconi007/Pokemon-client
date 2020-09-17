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
  $('#sign-up').on('submit', events.handleSignUp)
  $('#sign-in').on('submit', events.handleSignIn)
  $('#change-password').on('submit', events.handlePasswordChange)
  $('#create-pokemon').on('click', events.handleCreatePokemon)
  $('#sign-out').on('submit', events.handleSignOut)
})
