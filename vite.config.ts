import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base set to the repository subpath so assets resolve correctly on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/RogaAndKopyta/',
})

