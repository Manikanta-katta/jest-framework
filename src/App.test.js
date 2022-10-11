import { render, screen } from '@testing-library/react';
import App from './App';
import Login from "./Components/Login"

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Loginpage/);
  expect(linkElement).toBeInTheDocument();
});


