import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react()],
  base: '/harishpallapu/react-vite-realworld-example-app/src/main.jsx',
  server: {
    host: true,
  },
});
