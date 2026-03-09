<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
vite.config.js - 
=======

>>>>>>> 4915d0216f4b876e5a975b04710287c82b6970d2
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
<<<<<<< HEAD
>>>>>>> bf9b5e3432a6c0d2e38dabf24a98689efbf8348f
=======
>>>>>>> 4915d0216f4b876e5a975b04710287c82b6970d2
