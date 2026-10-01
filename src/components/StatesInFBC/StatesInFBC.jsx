import { useState } from "react";


function StatesInFBC() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => (prev === 20 ? 20 : prev + 1));
  };

  const handleDecrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>States In Functional Based Components</h1>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  );
}

export default StatesInFBC;
