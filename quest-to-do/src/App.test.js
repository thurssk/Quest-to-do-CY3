import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quest To Do', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quest To Do/i);
  expect(linkElement).toBeInTheDocument();
});
