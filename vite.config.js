import { defineConfig } from 'vite'

export default defineConfig({
  // Utiliser './' permet à ton site de trouver ses fichiers (CSS, JS) 
  // peu importe s'il est hébergé sur github.io/Portofolio ou ailleurs.
  base: './', 
  build: {
    outDir: 'dist',
  }
})