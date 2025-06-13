import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ignite-Feed/', // <-- isso é essencial! Use o nome do repositório
  plugins: [react()],
})
