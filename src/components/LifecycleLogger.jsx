import { useState, useEffect } from "react";

const LifecycleLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted...");

    return () => {
      console.log("Component unmounted...");
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated", count);
    }
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="logger-container">
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} className="second-btn">
        Update
      </button>
    </div>
  );
};

export default LifecycleLogger;
