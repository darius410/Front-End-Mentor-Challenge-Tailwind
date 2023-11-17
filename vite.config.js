import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [vue()],
  base: '/my-app/', // Set the base path for your application
  build: {
    outDir: 'dist', // Specify the output directory for the build
    assetsDir: 'assets', // Specify the assets directory within the output directory
    rollupOptions: {
      input: {
        main: './index.html', // Adjust the entry point as needed
      },
    },
  },
});