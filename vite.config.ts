// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { compression, defineAlgorithm } from 'vite-plugin-compression2'


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") 
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithms: [
        'gzip',
        'brotliCompress',
        defineAlgorithm('deflate', { level: 9 })
      ]
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['/src/lib/utils'],  // Update this line
          icons: ['react-icons'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-separator', '@radix-ui/react-progress']
        },
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash][extname]',
      },
    },
    reportCompressedSize: true,
  },
  server: {
    host: true, // Listen on all local IPs
    port: 5173  // Default Vite port
  }
});
