/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/Multi-step-Register-Form/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
