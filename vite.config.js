import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [(await import('@vitejs/plugin-react')).default()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(dirname(fileURLToPath(import.meta.url)), 'main.jsx')
      },
      external: [
        'react-native',
        'react-native-web',
        'react-native-vector-icons',
        'react-native-web-vector-icons',
        '@expo/vector-icons',
        '@react-navigation/native',
        '@react-navigation/stack',
        '@react-native-async-storage/async-storage',
        'react-confetti',
        'react-native-safe-area-context',
        'react-native-web/Libraries/Utilities/codegenNativeComponent',
        'react-native-web/Libraries/Utilities/Platform',
        'react-native-web/Libraries/Utilities/Platform.ios',
        'react-native-web/Libraries/Utilities/Platform.android',
        'react-native-web/Libraries/Utilities/Platform.ios.js',
        'react-native-web/Libraries/Utilities/Platform.android.js'
      ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          navigation: ['@react-navigation/native', '@react-navigation/stack'],
          storage: ['@react-native-async-storage/async-storage'],
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
