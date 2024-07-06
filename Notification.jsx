//src/components/Notification.jsx
import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const Notification = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
