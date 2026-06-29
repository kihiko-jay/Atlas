import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|sass|scss)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)(\\?.*)?$': '<rootDir>/__mocks__/fileMock.ts',
    '^next/navigation$': '<rootDir>/__mocks__/next/navigation.ts',
    '^next/link$': '<rootDir>/__mocks__/next/link.tsx',
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  testMatch: ['**/*.spec.tsx', '**/*.spec.ts'],
};

export default config;
