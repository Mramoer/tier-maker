import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';

export default defineConfig({
  plugins: [react()],
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
  }
}) 
