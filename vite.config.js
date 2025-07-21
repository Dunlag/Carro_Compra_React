import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Configuración de Vite para publicar en GitHub Pages
// La propiedad base indica la subcarpeta donde estará el proyecto
export default defineConfig({
  base: '/Carro_Compra_React/',
  plugins: [react()],
})
