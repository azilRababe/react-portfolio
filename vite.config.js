import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'],
  base: '/react-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        publicPath: '/react-portfolio/',
      },
    },
  },
})
