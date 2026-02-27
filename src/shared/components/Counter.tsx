import type { FC } from "react";

import { useState } from "react";

export const Counter: FC = () => {
  const [value, setValue] = useState(0);

  const increase = () => setValue(value + 1);

  return (
    <div className="flex flex-col gap-4 p-4 border border-black">
      <p>Count: {value}</p>
      <button type="button" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
