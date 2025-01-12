import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.')

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
    },
    base: env.VITE_BASE_PATH || '/',
    server: {
      port: 5173,
      strictPort: true,
      open: true,
    },
    preview: {
      port: 4173,
      strictPort: true,
      open: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: mode !== 'production',
      // Generate manifest file for PWA
      manifest: true,
      // Customize rollup build options
      rollupOptions: {
        output: {
          // Ensure chunk filenames include content hash
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          // Implement manual chunks for better code splitting
          manualChunks: {
            vendor: [
              'react',
              'react-dom',
              'react-router-dom'
            ],
          },
        },
      },
    },
    define: {
      // Pass environment variables to the client
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
  }
})
