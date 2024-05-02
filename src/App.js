import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCount(counter - 1);
    } else {
      window.alert("count reached 0");
    }
  };

  return (
    <div className="main">
      <div className="head">
        Counter : 
      </div>
      <div className="counter">
        {counter}
      </div>
      <div className="btn">
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
