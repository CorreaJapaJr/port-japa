import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base relativa: o build funciona em domínio próprio, Vercel, Netlify
// e também em GitHub Pages (/port-japa/) sem precisar trocar nada.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
