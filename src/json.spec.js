

/* 
**  JSON
*/

import { isValidJSON } from './index'

describe('isValidJson', () => {
  test('function import', () => {
    expect(isValidJSON).toBeInstanceOf(Function)
  })
})