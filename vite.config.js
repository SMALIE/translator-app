import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  resolve: {
    alias: {
      '~bootstrap': './node_modules/bootstrap',
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})
