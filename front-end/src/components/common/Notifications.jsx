import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Notifications({ notifications, isNotificationsOpen, toggleNotifications }) {
  const navigate = useNavigate();

  const handleNotificationClick = (type) => { //a modifier 
    if (type === "proposition") {
      navigate('/projets');
    } else if (type === "demande") {
      navigate('/demandes');
    }
  };

  return (
    <div className="relative">
      <FaBell
        className="hover:text-primary cursor-pointer"
        onClick={toggleNotifications}
      />
      {isNotificationsOpen && (
        <div className="absolute top-9 right-[-5px] w-[400px] bg-white shadow-lg rounded-md py-2 z-50">
          <h3 className="text-gray-800 px-4 py-2 border-b">Notifications</h3>
          <ul
            className="px-4 py-2 text-sm overflow-y-auto"
            style={{ maxHeight: notifications.length > 4 ? '300px' : 'auto' }}
          >
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li
                  key={index}
                  onClick={() => handleNotificationClick(notification.type)}
                  className="flex items-center gap-3 hover:bg-gray-100 py-2 px-3 rounded-md cursor-pointer"
                >
                  <img
                    src={notification.avatar}
                    alt={`${notification.name} avatar`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span
                      className={`${
                        notification.isRead ? 'font-normal' : 'font-bold'
                      } text-gray-800`}
                    >
                      {notification.name}
                    </span>
                    <p
                      className={`${
                        notification.isRead ? 'font-normal text-gray-600' : 'font-bold'
                      }`}
                    >
                      {notification.action}
                    </p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center py-2">Aucune notification</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notifications;

