;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')

  /* exports */
  module.exports = input

  function input () {
    return Array.prototype.slice.call(arguments).map(funAssert.type('Function'))
  }
})()

