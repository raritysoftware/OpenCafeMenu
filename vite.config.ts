import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true,
    sourcemap: false
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 5000,
    host: true
  }
})
