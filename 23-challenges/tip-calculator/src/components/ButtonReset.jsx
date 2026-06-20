export default function ButtonReset() {
  function handleReset() {
    setBill("");
    setMyTip(10);
    setFriendTip(0);
  }

  return (
    <button className="reset-btn" onClick={handleReset}>
      Reset
    </button>
  );
}
