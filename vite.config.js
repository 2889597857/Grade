import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      com: path.resolve(__dirname, 'src/components'),
      view: path.resolve(__dirname, 'src/view'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  },
  server: {
    proxy: {}
  }
})
