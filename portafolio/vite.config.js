import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ajusta la base según tu estructura en GitHub Pages
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // ajusta la ruta según tu estructura
    },
    outDir: 'dist', // ajusta el directorio de salida
  },
});