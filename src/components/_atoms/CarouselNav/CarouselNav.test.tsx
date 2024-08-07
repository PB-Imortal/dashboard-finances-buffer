import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CarouselNav from './CarouselNav'
import { describe, it, expect, vi } from 'vitest'

describe('CarouselNav', () => {
  it('should render with default items', () => {
    render(
      <BrowserRouter>
        <CarouselNav />
      </BrowserRouter>
    )

    const items = [
      'Back',
      'Edit Profile',
      'Preferences',
      'Security'
    ]

    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('should render with provided items', () => {
    const customItems = [
      { label: 'Home', to: '/home' },
      { label: 'Settings', to: '/settings' }
    ]

    render(
      <BrowserRouter>
        <CarouselNav items={customItems} />
      </BrowserRouter>
    )

    customItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('should update highlight style on item click', () => {
    render(
      <BrowserRouter>
        <CarouselNav />
      </BrowserRouter>
    )

    const editProfileItem = screen.getByText('Edit Profile')
    fireEvent.click(editProfileItem)

    expect(editProfileItem).toHaveClass('font-bold')
  })

  it('should call scrollIntoView on item click', () => {
    render(
      <BrowserRouter>
        <CarouselNav />
      </BrowserRouter>
    )

    const editProfileItem = screen.getByText('Edit Profile')
    const scrollIntoViewMock = vi.fn()
    
    // Mocking scrollIntoView
    const originalScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = scrollIntoViewMock

    // Click the item and wait for useEffect to run
    fireEvent.click(editProfileItem)
    // Force component to re-render to ensure useEffect is triggered
    render(
      <BrowserRouter>
        <CarouselNav />
      </BrowserRouter>
    )

    expect(scrollIntoViewMock).toHaveBeenCalled()

    // Restore original method to avoid side effects
    Element.prototype.scrollIntoView = originalScrollIntoView
  })
})
