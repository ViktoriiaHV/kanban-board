import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kanban header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Kanban Board/i);
  expect(headerElement).toBeInTheDocument();
});
