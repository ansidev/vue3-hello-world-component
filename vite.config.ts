import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProductionMode: boolean = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'Vue3HelloWorld',
      fileName: format => `vue3-hello-world.${format}.js`,
    },
    sourcemap: isProductionMode,
    rollupOptions: {
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        sourcemap: isProductionMode,
      },
    },
  },
})
