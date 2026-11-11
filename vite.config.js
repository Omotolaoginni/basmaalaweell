import { defineConfig } from 'vite';

export default defineConfig({
  // Serve files from the src directory
  root: 'src',
  // No public folder needed for now
  publicDir: false,
  build: {
    // Output the production build one level up
    outDir: '../dist',
    emptyOutDir: true,
    // Vite can locate index.html automatically when root is set,
    // so we don't need explicit rollupOptions.input here.
  },
});

