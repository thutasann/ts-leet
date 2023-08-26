/**
 * Typescirpt Guards are actually part of
 * a bigger concept of Narrowing
 *
 * @description
 * Narrowing is the way of the typescript compiler
 * to narrow down specific blocks of code that you write
 * and infer types
 */

// 1. typeof guard
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}
add(3, 4);
