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
  module.exports = compose

  /**
   *
   * @return {Function} the composition of the input functions
   */
  function compose () {
    inputSpec.apply(null, arguments)

    var composed = Array.prototype.slice.call(arguments)
      .reduce(function (f1, f2) {
        return function () {
          return f2(f1.apply(null, arguments))
        }
      })

    return outputSpec(composed)
  }
})()

