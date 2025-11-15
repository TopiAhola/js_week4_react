import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  base: '/',



});

  /*
    ssr: {
    external: [
      '@swc/core',
      '@swc/core-win32-x64-msvc',
      '/@vitejs/plugin-react-swc'
    ]
 },

  optimizeDeps: {
    include: [],

    exclude: [
      '@swc/core',
      '@swc/core-win32-x64-msvc',
      '/@vitejs/plugin-react-swc'
    ],
  },

  build: {
    target: 'modules',
  }


   */
