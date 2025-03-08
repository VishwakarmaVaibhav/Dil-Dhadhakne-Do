import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dil Dhadhakne Do',
        short_name: 'DDD',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        description: 'A PWA that feels like a native app',
        icons: [
          {
            src: 'https://logowik.com/content/uploads/images/healthy-lifestyle-for-men8484.logowik.com.webp',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://logowik.com/content/uploads/images/healthy-lifestyle-for-men8484.logowik.com.webp',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
