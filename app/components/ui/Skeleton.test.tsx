import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Skeleton, TextSkeleton } from './Skeleton'

describe('Skeleton', () => {
  it('applies the given width and height as inline styles', () => {
    const { container } = render(<Skeleton width="120px" height="40px" />)
    const el = container.firstChild as HTMLElement

    expect(el).toHaveStyle({ width: '120px', height: '40px' })
  })
})

describe('TextSkeleton', () => {
  it('renders the requested number of lines', () => {
    const { container } = render(<TextSkeleton lines={4} />)
    const wrapper = container.firstElementChild as HTMLElement

    expect(wrapper.children).toHaveLength(4)
  })
})
