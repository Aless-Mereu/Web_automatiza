import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// En local (npm run dev) la web vive en "/".
// Al compilar para GitHub Pages vive en "/Web_automatiza/" (nombre del repositorio).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Web_automatiza/' : '/',
  server: { open: true },
}));
