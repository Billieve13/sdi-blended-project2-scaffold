import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Project 2" heading', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/project 2/i);
  console.log(linkElement)
  expect(linkElement.innerHTML).toBe("Welcome to Project 2!");
});