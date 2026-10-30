import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
     registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.svg','icons.svg'],
      manifest: {
        name: 'Mi primera PWA',
        short_name: 'MyAppPWA',
        description: 'La mas fantastica app PWA del mundo',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',

        screenshots: [
          {
            src: "logo-1200x581.png",
            sizes: "1200x581",
            type: "image/png",
            form_factor: "narrow"
          },
          {
            src: "logo-1200x581.png",
            sizes: "1200x581",
            type: "image/png",
            form_factor: "wide"
          }
        ],
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],

})