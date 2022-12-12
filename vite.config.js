import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import requireTransform from 'vite-plugin-require-transform'
import path from 'path'

export default defineConfig({
  lintOnSave: false,
  plugins: [
    requireTransform(/.vue$|.js$|.ts$|.tsx$/, '_vite_plugin_require_transform_'),
    createVuePlugin({
      jsx: true
    }),
    viteCommonjs({ skipPreBuild: true })
  ],
  build: {
    // 打包时将cjs编译为esm
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
  vite: {
    disabledLint: true
  },
  runtimeCompiler: true,
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '#', replacement: path.resolve(__dirname, 'public') },
      {
        find: /^~/,
        replacement: ''
      }
    ]
  },
  server: {
    host: '0.0.0.0'
  }
})
