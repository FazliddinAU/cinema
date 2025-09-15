export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://cinema-cu8z.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/uploads/": {
        target: "https://cinema-cu8z.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
