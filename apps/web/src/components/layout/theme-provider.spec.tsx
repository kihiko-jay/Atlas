import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './theme-provider';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <span data-testid="child">hello</span>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('wraps children with the theme provider', () => {
    render(
      <ThemeProvider>
        <span>content</span>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
  });
});
