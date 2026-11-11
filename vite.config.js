import { defineConfig } from 'vite';

export default defineConfig({
  // Serve files from the src directory
  root: 'src',
  // Copy static files (robots.txt, sitemap.xml, etc.) into the build output
  publicDir: 'public',
  build: {
    // Output the production build one level up
    outDir: '../dist',
    emptyOutDir: true,
    // Vite can locate index.html automatically when root is set,
    // so we don't need explicit rollupOptions.input here.
  },
});

