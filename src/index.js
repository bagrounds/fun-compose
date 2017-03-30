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

    return setProp('name', dot(f, g), function () {
      return f(g.apply(null, arguments))
    })
  }

  function dot (a, b) {
    return a.name + '.' + b.name
  }

  function setProp (prop, value, target) {
    return Object.defineProperty(
      target,
      prop,
      Object.defineProperty(
        Object.getOwnPropertyDescriptor(target, prop),
        'value',
        { value: value }
      )
    )
  }
})()

