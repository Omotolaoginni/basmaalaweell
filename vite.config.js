import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // Serve files from the src directory
  root: 'src',
  // Copy static files (robots.txt, sitemap.xml, etc.) into the build output
  publicDir: 'public',
  build: {
    // Output the production build one level up
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/index.html'),
        consultancy: resolve(import.meta.dirname, 'src/consultancy.html'),
        work: resolve(import.meta.dirname, 'src/work.html'),
        speaking: resolve(import.meta.dirname, 'src/speaking.html'),
        writing: resolve(import.meta.dirname, 'src/writing.html'),
      },
    },
  },
});
