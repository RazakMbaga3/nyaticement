import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CompactInfoCard from './CompactInfoCard'

describe('CompactInfoCard', () => {
  it('renders the title, description, and a link to the correct path', () => {
    render(
      <CompactInfoCard
        title="THE PLANT"
        imageSrc="/images/aboutus/img1.jpg"
        description="Our integrated cement manufacturing unit."
        linkPath="/about/plant"
        index={0}
      />
    )

    expect(screen.getByText('THE PLANT')).toBeInTheDocument()
    expect(screen.getByText('Our integrated cement manufacturing unit.')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toHaveAttribute('href', '/about/plant')
  })
})
