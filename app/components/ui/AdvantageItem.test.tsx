import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AdvantageItem from './AdvantageItem'

describe('AdvantageItem', () => {
  it('renders the title and description', () => {
    render(<AdvantageItem title="Own Clinker Production" description="Full control over quality." index={0} />)

    expect(screen.getByText('Own Clinker Production')).toBeInTheDocument()
    expect(screen.getByText('Full control over quality.')).toBeInTheDocument()
  })
})
