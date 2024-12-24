import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

function UserGreeting({ isSignedUp, isJoined, user, notifications, messages }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? "text-primary border-b-2 border-b-primary"
      : "hover:text-primary";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => console.log("Déconnexion effectuée !");

  if (isSignedUp) {
    return (
      <nav className="flex items-center gap-14">
        <div className="flex gap-14 font-semibold">
          <Link to="/" className={linkClass("/")}>
            accueil
          </Link>
          <Link to="/service" className={linkClass("/service")}>
            services
          </Link>
          <Link to="/demandes" className={linkClass("/demandes")}>
            demandes
          </Link>
          {isJoined ? (
            <Link to="/projets" className={linkClass("/projets")}>
              gestions des projets
            </Link>
          ) : (
            <button className="bg-primary text-white px-5 py-[3.5px] rounded-lg text-[14px]">
              Rejoignez nous
            </button>
          )}
        </div>
        <span className="flex items-center gap-8 relative lg:ml-[200px]">
          <Notifications
            notifications={notifications}
            isNotificationsOpen={isNotificationsOpen}
            toggleNotifications={() => setIsNotificationsOpen(!isNotificationsOpen)}
          />
          <Messages
            messages={messages}
            isMessagesOpen={isMessagesOpen}
            toggleMessages={() => setIsMessagesOpen(!isMessagesOpen)}
          />
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-7 h-7 rounded-full object-cover cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-[-5px] mt-[150px] w-[250px] bg-white shadow-lg rounded-md py-2 z-50">
              <button
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <FaUser /> Informations personnelles
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleLogout}
              >
                <FaSignOutAlt /> Se déconnecter
              </button>
            </div>
          )}
        </span>
      </nav>
    );
  } else {
    return (
      <div className="flex items-center gap-12 font-semibold">
        <Link to="/" className={linkClass("/")}>
          accueil
        </Link>
        <Link to="/service" className={linkClass("/service")}>
          services
        </Link>
        <Link to="/login" className={linkClass("/login")}>
          se connecter/s'inscrire
        </Link>
      </div>
    );
  }
}

export default UserGreeting;
