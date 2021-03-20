import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { getAliases } from "vite-aliases";

const aliases = getAliases();

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: aliases,
  },
});
