import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base (`./`) makes the build portable: it works when served from a
// domain root (Devin static hosting, custom domain) and from a sub-path
// (GitHub Project Pages, e.g. https://aliyor95.github.io/portfolio-landing-page/).
// Override via the BASE_PATH env var if you need an absolute base.
export default defineConfig({
  base: process.env.BASE_PATH ?? './',
  plugins: [react()],
})
