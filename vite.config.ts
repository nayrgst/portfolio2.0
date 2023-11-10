import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    force: true,
  },
  plugins: [
    react(),
  ],
})