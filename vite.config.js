import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        formations: resolve(__dirname, 'formations.html'),
        competences: resolve(__dirname, 'competences.html'),
        experiences: resolve(__dirname, 'experiences.html'),
        projets: resolve(__dirname, 'projets.html'),
        A_propos: resolve(__dirname, 'A_propos.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})