import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  // GitHub Pages needs static files instead of a server.
  nitro: isLovableSandbox ? undefined : false,

  tanstackStart: isLovableSandbox
    ? {
        server: { entry: "server" },
      }
    : {
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        pages: [{ path: "/" }],
      },

  vite: {
    base: "/smart-qr-charm/",
  },
});
