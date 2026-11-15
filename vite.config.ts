import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // O GitHub Pages serve o site em /<repositorio>/. Sem isso, os assets
  // apontam para a raiz do dominio e quebram.
  // O Pages serve o site em /<repositorio>/. A variavel vem do workflow.
  base: (globalThis as { process?: { env?: Record<string, string> } }).process?.env
    ?.GITHUB_PAGES
    ? '/mars-survival-guide/'
    : '/',
  server: {
    port: 5173,
    proxy: {
      // O PDS não envia cabeçalhos CORS; o proxy resolve isso em desenvolvimento.
      '/pds': {
        target: 'https://pds.mcp.nasa.gov',
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/pds/, '/api/search/1'),
        headers: {
          'User-Agent': 'mars-survival-guide/0.1',
          Accept: 'application/json',
        },
      },
    },
  },
})
