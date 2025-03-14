import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint({
    eslintOptions: {
      fix: true,
    },
  })],
  optimizeDeps: {
    include: ['**/*module.scss']
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      cssModules: {
        dashedIdents: true,
        pattern: 'tier-[name]-[local]',
      },
    },
  },
  build: {
    cssMinify: 'lightningcss'
  },
  server: {
    port: 5173, 
    proxy: {
      '/try': {
        target: 'http://localhost:80',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/try/, '')
      },
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/user/, '')
      }
    }
  }
}) 
