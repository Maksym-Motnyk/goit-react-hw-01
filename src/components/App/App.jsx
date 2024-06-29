import css from "./App.module.css";
import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../TransactionHistory.json";

export default function App() {
  return (
    <div className={css.container}>
      <Profile userProfile={userData} />
      <FriendList items={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
