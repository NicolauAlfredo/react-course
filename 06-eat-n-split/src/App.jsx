import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSpliteBill from "./components/FormSpliteBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <Button>Add Friend</Button>
        <FormAddFriend />
      </div>

      <FormSpliteBill />
    </div>
  );
}

export default App;
