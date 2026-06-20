import { initialFriends } from "../data/initialFriends";
import Friend from "./Friend";
export default function FriendsList() {
  const friends = initialFriends;

  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
