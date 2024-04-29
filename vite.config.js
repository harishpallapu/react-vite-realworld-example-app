import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: '/src/main.jsx', // Specify the output directory for the build
    emptyOutDir: true // Clear the output directory before building
  }
});
