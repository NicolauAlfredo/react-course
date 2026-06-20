import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form>
      <label htmlFor="name">Frind name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="image">Image URL</label>
      <input type="text" name="image" id="image" />

      <Button>Add</Button>
    </form>
  );
}
