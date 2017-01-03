;(function () {
  'use strict'

  /* imports */
  var funTest = require('fun-test')
  var funAssert = require('fun-assert')
  var funTransform = require('fun-transform')

  /* exports */
  module.exports = [
    {
      error: funAssert.truthy,
      sync: true
    },
    {
      input: {
        a: sum,
        b: square
      },
      result: funAssert.type('Function'),
      sync: true,
      transformer: funTransform.argsToObject(['a', 'b'])
    }
  ].map(funTest)

  function sum () {
    return Array.prototype.slice.call(arguments).reduce(function (a, b) {
      return a + b
    })
  }

  function square (input) {
    return input * input
  }
})()

