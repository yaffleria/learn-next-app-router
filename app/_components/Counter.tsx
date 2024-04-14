'use client'

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="bg-slate-400 rounded-md">
      <p>Count: {count}</p>
      <button type="button" onClick={IncrementCount}>Increament</button>
    </div>
  );
}

export default Counter