import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './page';

jest.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    asChild: _asChild,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) => (
    <div {...props}>{children}</div>
  ),
}));

describe('LandingPage', () => {
  it('renders the Atlas heading', () => {
    render(<LandingPage />);
    expect(screen.getByRole('heading', { name: /atlas/i })).toBeInTheDocument();
  });

  it('renders the product description', () => {
    render(<LandingPage />);
    expect(screen.getByText(/AI Operating System for Business Software/i)).toBeInTheDocument();
  });

  it('renders a link to /app', () => {
    render(<LandingPage />);
    expect(screen.getByRole('link', { name: /open app/i })).toHaveAttribute('href', '/app');
  });

  it('has a main landmark', () => {
    render(<LandingPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
