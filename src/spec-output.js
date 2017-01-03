;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')

  /* exports */
  module.exports = input

  function input (result) {
    return funAssert.type('Function')(result)
  }
})()

