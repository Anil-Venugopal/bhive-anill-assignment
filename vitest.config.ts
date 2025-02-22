import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './_tests_/setup.ts', // Global setup
    include: ['_tests_/**/*.test.ts', '_tests_/**/*.test.tsx'],
  },
});
