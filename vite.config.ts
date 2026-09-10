import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/offline-notes-lab/',
  plugins: [react()],
})