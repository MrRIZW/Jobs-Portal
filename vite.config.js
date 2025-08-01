import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Jobs-Portal/',
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    proxy:{
      '/api':{
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,''),
      }
    }
  },
});
