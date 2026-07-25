import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CoreValueCard from './CoreValueCard'

describe('CoreValueCard', () => {
  it('renders the icon, title, and description', () => {
    render(<CoreValueCard icon="⚖️" title="Integrity" description="We operate responsibly." />)

    expect(screen.getByText('⚖️')).toBeInTheDocument()
    expect(screen.getByText('Integrity')).toBeInTheDocument()
    expect(screen.getByText('We operate responsibly.')).toBeInTheDocument()
  })
})
