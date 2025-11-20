import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  base: '/',

});
  // base when deployed:
  // /~topiaho/Web-sovelluskehitys/wsk_routing/
  // /~topiaho/Web-sovelluskehitys/wsk_hooks/
