import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Background from './Background'

// Used whenever you called render, or it will cause memory leaks
afterEach(() => {
  cleanup()
})

test('should render background component', () => {
  render(<Background/>)

  const element = screen.getByTestId('background')
  expect(element).toBeInTheDocument()
}) 