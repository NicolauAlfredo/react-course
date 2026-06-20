import Button from "./Button";

export default function FormSpliteBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X </h2>

      <label htmlFor="bill-value">Bill Value</label>
      <input type="number" name="bill-value" id="bill-value" />

      <label htmlFor="your-expense">Your expense</label>
      <input type="number" name="your-expense" id="your-expense" />

      <label htmlFor="friend-expense">Friend expense</label>
      <input type="text" name="friend-expense" id="friend-expense" disabled />

      <label htmlFor="friend-expense">Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
