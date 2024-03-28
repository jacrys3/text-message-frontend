import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import App from './App'

test('renders App component', () => {
  render(<App />)
  const appElement = screen.getByTestId('app')
  expect(appElement).toBeInTheDocument()
})
