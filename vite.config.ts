import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'theme': path.resolve(__dirname, 'src/theme/theme'),
      'icons': path.resolve(__dirname, 'src/theme/icons'),
      'logo': path.resolve(__dirname, 'src/theme/logo/logo'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
