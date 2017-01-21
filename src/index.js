/**
 *
 * @module fun-compose
 */
;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')

  var inputSpec = funAssert.type('[Function]')
  var outputSpec = funAssert.type('Function')

  /* exports */
  module.exports = compose([outputSpec, compose, inputSpec])

  /**
   *
   * @function module:fun-compose.compose
   *
   * @param {Array<Function>} functions to compose
   * @return {Function} the composition of the input functions
   */
  function compose (functions) {
    return functions.reduceRight(function (f1, f2) {
      return function () {
        return f2(f1.apply(null, arguments))
      }
    })
  }
})()

