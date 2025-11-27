import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    // Optimizaciones para reducir el uso de memoria
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons']
        }
      }
    }
  },
  // Excluir archivos innecesarios del procesamiento
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['*.pdf']
  }
})