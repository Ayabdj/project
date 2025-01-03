import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';
import { FaSignOutAlt, FaUser, FaBars } from 'react-icons/fa';

function UserGreeting({ isSignedUp, isJoined, user, notifications, messages }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? "text-primary border-b-2 border-b-primary"
      : "hover:text-primary";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => console.log("Déconnexion effectuée !");

  if (isSignedUp) {
    return (
      <nav className="flex items-center justify-between w-full px-4 md:px-8 lg:px-5">
        {/* Zone principale du menu */}
        <div className="hidden md:flex gap-14 font-semibold justify-center w-full">
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
            <button className="bg-primary text-white  px-5 py-[3.5px] rounded-lg text-[14px]">
              Rejoignez nous
            </button>
          )}
        </div>

        {/* Icône pour le menu mobile (visible uniquement sur les petits écrans) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary text-xl">
            <FaBars />
          </button>
        </div>

        {/* Notifications, Messages, Profil */}
        <span className="flex items-center gap-6 relative ml-auto">
          <Notifications
            notifications={notifications}
            isNotificationsOpen={isNotificationsOpen}
            toggleNotifications={() =>
              setIsNotificationsOpen(!isNotificationsOpen)
            }
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
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
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

        {/* Menu mobile (affiché uniquement lorsque le bouton est cliqué) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-50 md:hidden">
            <Link
              to="/"
              className={`${linkClass("/")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              accueil
            </Link>
            <Link
              to="/service"
              className={`${linkClass("/service")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              services
            </Link>
            <Link
              to="/demandes"
              className={`${linkClass("/demandes")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              demandes
            </Link>
            {isJoined ? (
              <Link
                to="/projets"
                className={`${linkClass("/projets")} block px-4 py-2`}
                onClick={toggleMobileMenu}
              >
                gestions des projets
              </Link>
            ) : (
              <button
                className="bg-primary text-white px-4 py-2 w-full text-left"
                onClick={toggleMobileMenu}
              >
                Rejoignez nous
              </button>
            )}
          </div>
        )}
      </nav>
    );
  } else {
    return (
      <div className="flex items-center justify-end gap-12 font-semibold w-full">
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
