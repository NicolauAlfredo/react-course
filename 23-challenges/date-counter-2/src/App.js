import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  const targetDate = new Date(today);

  targetDate.setDate(today.getDate() + count);

  function handlePreviousCount() {
    setCount((currentCount) => currentCount - step);
  }

  function handleNextCount() {
    setCount((currentCount) => currentCount + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div className="container">
        <div className="container__step">
          <input
            className="input-range"
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(event) => setStep(Number(Number(event.target.value)))}
          />{" "}
          <span>{step}</span>
        </div>

        <div className="container__count">
          <button className="menus-btn" onClick={handlePreviousCount}>
            -
          </button>
          <input
            className="count"
            type="text"
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
          />
          <button className="plus-btn" onClick={handleNextCount}>
            +
          </button>
        </div>

        <div>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}

          {targetDate.toDateString()}
        </div>

        <div>
          {(count !== 0 || step !== 1) && (
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
