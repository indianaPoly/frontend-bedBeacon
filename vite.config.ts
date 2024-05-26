import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://13.209.249.132/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
      '/chatbot': {
        target: 'http://203.253.21.194:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chatbot/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
