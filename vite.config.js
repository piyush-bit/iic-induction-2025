import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias "@" to "src" folder
      "@components": path.resolve(__dirname, "./src/components"), // Alias for components
    },
  },
})
