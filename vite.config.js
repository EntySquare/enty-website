import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    fs: {
      strict: true,
    },
    host: "0.0.0.0",
    port: 9369,
  },
  plugins: [vue()],
  resolve: {
    extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  build: {
    // 设置vite打包大小控制
    chunkSizeWarningLimit: 2000,
  },
});
