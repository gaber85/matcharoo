import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders App', () => {
  render(<App />);
  const appElement = screen.getByText('Hello World!');
  expect(appElement).toBeInTheDocument();
});
