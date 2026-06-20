import { useState } from "react";
import Button from "./Button";

export default function FormSpliteBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label htmlFor="bill-value">Bill Value</label>
      <input
        type="number"
        name="bill-value"
        id="bill-value"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <label htmlFor="your-expense">Your expense</label>
      <input
        type="number"
        name="your-expense"
        id="your-expense"
        value={paidByUser}
        onChange={(event) =>
          setPaidByUser(
            Number(event.target.value) > bill
              ? paidByUser
              : Number(event.target.value),
          )
        }
      />

      <label htmlFor="friend-expense">{selectedFriend.name} expense</label>
      <input
        type="text"
        name="friend-expense"
        id="friend-expense"
        disabled
        value={paidByFriend}
      />

      <label htmlFor="friend-expense">Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
