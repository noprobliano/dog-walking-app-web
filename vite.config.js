import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'main.jsx')
      },
      external: [
        'react-native',
        'react-native-web',
        'react-native-vector-icons',
        'react-native-web-vector-icons',
        '@expo/vector-icons',
        'react-confetti',
        'react-native-safe-area-context'
      ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-native-vector-icons', '@expo/vector-icons'],
          confetti: ['react-confetti']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  base: ''
})

