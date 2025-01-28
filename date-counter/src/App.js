import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // function addStep() {
  //   setStep(step + 1);
  // }
  // function reduceStep() {
  //   if (step > 1) setStep(step - 1);
  // }
  function handleChangeStep(e) {
    setStep(Number(e.target.value));
  }

  function addCount() {
    setCount(count + step);
  }
  function reduceCount() {
    setCount(count - step);
  }
  function handleChangeCount(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        {/* <button onClick={reduceStep}>-</button> */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleChangeStep}
        />
        <span>{step}</span>
        {/* <button onClick={addStep}>+</button> */}
      </div>
      <div>
        <button onClick={reduceCount}>-</button>
        {/* <span>Count: {count}</span> */}
        <input type="text" value={count} onChange={handleChangeCount} />
        <button onClick={addCount}>+</button>
      </div>
      <CalculatedDate count={count} />
      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

function CalculatedDate({ count }) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + count);
  // console.log(newDate);

  return (
    <div>
      {count === 0 && `Today is ${newDate.toDateString()}`}
      {count >= 1 &&
        `${count} ${
          count === 1 ? "day" : "days"
        } from today is ${newDate.toDateString()}`}
      {count <= -1 &&
        `${Math.abs(count)} ${
          count === -1 ? "day" : "days"
        } ago was ${newDate.toDateString()}`}
    </div>
  );
}
