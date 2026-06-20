import { useState } from "react";

import ButtonReset from "./ButtonReset";
import { SelectPercentage } from "./SelectPercentage";

export default function Result() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(10);
  const [friendTip, setFriendTip] = useState(0);

  const billValue = Number(bill) || 0;
  const averageTip = (myTip + friendTip) / 2;
  const tipAmount = billValue * (averageTip / 100);
  const total = billValue + tipAmount;

  return (
    <main className="app">
      <section className="tip-card">
        <h1>Tip Calculator</h1>

        <div className="field">
          <label>How much was the bill?</label>
          <input
            type="number"
            min="0"
            value={bill}
            placeholder="Enter bill amount"
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <SelectPercentage
          label="How did you like the service?"
          value={myTip}
          onChange={setMyTip}
        />

        <SelectPercentage
          label="How did your friend like the service?"
          value={friendTip}
          onChange={setFriendTip}
        />

        <div className="result">
          You pay <strong>${total.toFixed(2)}</strong>
          <span>
            (${billValue.toFixed(2)} + ${tipAmount.toFixed(2)} tip)
          </span>
        </div>

        <ButtonReset />
      </section>
    </main>
  );
}
