import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/React_Coding_Login/",
    plugins: [reactRefresh()],
});
