import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ items }) {
  return (
    <div className={css.container}>
      <ul className={css.listItem}>
        {items.map((item) => (
          <li key={item.id} className={css.frendItem}>
            <FriendListItem friend={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
