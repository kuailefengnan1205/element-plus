import { describe, expect, it } from 'vitest'
import { isKorean } from '..'

describe('i18n', () => {
  it('isKorean should work', () => {
    expect(isKorean('한국어')).toBe(true)
  })
})
