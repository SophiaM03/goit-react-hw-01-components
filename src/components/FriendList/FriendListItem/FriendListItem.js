import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <div className={isOnline ? css.online : css.offline}></div>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
