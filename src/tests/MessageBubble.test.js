import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import MessageBubble from '../components/MessageBubble'

test('renders MessageBubble component', () => {
  render(<MessageBubble />)
  const messageBubbleElement = screen.getByTestId('messageBubble')
  expect(messageBubbleElement).toBeInTheDocument()
})
