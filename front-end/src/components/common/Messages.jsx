import React from 'react';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Messages({ messages, isMessagesOpen, toggleMessages }) {
  const navigate = useNavigate();

  // Regrouper les messages par expéditeur
  const groupedMessages = messages.reduce((acc, message) => {
    if (!acc[message.idSender]) {
      acc[message.idSender] = {
        lastMessage: message,
        unreadCount: 0,
      };
    }

    // Comparer les dates des messages pour garder le dernier
    if (new Date(message.time) > new Date(acc[message.idSender].lastMessage.time)) {
      acc[message.idSender].lastMessage = message;
    }

    // Ajouter au compteur de messages non lus
    if (!message.isRead) {
      acc[message.idSender].unreadCount += 1;
    }

    return acc;
  }, {});

  const handleMessageClick = () => {
    navigate('/messagerie');
    toggleMessages();
  };

  return (
    <div className="relative">
      <FaEnvelope
        className="hover:text-primary cursor-pointer"
        onClick={toggleMessages}
      />
      {isMessagesOpen && (
        <div
          className={`${
            window.innerWidth <= 768
              ? 'fixed top-0 left-0 w-screen h-screen bg-white z-50'
              : 'absolute top-9 right-[-5px] w-[400px] bg-white shadow-lg rounded-md'
          } py-2`}
        >
          {window.innerWidth <= 768 && (
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h3 className="text-gray-800">Messages</h3>
              <button onClick={toggleMessages} className="text-gray-700 text-xl">
                <FaTimes />
              </button>
            </div>
          )}
          <ul
            className="px-4 py-2 text-sm overflow-y-auto"
            style={{ maxHeight: messages.length > 4 ? '350px' : 'auto' }}
          >
            {Object.values(groupedMessages).length > 0 ? (
              Object.values(groupedMessages).map((group, index) => (
                <li
                  key={index}
                  onClick={handleMessageClick}
                  className="flex items-center gap-3 hover:bg-gray-100 py-2 px-3 rounded-md cursor-pointer"
                >
                  <img
                    src={group.lastMessage.avatar}
                    alt={`${group.lastMessage.name} avatar`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span
                      className={`text-sm ${
                        group.unreadCount > 0 ? 'font-bold text-gray-800' : 'font-normal text-gray-700'
                      }`}
                    >
                      {group.lastMessage.name}
                    </span>
                    <p
                      className={`text-xs ${
                        group.unreadCount > 0 ? 'font-bold text-gray-800' : 'text-gray-500'
                      }`}
                    >
                      {group.lastMessage.text.length > 100
                        ? `${group.lastMessage.text.slice(0, 100)}...`
                        : group.lastMessage.text}
                    </p>
                    <p className="text-xs text-gray-500">{group.lastMessage.time}</p>
                  </div>
                  {group.unreadCount > 1 && (
                    <span className="bg-primary text-white text-xs rounded-full px-2 py-1">
                      {group.unreadCount}
                    </span>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center py-2">Aucun message</p>
            )}
          </ul>
          {window.innerWidth > 768 && (
            <div className="text-center py-2 border-t">
              <button
                onClick={() => navigate('/messagerie')}
                className="text-primary text-sm hover:underline"
              >
                Voir plus
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Messages;
