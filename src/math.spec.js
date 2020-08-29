

/* 
**  Math
*/

import { approximatelyEqual, averageOf } from './index'

describe('approximatelyEqual', () => {
  test('Can approx 2 numbers within 0.1', () => {
    expect(approximatelyEqual(1.0, 1.01, 0.1)).toBeTruthy()
  })
  test('Can approx 2 numbers outside 0.1', () => {
    expect(approximatelyEqual(1.0, 1.2, 0.1)).toBeFalsy()
  })
  test('Does not break without arguments', () => {
    expect(approximatelyEqual()).toBe(false)
  })
})

describe('averageOf', () => {
  test('Can average 1 number', () => {
    expect(averageOf(2)).toBe(2)
  })
  test('Can average 2 numbers', () => {
    expect(averageOf(1, 2)).toBe(1.5)
  })
  test('Does not break without arguments', () => {
    expect(averageOf()).toBe(NaN)
  })
})


