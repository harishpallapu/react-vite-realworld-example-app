import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react()],
  base: '/react-vite-realworld-example-app',
  server: {
    host: true,
  },
});
