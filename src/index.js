/**
 *
 * @module fun-compose
 */
;(function () {
  'use strict'

  /* imports */
  var inputSpec = require('./spec-input')
  var outputSpec = require('./spec-output')

  /* exports */
  module.exports = compose(inputSpec, compose, outputSpec)

  /**
   *
   * @return {Function} the composition of the input functions
   */
  function compose () {
    return Array.prototype.slice.call(arguments).reduce(function (f1, f2) {
      return function () {
        return f2(f1.apply(null, arguments))
      }
    })
  }
})()

