import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Messages({ messages, isMessagesOpen, toggleMessages }) {
  const navigate = useNavigate();

  const handleMessageClick = () => {
    navigate('/messagerie');
  };

  return (
    <div className="relative">
      <FaEnvelope
        className="hover:text-primary cursor-pointer"
        onClick={toggleMessages}
      />
      {isMessagesOpen && (
        <div className="absolute top-9 right-[-5px] w-[400px] bg-white shadow-lg rounded-md py-2 z-50">
          <h3 className="text-gray-800 px-4 py-2 border-b">Messages</h3>
          <ul
            className="px-4 py-2 text-sm overflow-y-auto"
            style={{ maxHeight: messages.length > 4 ? '300px' : 'auto' }}
          >
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <li
                  key={index}
                  onClick={handleMessageClick}
                  className="flex items-center gap-3 hover:bg-gray-100 py-2 px-3 rounded-md cursor-pointer"
                >
                  <img
                    src={message.avatar}
                    alt={`${message.name} avatar`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span
                      className={`text-sm ${
                        message.isRead ? 'font-normal text-gray-700' : 'font-bold'
                      }`}
                    >
                      {message.name}
                    </span>
                    <p
                      className={`text-xs ${
                        message.isRead ? 'text-gray-500' : 'font-bold'
                      }`}
                    >
                      {message.text.length > 100
                        ? `${message.text.slice(0, 100)}...`
                        : message.text}
                    </p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center py-2">Aucun message</p>
            )}
          </ul>
          <div className="text-center py-2 border-t">
            <button
              onClick={() => navigate('/messagerie')}
              className="text-primary text-sm hover:underline"
            >
              Voir plus
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
