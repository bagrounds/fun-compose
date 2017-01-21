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
      input: [
        sum,
        square
      ],
      result: funAssert.type('Function')
    },
    {
      input: [
        3,
        4
      ],
      result: funAssert.equal(49),
      transformer: funTransform.toResult(sum, square)
    },
    {
      input: [
        3,
        4
      ],
      result: funAssert.equal(50),
      transformer: funTransform.toResult(sum, square, plusOne)
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

