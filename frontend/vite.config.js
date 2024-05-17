import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    "/users":"http://localhost:5173/",
  },
  plugins: [react()],
})
