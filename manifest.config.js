import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  // For more details on manifest properties, see:
  // https://developer.chrome.com/docs/extensions/mv3/manifest/
  name: "Browser Extension Template",
  version: "1.0.0",
  icons: {
    1024: "public/icon.png",
  },

  permissions: ["sidePanel", "contentSettings"],

  // For more details on popups, see:
  // https://developer.chrome.com/docs/extensions/develop/ui#popups
  action: {
    default_title: "Open extension popup",
    default_icon: "public/icon.png",
    default_popup: "src/popup/index.html",
  },

  // For more details on content scripts, see:
  // https://developer.chrome.com/docs/extensions/mv3/content_scripts/
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/content/index.tsx"],
    },
  ],

  // For more details on side panels, see:
  // https://developer.chrome.com/docs/extensions/develop/ui#side-panels
  side_panel: {
    default_path: "src/sidepanel/index.html",
  },
});
