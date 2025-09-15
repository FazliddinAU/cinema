import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://cinema-9y21.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/uploads/": {
        target: "https://cinema-9y21.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
