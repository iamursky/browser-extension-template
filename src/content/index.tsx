import type { FC } from "react";

import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { Counter } from "@/shared/components/Counter";
import globalCss from "@/shared/global.css?inline";

const Content: FC = () => {
  useEffect(() => {
    // This useEffect is run once when the content script is loaded.
    // You can perform any setup or initialization here.
    console.log("Content script loaded");

    // Cleanup function (optional)
    return () => {
      console.log("Content script unloaded");
    };
  }, []);

  return (
    <div className="right-4 top-4 w-xs fixed z-50 flex flex-col gap-2 p-4 bg-white rounded-lg shadow-2xl pointer-events-auto">
      <h1 className="text-2xl">Content Script</h1>
      <p className="text-md">
        This is a content script for the extension. Edit `src/content/index.tsx`
        to customize it.
      </p>
      <Counter />
    </div>
  );
};

// Make a viewport-sized container for the content
const container = document.createElement("div");
container.id = "browser-extension-template-content";
container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100dvw";
container.style.height = "100dvh";
container.style.zIndex = "2147483647";
container.style.pointerEvents = "none";

// Use Shadow DOM to isolate styles and make Tailwind work
const shadow = container.attachShadow({ mode: "open" });
const shadowDomStyle = document.createElement("style");
shadowDomStyle.textContent = globalCss;
shadow.appendChild(shadowDomStyle);

const root = document.createElement("div");
shadow.appendChild(root);

document.body.appendChild(container);

createRoot(root).render(
  <StrictMode>
    <Content />
  </StrictMode>,
);
