;(function () {
  'use strict'

  /* imports */
  var funTest = require('fun-test')
  var funAssert = require('fun-assert')
  var funTransform = require('fun-transform')

  /* exports */
  module.exports = [
    {
      error: funAssert.truthy
    },
    {
      input: [{
        a: sum,
        b: square
      }],
      result: funAssert.type('Function'),
      transformer: funTransform.argsToObject(['a', 'b'])
    },
    {
      input: [{
        a: 3,
        b: 4
      }],
      result: funAssert.equal(49),
      transformer: function sumThenSquare (funCompose) {
        return funTransform.argsToObject(['a', 'b'])(
          funCompose(sum, square)
        )
      }
    },
    {
      input: [{
        a: 3,
        b: 4
      }],
      result: funAssert.equal(50),
      transformer: function sumThenSquarePlusOne (funCompose) {
        return funTransform.argsToObject(['a', 'b'])(
          funCompose(sum, square, plusOne)
        )
      }
    }
  ].map(funTest)

  function plusOne (number) {
    return number + 1
  }

  function sum () {
    return Array.prototype.slice.call(arguments).reduce(function (a, b) {
      return a + b
    })
  }

  function square (input) {
    return input * input
  }
})()

