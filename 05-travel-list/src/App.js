import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");

    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTaggleItems={handleToggleItem}
        onClearList={handleClearList}
      />

      <Stats items={items} />
    </div>
  );
}
