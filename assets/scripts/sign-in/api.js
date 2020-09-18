'use strict'
const config = require('./../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const createPokemon = function (pokemon) {
  return $.ajax({
    url: config.apiUrl + '/pokemon',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: pokemon
  })
}

const showAllPokemon = function (pokemon) {
  return $.ajax({
    url: config.apiUrl + '/pokemon',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: pokemon
  })
}

const showOnePokemon = function (pokemon) {
  return $.ajax({
    url: config.apiUrl + '/pokemon/' + pokemon.pokemon.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: pokemon
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  createPokemon: createPokemon,
  showAllPokemon: showAllPokemon,
  showOnePokemon: showOnePokemon,
  signOut: signOut
}
