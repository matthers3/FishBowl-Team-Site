import { render, screen } from '@testing-library/react';
import MainSite from './MainSite';

test('renders learn react link', () => {
  render(<MainSite />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
