import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

jest.mock('geist/font/sans', () => ({
  GeistSans: { variable: '--font-geist-sans', className: 'geist-sans' },
}));
jest.mock('geist/font/mono', () => ({
  GeistMono: { variable: '--font-geist-mono', className: 'geist-mono' },
}));
jest.mock('@/components/layout/theme-provider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
jest.mock('@/styles/globals.css', () => ({}));

describe('RootLayout', () => {
  it('renders children', () => {
    render(
      <RootLayout>
        <div data-testid="child">content</div>
      </RootLayout>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
