import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lit-kit'
    },
    rollupOptions: {
      external: [
        'lit'
      ],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  },
  plugins: [
    dts({
      outputDir: 'dist',
      include: ['src'],
      staticImport: true,
      logDiagnostics: true,
      insertTypesEntry: true
    })
  ]
})
