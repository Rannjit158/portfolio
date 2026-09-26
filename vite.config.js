import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Heavy Three.js stack is lazy-loaded into its own chunk via React.lazy.
    // Split remaining vendors (react, framer-motion) for better caching.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
    // Three.js is inherently large; warn threshold raised since it is isolated
    // in a lazily-loaded chunk that never blocks initial render.
    chunkSizeWarningLimit: 1200,
  },
})