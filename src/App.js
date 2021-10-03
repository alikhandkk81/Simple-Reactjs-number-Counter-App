import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const deincrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h2>Welcome to Counter App</h2>
      <p>The Count is: {count}</p>
      <button onClick={deincrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
