import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: true, // Ensures correct host resolution
    strictPort: true, // Prevents Vite from changing ports
    hmr: {
      overlay: false, // Stops WebSocket error overlay
      clientPort: 5173, // Forces client to use the correct port
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dil Dhadhakne Do',
        short_name: 'DDD',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        description: 'A PWA that feels like a native app',
        icons: [
          {
            src: 'public/icons/dil logo.webp.192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'public/icons/CompressJPEG.Online_img(512x512).png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|css|js)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'DDD-assets',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
});
