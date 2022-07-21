import PropsType from 'prop-types';
import { NotificationText } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationText>
      <span>{message}</span>
    </NotificationText>
  );
};

Notification.protoType = {
  message: PropsType.string,
};

export default Notification;
