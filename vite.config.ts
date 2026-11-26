import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
const repositoryName = process.env["GITHUB_REPOSITORY"]?.split("/")[1];
const base = isGitHubPages && repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  // GitHub Pages needs static files instead of a server.
  nitro: isGitHubPages ? false : undefined,

  tanstackStart: !isGitHubPages
    ? {
        server: { entry: "server" },
      }
    : {
        router: { basepath: base },
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: false,
        },
        pages: [{ path: "/" }],
      },

  vite: {
    base,
  },
});
