import "@/shared/global.css";

import type { FC } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Counter } from "@/shared/components/Counter";

const Popup: FC = () => {
  return (
    <div className="w-xs flex flex-col gap-2 p-4">
      <h1 className="text-2xl">Popup</h1>
      <p className="text-md">
        This is a popup for the extension. Edit `src/popup/index.tsx` to
        customize it.
      </p>
      <Counter />
    </div>
  );
};

const container = document.getElementById("root")!;

createRoot(container).render(
  <StrictMode>
    <Popup />
  </StrictMode>,
);
