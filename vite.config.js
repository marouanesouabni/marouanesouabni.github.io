import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin personnalisé pour résoudre les assets exportés de Figma
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  /**
   * IMPORTANT : Pour le repo "marouanesouabni.github.io", la base doit être '/'.
   * Si ton repo a un autre nom (ex: "portfolio"), utilise '/nom-du-repo/'.
   */
  base: '/', 

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Aligne l'alias @ sur le dossier src pour tes imports
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Types de fichiers supportés pour les imports bruts
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimisation du hashage des fichiers pour le cache navigateur
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  
  server: {
    // Configuration optionnelle pour le développement local
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  }
})
