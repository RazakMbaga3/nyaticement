import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // Pre-existing across many content pages; tracked for cleanup rather
      // than blocking CI on a purely cosmetic rule.
      'react/no-unescaped-entities': 'warn',
    },
  },
]

export default eslintConfig
