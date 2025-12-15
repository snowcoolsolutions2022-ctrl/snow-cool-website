import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, helps with localhost issues
    port: 5173,
    allowedHosts: true, // Allow tunneling hosts
  }
})
