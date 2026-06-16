import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is set to the repository name so the build works on GitHub Pages
// (https://aliyor95.github.io/portfolio/). Override via the BASE_PATH env var
// if deploying elsewhere (e.g. a custom domain or a different repo name).
export default defineConfig({
  base: process.env.BASE_PATH ?? '/portfolio/',
  plugins: [react()],
})
