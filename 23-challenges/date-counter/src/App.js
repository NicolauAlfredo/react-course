import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  const targetDate = new Date(today);

  targetDate.setDate(today.getDate() + count);

  function handlePreviousStep() {
    setStep((currentStep) => currentStep - 1);
  }

  function handleNextStep() {
    setStep((currentStep) => currentStep + 1);
  }

  function handlePreviousCount() {
    setCount((currentCount) => currentCount - step);
  }

  function handleNextCount() {
    setCount((currentCount) => currentCount + step);
  }

  return (
    <div>
      <div className="container">
        <div className="container__step">
          <button className="menus-btn" onClick={handlePreviousStep}>
            -
          </button>
          <span className="step">Step: {step}</span>
          <button className="plus-btn" onClick={handleNextStep}>
            +
          </button>
        </div>

        <div className="container__count">
          <button className="menus-btn" onClick={handlePreviousCount}>
            -
          </button>
          <span className="count">Count: {count}</span>
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
      </div>
    </div>
  );
}
