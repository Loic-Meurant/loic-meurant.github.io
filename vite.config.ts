import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remplacez 'nom-de-votre-depot' par le nom exact de votre repository GitHub
  base: '/loic-meurant/',
  build: {
    outDir: 'dist',
  },
});
