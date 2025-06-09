import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': path.resolve(__dirname, './src')
    },
    external: [
      'react-native',
      'react-native-web',
      'react-native-vector-icons',
      'react-native-web-vector-icons',
      '@expo/vector-icons',
      'react-native-safe-area-context'
    ],
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
        'react-navigation',
        'react-native-web/Libraries/Utilities/codegenNativeComponent',
        'react-native-web/Libraries/Utilities/Platform',
        'react-native-web/Libraries/Utilities/Platform.ios',
        'react-native-web/Libraries/Utilities/Platform.android',
        'react-native-web/Libraries/Utilities/Platform.ios.js',
        'react-native-web/Libraries/Utilities/Platform.android.js',
        'react-native-safe-area-context'
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
  }
})
