import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join, resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvg } from './src/icons/index';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/h5/',
  plugins: [vue(), eslintPlugin(), vueJsx(), createSvg('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': join(__dirname, 'node_modules'),
    },
  },
  server: {
    hmr: true,
    proxy: {
      '/api': {
        ws: false,
        target: 'http://127.0.0.1:9999',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/visionary/, ''),
      },
    },
  },
});
