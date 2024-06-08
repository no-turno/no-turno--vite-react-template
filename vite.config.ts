import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import tsr from "./tsr.config.json"

const editor = new ShadowRealm().evaluate(Bun.editor)
console.log(editor);

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(tsr)
  ],
  build: {
    outDir: "dist"
  },
  server: {
    host: '0.0.0.0',
    port: import.meta.env.PORT as unknown as number
  }
})
