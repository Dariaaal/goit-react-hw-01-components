import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({location, avatar, username, tag, stats:{followers, views, likes}}) => {
    return (    
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
      />
      <p className={css.name}>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  
    <ul>
      <li>
        <span className={css.label}>Followers </span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views </span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes </span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
  );
}

Profile.propTypes = {
    location: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
}

export default Profile;