import css from "./Profile.module.css";

export default function Profile({
  userProfile: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img
          src={avatar}
          alt="User avatar"
          width={200}
          height={200}
          className={css.imgProfile}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tagLocatio}>@{tag}</p>
        <p className={css.tagLocatio}>{location}</p>
      </div>

      <ul className={css.profileLyst}>
        <li className={css.profileLystLi}>
          <span className={css.spanInfo}>Followers</span>
          <span className={css.spanNumder}>{followers}</span>
        </li>
        <li className={css.profileLystLi}>
          <span className={css.spanInfo}>Views</span>
          <span className={css.spanNumder}>{views}</span>
        </li>
        <li className={css.profileLystLi}>
          <span className={css.spanInfo}>Likes</span>
          <span className={css.spanNumder}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
