import React from "react";
import { useNotificationStore } from "../../store/notifications/notifications.store";

import { getBackgroundColor } from "./components/helpers";
import { CloseIcon } from "../icons";
import { getIcon } from "./components/GetIcon";
import "./notification.style.css";

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotificationStore();

  if (notifications.length === 0) return null;

  return (
    <div className="notification__container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification__item ${getBackgroundColor(
            notification.type
          )}`}
        >
          <div className="notification__content">
            <span className="notification__icon">
              {getIcon(notification.type)}
            </span>
            <p className="notification__message">{notification.message}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="notification__close"
          >
            <CloseIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
