import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';

// https://vite.dev/config/~
export default defineConfig({
  base: '',
  plugins: [vue()],
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('./src', import.meta.url))
    },
    
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-components-library',
      fileName: (format) => `vue-components-library.${format}.js`,
    },    
    rollupOptions: {
      external: ['vue'],
      output: {
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  
})
