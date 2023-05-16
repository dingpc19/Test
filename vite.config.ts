import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: "[name].[ext]",
    exports: "named" as const,
    globals: {
      vue: "Vue",
    },
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
  })],
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild'
    sourcemap: false, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/index.ts",
      name: "Test",
      fileName: "test-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
})
