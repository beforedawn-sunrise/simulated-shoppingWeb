import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import ViteCompress from "vite-plugin-compression";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
    Pages({
      exclude   : ["**/components/*.vue"],
      routeStyle: "nuxt",
      resolver  : "vue",
      pagesDir: 'src/pages',
    }
    ),
    ViteCompress(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
