import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/facebook/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        friendBlog: 'friend-blog.html'
      }
    }
  },
  plugins: [react()],
})
