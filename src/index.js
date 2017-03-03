/**
 *
 * @module fun-compose
 */
;(function () {
  'use strict'

  /* imports */
  var funPredicate = require('fun-predicate')

  var isFunction = funPredicate.type('Function')

  /* exports */
  module.exports = compose

  /**
   *
   * @function module:fun-compose.compose
   *
   * @param {Function} f - a unary function
   * @param {Function} g - an N-ary function
   * @return {Function} (f . g) - the N-ary function composition of f and g
   */
  function compose (f, g) {
    isFunction.assert(f)
    isFunction.assert(g)

    return function () {
      return f(g.apply(null, arguments))
    }
  }
})()

