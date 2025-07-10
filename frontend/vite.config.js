import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/login': 'http://localhost:3000',
      '/mint': 'http://localhost:3000',
      '/stream': 'http://localhost:3000',
      '/community': 'http://localhost:3000',
      '/api/packs': 'http://localhost:3000',
    },
  },
});