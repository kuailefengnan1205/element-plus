import { describe, expect, it } from 'vitest'
import { mutable } from '..'

describe('typescript', () => {
  it('mmutable should work', () => {
    const obj = { key: 'value', foo: 'bar' }
    expect(mutable(obj)).toBe(obj)
  })
})
