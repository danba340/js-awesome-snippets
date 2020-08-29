

/* 
**  JSON
*/

import { isValidJSON } from './index'
import { TestScheduler } from 'jest'

describe('isValidJSON', () => {
  test("function correctly imported", () => {
    expect(isValidJSON).toBeInstanceOf(Function);
  })
  test("returns false for invalid JSON string", () => {
    expect(isValidJSON("abc")).toBeFalsy()
  })
  test("returns true for valid JSON string", () => {
    expect(isValidJSON('{"abc":"abc"}')).toBeTruthy()
  })
  test("returns false when no string was passed in", () => {
    expect(isValidJSON()).toBeFalsy()
  })
})