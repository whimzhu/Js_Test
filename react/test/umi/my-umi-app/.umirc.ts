import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/about", component: "about" },
    { path: "/eventBus", component: "eventBus" },
    { path: "/redux", component: "redux" },
    { path: "/test", component: "test" },
    { path: "/css", component: "css" },
  ],
  npmClient: "npm",
});
