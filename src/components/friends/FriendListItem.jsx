import css from './FriendListItem.module.css';

const FriendItem = ({isOnline, avatar, name}) => {
    return <li className={css.item}>
    <span className={isOnline ? css.green : css.red}>{isOnline}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </li>
}

export default FriendItem;